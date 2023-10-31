Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from   
    // failing the test   
    return false
})

describe('mytoolsQA', () => {
    it('Form Script', () => {
        cy.visit('https://demoqa.com/automation-practice-form')
        cy.wait(5000)
        cy.title().should('eq', 'DEMOQA')
        cy.log("URL Opened")
        cy.viewport('iphone-8') //viewport changed to iphone-8       
        cy.get('#firstName').type("Juliet") //First Name entered     
        cy.wait(2000)
        cy.get('[placeholder="Last Name"]').type("D Souza") //Last Name entered    
        cy.wait(2000)
        cy.get('[class="mr-sm-2 form-control"]').type("jdsouza@yahoo.com") //Email entered      
        cy.wait(2000)
        cy.get('[class="custom-control-input"]').eq(1).check({ force: true }) //Radio button : Female selected     
        cy.wait(2000)
        cy.get('#userNumber').type("9000000001") //Mobile number entered  
        cy.wait(2000)
        cy.get('#dateOfBirthInput').click({ force: true }) //DOB entered   
        cy.wait(2000)
        cy.get('[class="react-datepicker__month-select"]').select('June').should('have.value', '5') //Month entered        
        cy.wait(2000)
        cy.get('[class="react-datepicker__year-select"]').select('1992').should('have.value', '1992') //Year entered      
        cy.wait(2000)
        cy.get('.react-datepicker__day--020').click({ force: true }) //Day entered      
        cy.wait(2000)
        cy.get('#subjectsInput').click({ force: true }).type("mat").type('{enter}').type("physics").type('{enter}').type("co").type("{downArrow}{downArrow}{downArrow}{enter}") //Subjects entered      
        cy.wait(2000)
        cy.get("#hobbies-checkbox-3").check({ force: true }) //Hobby selected      
       // cy.get('[type="file"]').selectFile('cypress/fixtures/example.json') //File selected 
        cy.wait(2000)
        cy.get('[type="file"]').selectFile('cypress/fixtures/resume-sample.pdf') //File selected     
        cy.wait(2000)
        cy.get('#currentAddress').type("No.123,Car Street,XYZ") //Address entered      
        cy.wait(2000)
        cy.get('[class=" css-1hwfws3"]').eq(0).click({ force: true }).type("{downArrow}{downArrow}{downArrow}{enter}") //State selected    
        cy.wait(2000)
        cy.get('[class=" css-1hwfws3"]').eq(1).click({ force: true })
        cy.wait(5000)
        cy.contains("Panipat").click({ force: true }) //City selected  
        cy.wait(2000)
        cy.get('#submit').click({ force: true }) //Submit button clicked 
        cy.wait(2000)   
        cy.screenshot() //Screenshot taken of the Form  
        cy.wait(5000)
        cy.get('#closeLargeModal').click({ force: true }) //Form closed using the Close button        

    })
})
