import { playwright } from '@vitest/browser-playwright';
import type { ViteUserConfig } from "vitest/config";

export default {
  test: {
    projects: [
      {
        test: {
          include: [
            'tests/unit/**/*.{test,spec}.ts',
          ],
          name: 'unit',
          environment: 'node',
        },
      },
      {
        test: {
          include: [
            'tests/browser/**/*.{test,spec}.ts',
          ],
          name: 'browser',
          browser: {
            enabled: true,
            headless: true,
            provider: playwright(),
            instances: [
              { browser: 'chromium' },
              { browser: 'firefox' },
              { browser: 'webkit' },
            ],
          },
        },
      },
    ],
  },
} satisfies ViteUserConfig;