Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
describe('Handle pop ups', () => {
    it('Alerts/Confirm/Prompt', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.wait(2000)
        cy.get('div.row:nth-child(2) div.large-12.columns:nth-child(2) div.example:nth-child(2) ul:nth-child(3) li:nth-child(1) > button:nth-child(1)').click({ force: true })

        cy.on('window:alert', (str) => {
            expect(str).to.equal('I am a JS Alert')
        })
        cy.get('#result').should('contain', 'You successfully clicked an alert')
        cy.wait(5000)
        //Confirm box
        cy.contains('Click for JS Confirm').click()
        cy.wait(5000)
        cy.on('window:confirm', (str1) => // for Confirm-type alert

        {
            expect(str1).to.equal('I am a JS Confirm')

        })
        cy.wait(5000)
        cy.on('window:confirm', () => true)
        cy.wait(5000)
        cy.get('#result').should('have.text', 'You clicked: Ok')


    })

    it('Handling JS Confirm - Click Cancel', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.wait(2000)
        cy.contains('Click for JS Confirm').click()
        cy.wait(5000)
        cy.on('window:confirm', () => false)
        cy.wait(5000)
        cy.get('#result').should('have.text', 'You clicked: Cancel')
      })

      it('Handling JS Prompt - Input text in prompt, Click OK and Validate Input Text', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.wait(2000)
        cy.window().then(($win) => {
          cy.stub($win, 'prompt').returns('This is automation test')
          cy.wait(5000)
          cy.contains('Click for JS Prompt').click()
          cy.wait(5000)
        })
        cy.get('#result').should('have.text', 'You entered: This is automation test')
      })
    

})