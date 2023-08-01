/**
 * # 「リストを作ろう！」 - HTML List
 */

import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('/station1.html')
})

test('<ul>が存在する', async ({ page }) => {
  await expect(page).toHaveSelector('ul')
})

test('<li>で囲われた「りんご」、「ばなな」、「ぶどう」がそれぞれ表示されている', async ({
  page,
}) => {
  // ul > li
  const lis = await page.$$('ul > li')
  const names = ['りんご', 'ばなな', 'ぶどう']
  const liTexts = await Promise.all(lis.map(li => li.textContent()))

  names.forEach(name => {
    expect(liTexts).toContain(name)
  })
})
