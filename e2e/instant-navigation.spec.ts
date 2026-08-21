import { instant } from '@next/playwright';
import { expect, test } from '@playwright/test';

const BASE_URL = 'http://127.0.0.1:3001';

test.describe('instant navigations', () => {
  test('home shell is served on first load', async ({ page }) => {
    await instant(
      page,
      async () => {
        await page.goto('/');
        await expect(page.getByTestId('home-shell')).toBeVisible();
        await expect(page.getByText('INTRO', { exact: true })).toBeVisible();
      },
      { baseURL: BASE_URL }
    );
  });

  test('home to about commits the about shell', async ({ page }) => {
    await page.goto('/');
    const trigger = page.getByRole('link', { name: 'About', exact: true });
    await expect(trigger).toBeVisible();

    await instant(page, async () => {
      await trigger.click();
      await expect(page.getByTestId('inner-page')).toBeVisible();
      await expect(
        page.getByRole('heading', { name: 'About', exact: true })
      ).toBeVisible();
    });
  });

  test('home to montu commits the project shell', async ({ page }) => {
    await page.goto('/');
    const trigger = page.locator('a[href="/projects/montu-mia"]');
    await expect(trigger).toBeVisible();

    await instant(page, async () => {
      await trigger.click();
      await expect(
        page.getByRole('heading', { name: 'What it is', exact: true })
      ).toBeVisible();
    });
  });

  test('work list to ramble commits the work shell', async ({ page }) => {
    await page.goto('/work');
    const trigger = page.locator('a[href="/work/ramble"]');
    await expect(trigger).toBeVisible();

    await instant(page, async () => {
      await trigger.click();
      await expect(
        page.getByRole('heading', { name: 'What I did', exact: true })
      ).toBeVisible();
    });
  });

  test('posts list to a post commits the post shell', async ({ page }) => {
    await page.goto('/posts');
    const trigger = page.getByRole('link', {
      name: 'Why Should You Not Use px?',
      exact: true,
    });
    await expect(trigger).toBeVisible();

    await instant(page, async () => {
      await trigger.click();
      await expect(
        page.getByRole('heading', { name: 'The Problem with Pixels' })
      ).toBeVisible();
    });
  });

  test('projects index to claudebar commits the project shell', async ({
    page,
  }) => {
    await page.goto('/projects');
    const trigger = page.getByRole('link', { name: 'ClaudeBar', exact: true });
    await expect(trigger).toBeVisible();

    await instant(page, async () => {
      await trigger.click();
      await expect(
        page.getByRole('heading', { name: 'What it is', exact: true })
      ).toBeVisible();
    });
  });
});
