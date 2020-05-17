import outputFiles from 'output-files'
import withLocalTmpDir from 'with-local-tmp-dir'
import puppeteer from '@dword-design/puppeteer'
import { Nuxt, Builder } from 'nuxt'
import mapValues from './map-values'
import endent from './endent'

let browser
let page

const runTest = ({ files = {}, test }) => () =>
  withLocalTmpDir(async () => {
    await outputFiles(files)
    const nuxt = new Nuxt({ dev: false })
    await new Builder(nuxt).build()
    await nuxt.listen()
    await test()
    await nuxt.close()
  })

export default {
  before: async () => {
    browser = await puppeteer.launch()
    page = await browser.newPage()
  },
  after: () => browser.close(),
  afterEach: () => page.evaluate(() => localStorage.clear()),
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
