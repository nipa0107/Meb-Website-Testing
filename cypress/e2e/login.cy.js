const url = 'https://www.mebmarket.com/'
describe('template spec', ()=> {
  //ปกติ
  it('TC1',()=> {
    cy.visit(url)
    cy.wait(2000)
    cy.get('[style="position: fixed;top: 0px;height: 60px;background: #000;width: 100%;opacity: 0.7;z-index: 10003;"] > div > img').click()
    cy.wait(2000)
    cy.get('.header_login_and_register').click()
    cy.wait(2000)
    cy.get('#username').type('username')
    cy.wait(2000)
    cy.get('#password').type('password')
    cy.wait(2000)
    cy.get('#btn-login').click()
    cy.wait(10000)
  })
})