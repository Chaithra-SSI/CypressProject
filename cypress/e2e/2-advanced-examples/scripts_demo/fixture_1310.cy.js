Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from   
    // failing the test   
    return false
})

describe('mytoolsQA', () => {
    it('Fixture File Script', () => {

        cy.visit('https://demoqa.com/automation-practice-form')
        cy.wait(5000)
        cy.fixture('demoqa').then((data) =>{
        
        cy.xpath('//*[@id="firstName"]').type(data.first_name)
        cy.wait(1000)
        cy.xpath('//*[@id="lastName"]').type(data.last_name)
        cy.wait(1000)
        cy.xpath('//*[@id="userEmail"]').type(data.email)
        cy.wait(1000)
        cy.xpath('//*[@id="genterWrapper"]/div[2]/div[1]/label').click({force:true})
        cy.wait(1000)
        cy.xpath('//*[@id="userNumber"]').type(data.phno)
        cy.wait(1000)

        cy.xpath('//*[@id="dateOfBirthInput"]').click({force:true})
        cy.wait(1000)

        //Month selection
        cy.xpath('//*[@id="dateOfBirth"]/div[2]/div[2]/div/div/div[2]/div[1]/div[2]/div[1]/select').select('June')
        cy.wait(1000)

        //Year and Date selection
        cy.xpath('//*[@id="dateOfBirth"]/div[2]/div[2]/div/div/div[2]/div[1]/div[2]/div[2]/select').select('1978')
        cy.xpath('//*[@id="dateOfBirth"]/div[2]/div[2]/div/div/div[2]/div[2]/div[4]/div[3]').click({force:true})

        cy.xpath('//*[@id="subjectsContainer"]/div/div[1]').type('B{enter}').type('A{downArrow}{downArrow}{enter}')
        cy.xpath('//*[@id="hobbiesWrapper"]/div[2]/div[3]/label').click({force:true})
        const fileName = 'cypress.png'
        cy.xpath('//*[@id="uploadPicture"]').attachFile(fileName)
        cy.xpath('//*[@id="currentAddress"]').type(data.currentaddr)

        cy.xpath('//*[@id="state"]/div/div[1]').click({force:true})
        cy.contains('Rajasthan').click({force:true})
        cy.xpath('//*[@id="city"]/div/div[1]/div[1]').click({force:true})
        cy.contains('Jaiselmer').click({force:true})
        cy.xpath('//*[@id="submit"]').click({force:true})
        cy.wait(5000)
        cy.xpath('//*[@id="closeLargeModal"]').click({force:true})

        

        
        })

    })

})