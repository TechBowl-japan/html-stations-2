import { expect, test } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('/station15.html')
})

test('最初はリストで表示されていない', async ({ page }) => {
  const fruits = await page.$('#fruits')
  const children = await fruits?.$('p')
  expect(await children?.isVisible()).toBe(true)
})

test('ボタンをクリックするとリスト表示される', async ({ page }) => {
  await page.click('button')
  const fruits = await page.$('#fruits > ul > li')
  expect(await fruits?.isVisible()).toBe(true)
})
