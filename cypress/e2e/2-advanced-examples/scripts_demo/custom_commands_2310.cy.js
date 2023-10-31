/// <reference types="cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
describe("CustomCommands", function () {
    it('Login', () => {
      cy.login('qwe','qwe')
      cy.title().should('eq','Login: Mercury Tours')
      cy.url().should('eq','https://demo.guru99.com/test/newtours/login_sucess.php')
    })

    it('Register', () => {
        cy.login('qwe','qwe')
        cy.contains('REGISTER').click({force:true})
        cy.get('[name="firstName"]').type("Andrew")
        cy.get('[name="lastName"]').type("D Souza")
        cy.get('[name="phone"]').type("1234567890")
        cy.get('[name="userName"]').type("qaz@gmail.com")
        cy.get('[name="submit"]').click({force:true})
        cy.url().should('contain','register_sucess')

      })

})
