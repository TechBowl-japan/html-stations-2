import { expect, test } from '@playwright/test'
import { compareColor } from './utils/compareColor'

test('トグルボタンがONのときテキストの背景色が赤色になる', async ({ page }) => {
  await page.goto('/station13.html')
  await page.check('#check', { force: true })
  const text = await page.$('p#text')
  const textBackgroundColor = await text?.evaluate(
    element => window.getComputedStyle(element).backgroundColor,
  )

  expect(await compareColor(textBackgroundColor, '#ff0000')).toBe(true)
})

test('トグルボタンがOFFのときテキストの背景色が無色になる', async ({
  page,
}) => {
  await page.goto('/station13.html')
  await page.uncheck('#check', { force: true })
  const text = await page.$('p#text')
  const textBackgroundColor = await text?.evaluate(
    element => window.getComputedStyle(element).backgroundColor,
  )
  expect(await compareColor(textBackgroundColor, '#000000')).toBe(true)
})
