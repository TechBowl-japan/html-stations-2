/**
 * # 「リストを作ろう！」 - HTML List
 */

describe('Station1', () => {
  beforeEach(() => {
    cy.visit('/station1.html')
  })

  it('<ul>が存在する', () => {
    cy.get('ul').should('be.visible')
  })

  it('<li>で囲われた「りんご」、「ばなな」、「ぶどう」がそれぞれ表示されている', () => {
    cy.get('ul > li').contains('りんご').should('be.visible')
    cy.get('ul > li').contains('ばなな').should('be.visible')
    cy.get('ul > li').contains('ぶどう').should('be.visible')
  })
})
