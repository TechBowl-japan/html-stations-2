import { expect, test } from '@playwright/test'
import { compareColor } from './utils/compareColor'

test.beforeEach(async ({ page }) => {
  await page.goto('/station10.html')
})

test('svgのfillに#008000が適用されている', async ({ page }) => {
  const svg = await page.locator('svg')
  const rect = await page.locator('rect')
  const svgFill = await svg.getAttribute('fill')
  const rectFill = await rect.getAttribute('fill')
  await expect(
    compareColor(svgFill, '#008000') || compareColor(rectFill, '#008000'),
  ).toBe(true)
})
