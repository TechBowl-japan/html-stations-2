import { expect, test } from '@playwright/test'

test('ボタンを押すとアラートが表示される', async ({ page }) => {
  await page.goto('./station17.html')

  await page.exposeFunction('alert', () => {})
  page.on('dialog', async dialog => {
    await dialog.accept()
    expect(dialog.message()).toBe('動いたよ！')
  })

  await page.click('button')
})
