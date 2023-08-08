import { expect, test } from '@playwright/test'
import { compareColor } from './utils/compareColor'

test.beforeEach(async ({ page }) => {
  await page.goto('/station7.html')
})

test('<a>のhover時の文字の色が`#008000`になっている', async ({ page }) => {
  const a = await page.locator('a')
  await a.hover()
  const color = await a.evaluate(a => getComputedStyle(a).color)
  await expect(compareColor(color, '#008000')).toBe(true)
})

test('<a>のリンク先にTechTrainのマイページが設定されている', async ({
  page,
}) => {
  await expect(page.locator('a')).toHaveAttribute(
    'href',
    'https://techtrain.dev/mypage',
  )
})
