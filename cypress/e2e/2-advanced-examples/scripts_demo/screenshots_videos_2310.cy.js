Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from   
    // failing the test   
    return false
})

describe('Screenshots_Videos', () => {
    it('Screenshots/Videos', () => {

     
            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
            cy.wait(5000)
            cy.screenshot("HomePage")
            cy.get('div.orangehrm-login-layout div.orangehrm-login-layout-blob div.orangehrm-login-container div.orangehrm-login-slot-wrapper div.orangehrm-login-branding > img:nth-child(1)').screenshot("Logo")
    })

    it('Screenshots/Videos_automatically', () => {

     
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.wait(5000)
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.oxd-button').click({force:true})
       cy.get(':nth-child(1) > .oxd-main-menu-item').should('have.text','Admin')
})

})