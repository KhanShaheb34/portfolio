import { defineConfig, devices } from '@playwright/test';

const PORT = 3001;
const baseURL = `http://127.0.0.1:${PORT}`;
const BUILD_TIMEOUT_MS = 180_000;

export default defineConfig({
  testDir: './e2e',
  fullyParallel: false,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 2 : 0,
  workers: 1,
  reporter: process.env.CI ? 'github' : 'list',
  use: {
    baseURL,
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  webServer: {
    command: `bun run build && bunx next start -p ${PORT}`,
    url: baseURL,
    reuseExistingServer: false,
    timeout: BUILD_TIMEOUT_MS,
    env: {
      ...process.env,
      EXPOSE_TESTING_API: '1',
    },
  },
});
