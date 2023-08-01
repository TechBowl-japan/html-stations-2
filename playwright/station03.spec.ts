import { expect, test } from '@playwright/test'

test('赤色の要素が青色の要素より上になっている', async ({ page }) => {
  await page.goto('/station3.html')
  const red = await page.$('#red')
  const blue = await page.$('#blue')
  const redZIndex = await red?.evaluate(node =>
    Number(window.getComputedStyle(node).zIndex),
  )
  const blueZIndex = await blue?.evaluate(node =>
    Number(window.getComputedStyle(node).zIndex),
  )
  expect(redZIndex).toBeGreaterThan(blueZIndex)
})

test('赤色の要素が透過されている', async ({ page }) => {
  await page.goto('/station3.html')
  const red = await page.$('#red')
  const redOpacity = await red?.evaluate(node =>
    Number(window.getComputedStyle(node).opacity),
  )
  expect(redOpacity).toBeLessThan(1)
})
