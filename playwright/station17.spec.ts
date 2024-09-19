import { expect, test } from '@playwright/test'

test('ボタンを押すとアラートが表示される', async ({ page }) => {
  let dialogCount = 0;

  await page.goto('./station17.html')

  page.on('dialog', async dialog => {
    dialogCount++
    expect(dialog.message()).toBe('動いたよ！')
    await dialog.dismiss()
  })

  await page.click('button')
  expect(dialogCount).toBeTruthy()
})
