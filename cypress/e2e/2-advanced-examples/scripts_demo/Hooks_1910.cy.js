Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

describe('Handle Hooks', () => {

    //Before/BeforeEach/It/AfterEach/BeforeEach/It/AfterEach/After

    before(() => {
        // runs once before all tests in the block
        //Website login
        cy.visit("https://the-internet.herokuapp.com/login")
        cy.wait(5000)
        cy.get("#username").type("tomsmith")
        cy.get("#password").type("SuperSecretPassword!")
        cy.get("#login > button").click({ force: true })
    })

    beforeEach(() => {
        // runs before each test in the block
        cy.log("This is BeforeEach block")
      
    })

    afterEach(() => {
        // runs after each test in the block

        cy.log("This is AfterEach block")


    })

    after(() => {
        // runs once after all tests in the block
        cy.visit("https://the-internet.herokuapp.com/login")
        cy.xpath("//input[@id='username']").type("tomsmith1 ")
        cy.xpath("//input[@id='password']").type("SuperSecretPassword!1")
        cy.xpath("//body/div[2]/div[1]/div[1]/form[1]/button[1]").click({ force: true })
        cy.get('#flash').should('contain', 'Your username is invalid!')

    })
    it('Block 1', () => {

       cy.log("This is First it block")

    })

    it('Block 2', () => {

        cy.log("This is Second it block")
        



    })

})