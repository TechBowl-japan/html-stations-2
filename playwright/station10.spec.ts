import { Locator, expect, test } from '@playwright/test'
import { compareColor } from './utils/compareColor'

test.beforeEach(async ({ page }) => {
  await page.goto('/station10.html')
})

const getFill = (elem: Locator) =>
  elem.evaluate((svg: SVGElement) => {
    const style = window.getComputedStyle(svg)
    return style.fill
  })

test('svgのfillに#008000が適用されている', async ({ page }) => {
  const svg = await page.locator('svg')
  const rect = await page.locator('rect')
  const svgFill = await getFill(svg)
  const rectFill = await getFill(rect)
  await expect(
    compareColor(svgFill, '#008000') || compareColor(rectFill, '#008000'),
  ).toBe(true)
})
