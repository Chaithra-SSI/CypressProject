Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from   
    // failing the test   
    return false
})

describe('Rhythm24*7', () => {
    it('Data_driven_test', () => {

        cy.fixture("rhythm").then((data)=>{

            cy.visit('http://devrhythm.smartsight.in/login')
            cy.wait(5000)
            data.forEach((userdata)=>{

              
                cy.get('[placeholder="Enter Username"]').clear().type(userdata.username)
                cy.get('[placeholder="Enter Password"]').clear().type(userdata.password)
                cy.get('[class="login_btn large btn btn-primary"]').click({force:true})

                if(userdata.username=='jbhat@smartsight.in' && userdata.password=="123456")
                {
                    cy.url().should('eq','http://devrhythm.smartsight.in/home')
                    cy.wait(2000)
                    cy.contains('Logout').click({force:true}) 
                    cy.wait(2000) //Logoutbutton
                }
                else if(userdata.username=='kjha@smartsight.in' && userdata.password=="123456")
                {
                    cy.url().should('eq','http://devrhythm.smartsight.in/home')
                    cy.wait(2000)
                    cy.contains('Logout').click({force:true})  //Logoutbutton
                    cy.wait(2000)

                }
                else if(userdata.username=='spawar@smartsight.in' && userdata.password=="123456")
                {
                    cy.url().should('eq','http://devrhythm.smartsight.in/home')
                    cy.wait(2000)
                    cy.contains('Logout').click({force:true})  //Logoutbutton
                    cy.wait(2000)

                }
                else if(userdata.username=='smore@smartsight.in' && userdata.password=="123456")
                {
                    cy.url().should('eq','http://devrhythm.smartsight.in/home')
                    cy.wait(2000)
                    cy.contains('Logout').click({force:true})  //Logoutbutton
                    cy.wait(2000)

                }
                else if(userdata.username=='vkamath@smartsight.in' && userdata.password=="123456")
                {
                    cy.url().should('eq','http://devrhythm.smartsight.in/home')
                    cy.wait(2000)
                    cy.contains('Logout').click({force:true})  //Logoutbutton
                    cy.wait(2000)

                }
                else
                {
                    cy.contains('Enter Valid Credential').should('exist')
                    cy.wait(2000)
                    cy.url().should('eq','http://devrhythm.smartsight.in/login')
                }
            })
        })
      
    })

})