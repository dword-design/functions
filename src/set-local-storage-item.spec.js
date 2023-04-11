import tester from '@dword-design/tester'
import testerPluginPuppeteer from '@dword-design/tester-plugin-puppeteer'
import testerPluginTmpDir from '@dword-design/tester-plugin-tmp-dir'
import { Builder, Nuxt } from 'nuxt'
import outputFiles from 'output-files'

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

          const nuxt = new Nuxt({ dev: false })
          await new Builder(nuxt).build()
          await nuxt.listen()
          try {
            await config.test.call(this)
          } finally {
            await nuxt.close()
          }
        }
      },
    },
  ],
)
