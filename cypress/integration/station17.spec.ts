/**
 * # 「コンソールに表示されるエラーを読もう！」 - Console error
 */

describe('station17', () => {
  beforeEach(() => {
    cy.visit('./station17.html')
  })

  it('ボタンを押すとアラートが表示される', () => {
    const stub = cy.stub()
    cy.on('window:alert', stub)

    cy.get('button')
      .click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith('動いたよ！')
      })
  })
})
