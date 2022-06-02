/**
 * # 「ECMAScriptについて知ろう！」 - ECMAScript
 */

describe('station14', () => {
  beforeEach(() => {
    cy.visit('./station14.html')
  })

  it('ボタンを押すとアラートが表示される', () => {
    const stub = cy.stub()
    cy.on('window:alert', stub)

    cy.get('button')
      .click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith('ECMAScript')
      })
  })
})
