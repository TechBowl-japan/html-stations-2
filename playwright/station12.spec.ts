import { expect, test } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('/station12.html')
})

test('<p>にレスポンス内容をコピペできている', async ({ page }) => {
  const p = await page.locator('p')
  const responseJson = JSON.parse(await p.innerText())
  await expect(responseJson.message).toBeDefined()
  await expect(responseJson.status).toBeDefined()
})
