import { expect, test } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('/station4.html')
})

test('p要素にcenterクラスが適用されている', async ({ page }) => {
  const p = await page.$('p')
  const hasCenterClass = await p?.evaluate(node =>
    node.classList.contains('center'),
  )
  expect(hasCenterClass).toBe(true)
})

test('a要素にcenterクラスが適用されている', async ({ page }) => {
  const a = await page.$('a')
  const hasCenterClass = await a?.evaluate(node =>
    node.classList.contains('center'),
  )
  expect(hasCenterClass).toBe(true)
})

test('div要素にcenterクラスが適用されている', async ({ page }) => {
  const div = await page.$('div')
  const hasCenterClass = await div?.evaluate(node =>
    node.classList.contains('center'),
  )
  expect(hasCenterClass).toBe(true)
})

test('span要素にcenterクラスが適用されている', async ({ page }) => {
  const span = await page.$('span')
  const hasCenterClass = await span?.evaluate(node =>
    node.classList.contains('center'),
  )
  expect(hasCenterClass).toBe(true)
})
