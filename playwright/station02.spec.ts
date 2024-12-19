import { expect, test } from '@playwright/test'

/**
 * # 「floatを使ってレイアウトを作ろう！」 - float
 */

test.beforeEach(async ({ page }) => {
  await page.goto('/station2.html')
})

test('#redと#blueが横並びになっている', async ({ page }) => {
  const red = page.locator('#red');
  const blue = page.locator('#blue');
  
  await expect(red).toHaveCSS('float', 'left');
  await expect(blue).toHaveCSS('float', 'left');
})

test('横並びになっている#redと#blueの下に#greenが表示されている', async ({
  page,
}) => {
  const green = page.locator('#green');
  await expect(green).toHaveCSS('clear', 'both');
})
