import tester from '@dword-design/tester'
import testerPluginPuppeteer from '@dword-design/tester-plugin-puppeteer'
import testerPluginTmpDir from '@dword-design/tester-plugin-tmp-dir'
import { loadNuxt } from '@nuxt/kit'
import { execaCommand } from 'execa'
import { build } from 'nuxt'
import outputFiles from 'output-files'
import { pEvent } from 'p-event'
import kill from 'tree-kill-promise'

import endent from './endent.js'

export default tester(
  {
    valid: {
      files: {
        'pages/index.vue': endent`
        <template>
          <div>{{ foo || undefined }}</div>
        </template>

        <script>
        import setLocalStorageItem from '../../src/set-local-storage-item.js'

        export default {
          computed: {
            foo: () => process.browser ? localStorage.getItem('foo') : undefined,
          },
          beforeMount: () => setLocalStorageItem('foo', 'bar'),
        }
        </script>
      `,
      },
      async test() {
        await this.page.goto('http://localhost:3000')
        expect(await this.page.content()).toMatch('<div>bar</div>')
      },
    },
  },
  [
    testerPluginTmpDir(),
    testerPluginPuppeteer(),
    {
      transform: config => {
        config = { files: {}, ...config }

        return async function () {
          await outputFiles(config.files)

          const nuxt = await loadNuxt({ config: { telemetry: false } })
          await build(nuxt)

          const childProcess = execaCommand('nuxt start', { all: true })
          await pEvent(
            childProcess.all,
            'data',
            data => data.toString() === 'Listening http://[::]:3000\n'
          )
          try {
            await config.test.call(this)
          } finally {
            await kill(childProcess.pid)
          }
        }
      },
    },
  ]
)
