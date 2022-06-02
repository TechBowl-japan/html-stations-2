/**
 * # 「SVGについて知ろう！」- SVG
 */

import { compareColor } from '../utils/compareColor'

describe('Station10', () => {
  beforeEach('Station10', () => {
    cy.visit('/station10.html')
  })

  it('svgのfillに#008000が適用されている', () => {
    cy.get('svg').then((svg) => {
      cy.get('rect').then((rect) => {
        expect(
          compareColor(svg.css('fill'), '#008000') ||
            compareColor(rect.css('fill'), '#008000')
        ).to.be.true
      })
    })
  })
})
