/// <reference types="cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
describe("CyStudio", function () {
    it('Website launch', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.wait(2000)

        /* ==== Generated with Cypress Studio ==== */
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear('A');
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').clear('a');
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
        cy.get('.oxd-button').click();
        cy.get(':nth-child(4) > .oxd-main-menu-item > .oxd-text').click();
        cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item').click();
        cy.get(':nth-child(1) > .oxd-topbar-body-nav-tab-link').click();
        cy.get('.oxd-userdropdown-tab > .oxd-icon').click();
        cy.get(':nth-child(4) > .oxd-userdropdown-link').click();
        /* ==== End Cypress Studio ==== */
    })

})

