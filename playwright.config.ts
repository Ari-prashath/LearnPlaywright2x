import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './Codegen exe',
  timeout: 30000,
  use: {
    browserName: 'chromium',
    headless: false,
  },
});
