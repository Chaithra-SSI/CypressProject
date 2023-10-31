/// <reference types="cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
describe("iFrames", function () {
    it.skip('Handle iFrames(1)', () => {
        cy.visit("https://the-internet.herokuapp.com/iframe")
        const iframe = cy.get('#mce_0_ifr')
            .its('0.contentDocument.body')
            .should('be.visible')
            .then(cy.wrap)

        iframe.clear().type("This is iFrame section..{ctrl+A}")
        cy.get('[title="Bold"]').click({ force: true })
        cy.wait(2000)

    })
    it.skip('Handle iFrames(2)', () => {
        cy.visit("https://the-internet.herokuapp.com/iframe")
        cy.getIframe('#mce_0_ifr').clear().type("This is iFrame section..{ctrl+A}")
        cy.get('[title="Bold"]').click({ force: true })
        cy.wait(2000)

    })

    it.only('Handle iFrames(3)', () => {
        cy.visit("https://the-internet.herokuapp.com/iframe")
       cy.frameLoaded('#mce_0_ifr')  //Load the frame
       cy.iframe('#mce_0_ifr').clear().type("This is iFrame section..{ctrl+A}")
       cy.wait(3000)
       cy.get('[title="Italic"]').click({ force: true })
       cy.wait(2000)


    })

})