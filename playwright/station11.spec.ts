import { expect, test } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('/station11.html')
})

test('メールアドレスの入力欄のtypeがemail,必須になっている', async ({
  page,
}) => {
  const emailInput = await page.locator('input#email')
  await expect(emailInput).toHaveAttribute('type', 'email')
  await expect(emailInput).toHaveAttribute('required', '')
})

test('パスワードの入力欄のtypeがpassword, 必須, 6文字以上になっている', async ({
  page,
}) => {
  const passwordInput = await page.locator('input#password')
  await expect(passwordInput).toHaveAttribute('type', 'password')
  await expect(passwordInput).toHaveAttribute('minlength', '6')
  await expect(passwordInput).toHaveAttribute('required', '')
})

test('ニックネームの入力欄が20文字以下になっている', async ({ page }) => {
  const nicknameInput = await page.locator('input#nickname')
  await expect(nicknameInput).toHaveAttribute('type', 'text')
  await expect(nicknameInput).toHaveAttribute('maxlength', '20')
})
