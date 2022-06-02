/**
 * # 「ホバー時のスタイルを適用させよう！」 - Hover style
 */

import { compareColor } from '../utils/compareColor'

describe('Station7', () => {
  beforeEach(() => {
    cy.visit('/station7.html')
  })

  it('<a>のhover時の文字の色が`#008000`になっている', () => {
    cy.get('a')
      .realHover()
      .then((a) => {
        expect(compareColor(a.css('color'), '#008000')).to.be.true
      })
  })
})
