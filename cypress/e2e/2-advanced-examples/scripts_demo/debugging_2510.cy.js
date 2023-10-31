/// <reference types="cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
describe("debugging", function () {
    it('StackTrace', () => {
        cy.visit('http://mytestingthoughts.com/Sample/home.html')
        cy.wait(2000)

        cy.xpath('//div[@class="input-group"]/child::span/following-sibling::input[@name="first_name"]').type("Mary")
        cy.wait(2000)

        cy.xpath('//div[@class="input-group"]/child::span/following-sibling::input[@name="last_name"]').type("Kim Beth")
        cy.wait(2000)

        cy.xpath('//div[@class="form-check form-check-inline"]/child::input[@id="inlineRadioFemale"]').check()
        cy.wait(2000)

        cy.xpath('//div/child::select[@id="exampleFormControlSelect2"]').select(['Swimming', 'Jogging', 'Singing'])
        cy.wait(2000)

        cy.xpath('//div/child::select[@name="department"]').select("Tourism Office")
        cy.wait(2000)

        cy.xpath('//span/following-sibling::input[@placeholder="Username"]').type("qaz@12345")

        cy.wait(2000)
        cy.xpath('//span/following-sibling::input[@placeholder="Password"]').type("mytestingthoughts@123")

        cy.wait(2000)
        cy.xpath('//span/following-sibling::input[@placeholder="Confirm Password"]').type("mytestingthoughts@123")
        cy.wait(2000)

        cy.xpath('//div[@class="input-group"]/child::span/following-sibling::input[@name="email"]').type("asdf2@gmail.com")
        cy.wait(2000)
       

        cy.xpath('//div[@class="input-group"]/child::span/following-sibling::input[@placeholder="(639)"]').type("466456666678")
        cy.wait(2000)

        cy.xpath('//div[@class="col-md-4 inputGroupContainer"]/child::textarea[@id="exampleFormControlTextarea1"]').type("Please enroll my name in the Register")

        cy.wait(2000)


        cy.xpath('//button[@class="btn btn-warning"]').click({ force: true })

        cy.wait(2000);


        cy.xpath('//div[@class="alert alert-success"]').should('exist').and('contain', 'Success')
        cy.wait(2000)

    })

    it('Debugger', () => {
        cy.visit('https://www.browserstack.com/');

        cy.get('.bstack-mm-logo').should('be.visible');
        cy.get('.sign-in-link > .bstack-mm-link').then(($selectedElement) => {

            debugger;

            $selectedElement.get(0).click()

        })



    })

    it('Cy_log', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        cy.get('[name="username"]').type("Admin")
        cy.get('[name="password"]').type("admin123")
        cy.get('[type="submit"]').click({ force: true })
        cy.log("The user has logged into the portal successfully")

    })

    it('Console_log', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        cy.get('[name="username"]').type("Admin")
        cy.get('[name="password"]').type("admin123")
        cy.get('[type="submit"]').click({ force: true })
        cy.task("log", "The user has logged into the portal successfully")


    })

    it('debug()', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        cy.get('[name="username"]').type("Admin")
        cy.get('[name="password"]').type("admin123")
        cy.get('[type="submit"]').debug().click({ force: true })
        cy.log("The user has logged into the portal successfully")


    })

    it.only('pause()', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.pause();
        cy.get('[name="username"]').type("Admin")
        cy.get('[name="password"]').type("admin123")
        cy.get('[type="submit"]').click({ force: true })
        cy.log("The user has logged into the portal successfully")


    })
})


