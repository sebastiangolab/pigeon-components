import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { defineWorkspace } from 'vitest/config';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';

const dirname =
  typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

export default defineWorkspace([
  {
    plugins: [
      storybookTest({
        configDir: path.join(dirname, '.storybook'),
      }),
    ],
    test: {
      name: 'storybook',
      globals: true,
      environment: 'jsdom',
      setupFiles: ['.storybook/vitest.setup.ts'],
      browser: {
        enabled: true,
        headless: true,
        provider: 'playwright',
        instances: [{ browser: 'chromium' }],
      },
    },
  },
]);