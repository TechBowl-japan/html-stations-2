import { expect, test } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('/station6.html')
})

test('<article>, <section>が正しく使われている', async ({ page }) => {
  await expect(page.locator('body > article')).toBeVisible()
  await expect(page.locator('article > section').first()).toBeVisible()
})

test('<section>にwidth: 600px, margin-bottom: 50pxが適用されている', async ({
  page,
}) => {
  await expect(page.locator('section').first()).toHaveCSS('width', '600px')
  await expect(page.locator('section').first()).toHaveCSS('margin-bottom', '50px')
})
