import { endent } from '@dword-design/functions'
import outputFiles from 'output-files'
import withLocalTmpDir from 'with-local-tmp-dir'
import portfinder from 'portfinder'
import express from 'express'
import P from 'path'
import puppeteer from 'puppeteer'
import getPackageName from 'get-package-name'
import { spawn } from 'child-process-promise'

export default () => withLocalTmpDir(__dirname, async () => {
  await outputFiles({
    'package.json': endent`
      {
        "baseConfig": "vue-app",
        "dependencies": {
          "${getPackageName(require.resolve('@dword-design/base-config-vue-app'))}": "^1.0.0",
          "${getPackageName(require.resolve('vue'))}": "^1.0.0"
        }
      }
    `,
    'src/index.js': endent`
      import { getLocalStorageItem } from '@dword-design/functions'
      import Vue from 'vue'

      new Vue({
        el: '#app',
        render: () => <div>{ getLocalStorageItem('foo') === undefined ? 'undefined' : '' }</div>,
      })
    `,
  })

  await spawn('base', ['prepublishOnly'])

  const port = await portfinder.getPortPromise()
  const app = express().use(express.static(P.resolve('dist'))).listen(port)
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto(`http://localhost:${port}`)
  expect(await page.content()).toMatch('<div>undefined</div>')
  await browser.close()
  app.close()
})
