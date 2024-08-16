import tester from '@dword-design/tester';
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
            <div class="foo">{{ foo }}</div>
          </template>

          <script setup>
          import { computed } from '#imports';

          import setLocalStorageItem from '../../src/set-local-storage-item.js';

          const foo = computed(() => process.client ? localStorage.getItem('foo') : undefined);

          onBeforeMount(() => setLocalStorageItem('foo', 'bar'));
          </script>
        `,
      },
      async test() {
        await this.page.goto('http://localhost:3000');
        const foo = await this.page.waitForSelector('.foo')
        expect(await foo.evaluate(_ => _.innerText)).toEqual('bar')
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
