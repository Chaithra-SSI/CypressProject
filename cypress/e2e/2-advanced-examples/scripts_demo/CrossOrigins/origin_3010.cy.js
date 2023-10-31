Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
describe('Google Login', () => {
 
  it('should input email and password', { baseUrl:  'https://accounts.google.com' }, function() {
        // Handling all errors and 'skipping' test to avoid global failure.
        cy.on('uncaught:exception', (err, runnable) => {
          console.error('Google Login -> uncaught:exception', err);
         
          return false;
        });

        cy.visit('/servicelogin');

        cy.wait(3000);

        // Google Login Redirection: Email Input
        cy.url().should('contain', 'accounts.google.com')
          .get('input[type="email"]').type('cchandrashekhar@smartsight.in')
          .type('{enter}').wait(3000);

        // Google Login Redirection: Password Input
        cy.url().should('contain', 'accounts.google.com')
          .get('input[type="password"]').type('asdf1234#')
          .type('{enter}').wait(3000);
      });
});