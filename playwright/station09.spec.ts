import { expect, test } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('/station9.html')
})

test('開いたときにアニメーションが走る', async ({ page }) => {
  const animation = await page.locator('#animation')
  const duration = Number(
    await animation.evaluate(node => {
      return window.getComputedStyle(node).animationDuration.slice(0, -1)
    }),
  )
  await expect(duration).toBeGreaterThan(0)
  await expect(animation).not.toHaveCSS('animation-name', 'none')
})

test('アニメーションが終わった後も要素が表示されている', async ({ page }) => {
  const animation = await page.locator('#animation')
  await expect(animation).not.toHaveCSS('animation-fill-mode', 'none')
  await expect(animation).not.toHaveCSS('animation-fill-mode', 'backwards')
})
