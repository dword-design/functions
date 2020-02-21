import endent from './endent'
import outputFiles from 'output-files'
import withLocalTmpDir from 'with-local-tmp-dir'
import puppeteer from '@dword-design/puppeteer'
import getPackageName from 'get-package-name'
import execa from 'execa'
import kill from 'tree-kill-promise'
import portReady from 'port-ready'

export default {
  existing: () => withLocalTmpDir(async () => {
    await outputFiles({
      'package.json': endent`
        {
          "baseConfig": "nuxt",
          "dependencies": {
            "${getPackageName(require.resolve('@dword-design/base-config-nuxt'))}": "^1.0.0"
          }
        }
      `,
      src: {
        'index.js': endent`
          export default {
            plugins: [
              { src: require.resolve('./plugins/setup'), mode: 'client' },
            ],
          }
        `,
        'pages/index.js': endent`
          import getLocalStorageItem from '../../../src/get-local-storage-item'

          export default {
            render: () => <div>{ process.browser ? getLocalStorageItem('foo') : 'undefined' }</div>,
          }
        `,
        'plugins/setup.js': 'localStorage.setItem(\'foo\', \'bar\')',
      },
    })

    await execa.command('base prepare')
    await execa.command('base prepublishOnly')
    const childProcess = execa.command('base start')
    await portReady(3000)
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto('http://localhost:3000')
    expect(await page.content()).toMatch('<div>bar</div>')
    await browser.close()
    await kill(childProcess.pid)
  }),
  'non-existing': () => withLocalTmpDir(async () => {
    await outputFiles({
      'package.json': endent`
        {
          "baseConfig": "nuxt",
          "dependencies": {
            "${getPackageName(require.resolve('@dword-design/base-config-nuxt'))}": "^1.0.0"
          }
        }
      `,
      'src/pages/index.js': endent`
        import getLocalStorageItem from '../../../src/get-local-storage-item'

        export default {
          render: () => <div>{ process.browser && getLocalStorageItem('foo') === undefined ? 'undefined' : '' }</div>,
        }
      `,
    })

    await execa.command('base prepare')
    await execa.command('base prepublishOnly')
    const childProcess = execa.command('base start')
    await portReady(3000)
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto('http://localhost:3000')
    expect(await page.content()).toMatch('<div>undefined</div>')
    await browser.close()
    await kill(childProcess.pid)
  }),
}