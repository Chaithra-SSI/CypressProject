Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
describe('SauceDemo', () => {
    it('Calculate total amount', () => {
        cy.visit('https://www.saucedemo.com')
        cy.wait(5000)
        cy.title().should('eq', 'Swag Labs')
       
        cy.get('#user-name').type("standard_user")  //User name entered
        cy.wait(2000)
        cy.get('#password').type("secret_sauce")  //Password entered
        cy.wait(2000)
        cy.get('#login-button').click({force:true}) //Login button clicked
        cy.wait(2000)

        //Adding products to cart
        cy.get('#add-to-cart-sauce-labs-backpack').click({force:true})
        cy.wait(2000)
        cy.get('#add-to-cart-sauce-labs-bike-light').click({force:true})
        cy.wait(2000)
        cy.get('#add-to-cart-sauce-labs-bolt-t-shirt').click({force:true})
        cy.wait(2000)
        cy.get('#add-to-cart-sauce-labs-fleece-jacket').click({force:true})
        cy.wait(2000)

        cy.get('[class="shopping_cart_link"]').click({force:true})  //Click on the Shopping Cart icon
        cy.wait(2000)
        cy.get('#checkout').click({force:true})  //Checkout button clicked
        cy.wait(2000)

        //Customer details added
        cy.get('#first-name').type("ABCD")
        cy.wait(2000)
        cy.get('#last-name').type("QWERTY")
        cy.wait(2000)
        cy.get('#postal-code').type("23456")
        cy.wait(2000)
        cy.get('#continue').click({force:true})   //Continue button clicked
        cy.wait(2000)  
        cy.get('[data-test="finish"]').click({force:true})
        cy.get('[data-test="back-to-products"]').click({force:true})
    })
    })



