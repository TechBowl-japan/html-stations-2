import { expect, test } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('/station8.html')
})

test('レイアウトがGridlayoutになっている', async ({ page }) => {
  await expect(page.locator('#container')).toHaveCSS('display', 'grid')
})

test('ヘッダーが指定の位置にある', async ({ page }) => {
  const header = await page.locator('header')
  await expect(header).toHaveCSS('grid-row', '1 / 2')
  await expect(header).toHaveCSS('grid-column', '1 / 3')
})

test('フッターが指定の位置にある', async ({ page }) => {
  const footer = await page.locator('footer')
  await expect(footer).toHaveCSS('grid-row', '5 / 6')
  await expect(footer).toHaveCSS('grid-column', '1 / 3')
})

test('アイテム1が指定の位置にある', async ({ page }) => {
  const item1 = await page.getByText('アイテム1')
  await expect(item1).toHaveCSS('grid-row', '2 / 5')
  await expect(item1).toHaveCSS('grid-column', '1 / 2')
})

test('アイテム2が指定の位置にある', async ({ page }) => {
  const item2 = await page.getByText('アイテム2')
  await expect(item2).toHaveCSS('grid-row', '2 / 3')
  await expect(item2).toHaveCSS('grid-column', '2 / 3')
})

test('アイテム3が指定の位置にある', async ({ page }) => {
  const item3 = await page.getByText('アイテム3')
  await expect(item3).toHaveCSS('grid-row', '3 / 4')
  await expect(item3).toHaveCSS('grid-column', '2 / 3')
})

test('アイテム4が指定の位置にある', async ({ page }) => {
  const item4 = await page.getByText('アイテム4')
  await expect(item4).toHaveCSS('grid-row', '4 / 5')
  await expect(item4).toHaveCSS('grid-column', '2 / 3')
})
