import puppeteer from '@dword-design/puppeteer'
import { Builder, Nuxt } from 'nuxt'
import outputFiles from 'output-files'
import withLocalTmpDir from 'with-local-tmp-dir'

import endent from './endent'
import mapValues from './map-values'

let browser
let page

const runTest = config => () => {
  config = { files: {}, ...config }

  return withLocalTmpDir(async () => {
    await outputFiles(config.files)

    const nuxt = new Nuxt({ dev: false })
    await new Builder(nuxt).build()
    await nuxt.listen()
    await config.test()
    await nuxt.close()
  })
}

export default {
  after: () => browser.close(),
  afterEach: () => page.evaluate(() => localStorage.clear()),
  before: async () => {
    browser = await puppeteer.launch()
    page = await browser.newPage()
  },
  ...({
    existing: {
      files: {
        'pages/index.vue': endent`
          <template>
            <div>{{ foo || 'undefined' }}</div>
          </template>

          <script>
          import getLocalStorageItem from '../../src/get-local-storage-item'

          export default {
            computed: {
              foo: () => process.browser ? getLocalStorageItem('foo') : undefined,
            },
            beforeMount: () => localStorage.setItem('foo', 'bar'),
          }
          </script>

        `,
      },
      test: async () => {
        await page.goto('http://localhost:3000')
        expect(await page.content()).toMatch('<div>bar</div>')
      },
    },
    'non-existing': {
      files: {
        'pages/index.vue': endent`
          <template>
            <div>{{ foo || 'undefined' }}</div>
          </template>

          <script>
          import getLocalStorageItem from '../../src/get-local-storage-item'

          export default {
            computed: {
              foo: () => process.browser ? getLocalStorageItem('foo') : undefined,
            },
          }
          </script>

        `,
      },
      test: async () => {
        await page.goto('http://localhost:3000')
        expect(await page.content()).toMatch('<div>undefined</div>')
      },
    },
  } |> mapValues(runTest)),
}
