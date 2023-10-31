Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
describe('SmartSightInnovations', () => {
    it('Website Test_Services Tab', () => {
        cy.visit('https://www.smartsight.in/')
        cy.wait(5000)
        cy.url().should('contain','smartsight')
        cy.log("URL Opened")
        
        cy.get('a[href="https://www.smartsight.in/enquiry/"]').eq(0).click({force:true})  //Enquiry link clicked
        cy.wait(2000)
        cy.get('[value="Enquire Now"]').click({force:true})  //Negative test step
        cy.wait(2000)
        cy.get('[class="wpcf7-not-valid-tip"]').eq(0).should('exist')
        cy.get('[class="wpcf7-not-valid-tip"]').eq(1).should('exist')
        cy.get('[class="wpcf7-not-valid-tip"]').eq(2).should('exist')
        cy.get('[class="wpcf7-not-valid-tip"]').eq(3).should('exist')
        cy.get('[class="wpcf7-not-valid-tip"]').eq(4).should('contain','The field is required.') 
        cy.get('[class="wpcf7-response-output"]').should('exist')  //Validating the error message
        cy.wait(2000)
        cy.get('#mega-menu-item-1036').eq(0).trigger('{mouseover}')  //Services tab opened
        cy.wait(5000)
        cy.get('a[href="https://www.smartsight.in/python/"]').eq(0).click({force:true})  //Python option selected
        cy.url().should('contain','python')

        

        
        


    })

    it.only('Website Test_About SSI Tab', () => {

        cy.visit('https://www.smartsight.in/')
        cy.wait(5000)
        cy.get('[class="mega-menu-link"]').eq(37).trigger('{mouseover}')  //About SSI tab hovered
        cy.contains("Life At SSI").click({force:true})   //Life at SSI option chosen
        cy.get('.mainBtn2').scrollIntoView({duration:1000}).click({force:true})  //Join Us button clicked
        cy.wait(2000)
        cy.get('[class="mainBtn2"]').eq(0).click({force:true}) //Personal Assistant / secretary to CEO opening
        cy.wait(2000)
        cy.go('back')
        cy.wait(2000)
        cy.get('[class="mainBtn2"]').eq(1).click({force:true}) //Jr. Jira Administrator opening
        cy.wait(2000)
        cy.go('back')
        cy.wait(2000)
        cy.get('[class="mainBtn2"]').eq(2).click({force:true}) //React Developer opening
        cy.wait(2000)
        cy.go('back')
        cy.wait(2000)
        cy.get('[class="mainBtn2"]').eq(3).click({force:true}) //Angular Developer opening
        cy.wait(2000)
        cy.go('back')
        cy.wait(2000)
        cy.get('[class="mainBtn2"]').eq(4).click({force:true}) //Android Developer opening
        cy.wait(2000)
        cy.go('back')
        cy.wait(2000)
        cy.get('[class="mainBtn2"]').eq(5).click({force:true}) //Magento Developer opening
        cy.wait(2000)
        cy.go('back')
        cy.wait(2000)
        cy.get('a[href="https://www.linkedin.com/company/13360135/"]').invoke('removeAttr','target').click({force:true})
        cy.wait(2000)
       

       
       

        
        


    })
})
