import { expect, test } from '@playwright/test'
test('赤色の要素が青色の要素より上になっている', async ({ page }) => {

  const response = await page.goto('/station3.html')
  expect(response?.ok()).toBeTruthy() 

  await page.waitForSelector('#red', { timeout: 10000 })
  await page.waitForSelector('#blue', { timeout: 10000 })
  const red = await page.$('#red')
  const blue = await page.$('#blue')
  expect(red).not.toBeNull()
  expect(blue).not.toBeNull()

  const redZIndex = await red!.evaluate(node => {
    const z = window.getComputedStyle(node).zIndex
    return isNaN(Number(z)) ? 0 : Number(z)
  })
  const blueZIndex = await blue!.evaluate(node => {
    const z = window.getComputedStyle(node).zIndex
    return isNaN(Number(z)) ? 0 : Number(z)
  })

  expect(redZIndex).toBeGreaterThan(blueZIndex)
})

test('赤色の要素が透過されている', async ({ page }) => {
  const response = await page.goto('/station3.html')
  expect(response?.ok()).toBeTruthy()
  await page.waitForSelector('#red', { timeout: 10000 })
  const red = await page.$('#red')
  expect(red).not.toBeNull()
  const redOpacity = await red!.evaluate(node =>
    Number(window.getComputedStyle(node).opacity),
  )
  expect(redOpacity).toBeLessThan(1)
})