Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

import Rediff from '../PageObjects/rediff'
describe('Page Object Model', () => {

    
    it('Rediff Website', () => {

        const rediffpage=new Rediff()
        rediffpage.visit()
        cy.wait(4000)
        rediffpage.fullname('Akansha')
        cy.wait(4000)
        rediffpage.userID('Akansha_qwerty1111')
        cy.wait(4000)
        rediffpage.checkavailability()
        cy.wait(7000)
        cy.get('#check_availability > font > b').should('exist')
        rediffpage.Password('QAZwsx1234#')
        cy.wait(4000)
        rediffpage.Password1('QAZwsx1234#')
        cy.wait(4000)
        rediffpage.AltEmail('akansha@gmail.com')
        cy.wait(4000)
        rediffpage.Phone('9800000011')
        cy.wait(4000)
        rediffpage.day()
        cy.wait(4000)
        rediffpage.month()
        cy.wait(4000)
        rediffpage.year()
        cy.wait(4000)
        rediffpage.radiobutton()
        cy.wait(4000)
        rediffpage.country()
        cy.wait(4000)
        rediffpage.city()
        cy.wait(10000)
        rediffpage.regbutton()
        cy.wait(5000)



    })

 

})