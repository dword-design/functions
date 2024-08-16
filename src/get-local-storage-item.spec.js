import tester from '@dword-design/tester';
import testerPluginTmpDir from '@dword-design/tester-plugin-tmp-dir';
import { execaCommand } from 'execa';
import nuxtDevReady from 'nuxt-dev-ready';
import outputFiles from 'output-files';
import { chromium } from 'playwright';
import kill from 'tree-kill-promise';

import endent from './endent.js';

export default tester(
  {
    existing: {
      files: {
        'pages/index.vue': endent`
          <template>
            <div class="foo">{{ foo }}</div>
          </template>

          <script setup>
          import { computed, onBeforeMount } from '#imports';

          import getLocalStorageItem from '../../src/get-local-storage-item.js';

          const foo = computed(() => process.client ? getLocalStorageItem('foo') : undefined);

          onBeforeMount(() => localStorage.setItem('foo', 'bar'));
          </script>
        `,
      },
      async test() {
        await this.page.goto('http://localhost:3000');
        const foo = await this.page.waitForSelector('.foo');
        expect(await foo.evaluate(_ => _.innerText)).toEqual('bar');
      },
    },
    'non-existing': {
      files: {
        'pages/index.vue': endent`
          <template>
            <div class="foo">{{ foo || 'empty' }}</div>
          </template>

          <script setup>
          import { computed } from '#imports';

          import getLocalStorageItem from '../../src/get-local-storage-item.js';

          const foo = computed(() => process.client ? getLocalStorageItem('foo') : undefined);
          </script>

        `,
      },
      async test() {
        await this.page.goto('http://localhost:3000');
        const foo = await this.page.waitForSelector('.foo');
        expect(await foo.evaluate(_ => _.innerText)).toEqual('empty');
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
      async beforeEach() {
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
