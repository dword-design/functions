import tester from '@dword-design/tester'
import testerPluginPuppeteer from '@dword-design/tester-plugin-puppeteer'
import testerPluginTmpDir from '@dword-design/tester-plugin-tmp-dir'
import { execaCommand } from 'execa'
import nuxtDevReady from 'nuxt-dev-ready'
import outputFiles from 'output-files'
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

          const nuxt = execaCommand('nuxt dev')
          try {
            await nuxtDevReady()
            await config.test.call(this)
          } finally {
            await kill(nuxt.pid)
          }
        }
      },
    },
  ],
)
