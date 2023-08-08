import { expect, test } from '@playwright/test'

/**
 * # 「floatを使ってレイアウトを作ろう！」 - float
 */

test.beforeEach(async ({ page }) => {
  await page.goto('/station2.html')
})

test('#redと#blueが横並びになっている', async ({ page }) => {
  const redFloat = await page.$eval('#red', el => getComputedStyle(el).float)
  const blueFloat = await page.$eval('#blue', el => getComputedStyle(el).float)

  expect(redFloat).toBe('left')
  expect(blueFloat).toBe('left')
})

test('横並びになっている#redと#blueの下に#greenが表示されている', async ({
  page,
}) => {
  const greenClear = await page.$eval(
    '#green',
    el => getComputedStyle(el).clear,
  )

  expect(greenClear).toBe('both')
})
