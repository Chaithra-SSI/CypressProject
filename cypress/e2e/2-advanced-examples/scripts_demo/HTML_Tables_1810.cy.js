Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
describe('HTML Tables', () => {
    it('To find data in the table', () => {
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.wait(2000)

        //Check for the value present in the table
        cy.get('[name="BookTable"]').contains('td','Master In JS').should('be.visible')

        //Check for the value present in specific row and column
        cy.get('[name="BookTable"]>tbody>tr:nth-child(6)>td:nth-child(3)').contains('JAVA').should('be.visible')

        //Verify the book name "Master In Selenium" has author name as "Mukesh"
         cy.get('[name="BookTable"]>tbody>tr td:nth-child(2)').each(($e,index,$list) =>{ //Selecting the second column

            const text = $e.text()
            if(text.includes("Animesh"))
            {

                cy.get('[name="BookTable"]>tbody>tr td:nth-child(1)').eq(index).then(function(bname)
                
                {
                    const bookName =bname.text()
                    expect(bookName).to.equal("Learn JS")
                })
            }
         })





    })

})