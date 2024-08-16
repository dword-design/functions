import tester from '@dword-design/tester';
import testerPluginPuppeteer from '@dword-design/tester-plugin-puppeteer';
import testerPluginTmpDir from '@dword-design/tester-plugin-tmp-dir';
import { execaCommand } from 'execa';
import nuxtDevReady from 'nuxt-dev-ready';
import outputFiles from 'output-files';
import kill from 'tree-kill-promise';

import endent from './endent.js';

export default tester(
  {
    existing: {
      files: {
        'pages/index.vue': endent`
          <template>
            <div>{{ foo || 'undefined' }}</div>
          </template>

          <script setup>
          import { computed, onBeforeMount } from '#imports';

          import getLocalStorageItem from '../../src/get-local-storage-item.js';

          const foo = computed(() => process.browser ? getLocalStorageItem('foo') : undefined);

          onBeforeMount(() => localStorage.setItem('foo', 'bar'));
          </script>
        `,
      },
      async test() {
        await this.page.goto('http://localhost:3000');
        expect(await this.page.content()).toMatch('<div>bar</div>');
      },
    },
    'non-existing': {
      files: {
        'pages/index.vue': endent`
          <template>
            <div>{{ foo || 'undefined' }}</div>
          </template>

          <script setup>
          import { computed } from '#imports';

          import getLocalStorageItem from '../../src/get-local-storage-item.js';

          const foo = computed(() => process.browser ? getLocalStorageItem('foo') : undefined);
          </script>

        `,
      },
      async test() {
        await this.page.goto('http://localhost:3000');
        expect(await this.page.content()).toMatch('<div>undefined</div>');
      },
    },
  },
  [
    testerPluginTmpDir(),
    testerPluginPuppeteer(),
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
