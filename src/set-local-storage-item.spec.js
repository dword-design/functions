import tester from '@dword-design/tester';
import testerPluginPuppeteer from '@dword-design/tester-plugin-puppeteer';
import testerPluginTmpDir from '@dword-design/tester-plugin-tmp-dir';
import { execaCommand } from 'execa';
import nuxtDevReady from 'nuxt-dev-ready';
import outputFiles from 'output-files';
import kill from 'tree-kill-promise';
import { chromium } from 'playwright';

import endent from './endent.js';

export default tester(
  {
    valid: {
      files: {
        'pages/index.vue': endent`
          <template>
            <div :class="\`foo \${foo}\`" />
            <button @click="click" />
          </template>

          <script setup>
          import { computed } from '#imports';

          import setLocalStorageItem from '../../src/set-local-storage-item.js';

          const foo = ref('');

          const click = () => (foo.value = localStorage.getItem('foo'));

          onBeforeMount(() => {
            if (!process.client) {
              return;
            }
            setLocalStorageItem('foo', 'bar');
          });
          </script>
        `,
      },
      async test() {
        await this.page.goto('http://localhost:3000');
        await this.page.click('button');
        await this.page.waitForSelector('.bar')
      },
    },
  },
  [
    testerPluginTmpDir(),
    {
      async afterEach() {
        await this.page.close();
        await this.browser.close();
      },
      async before() {
        this.browser = await chromium.launch();
        this.page = await this.browser.newPage();
      },
    },
    {
      transform: config => {
        config = { files: {}, ...config };

        return async function () {
          await outputFiles(config.files);
          const nuxt = execaCommand('nuxt dev');

          try {
            await nuxtDevReady();
            await config.test.call(this);
          } finally {
            await kill(nuxt.pid);
          }
        };
      },
    },
  ],
);
