Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
describe('To check on Origin', () => {
        
      it("should login to netlify with github without origin", () => {
        // visit netlify
        cy.visit("https://www.netlify.com/");
        cy.get('#mainNav-hamburger-compact-menu').click({ force: true });
        cy.contains("Log in").click({ force: true });
        cy.get('[name="github"]').click({ force: true });
    
       
        
          cy.get("#login_field").type("qwerty@gmail.com");
          cy.get("#password").type("qwertyasd");
          cy.get("input").contains("Sign in").click();
        })

        it("should login to netlify with github with origin", () => {
            // visit netlify
            cy.visit("https://www.netlify.com/");
            cy.get('#mainNav-hamburger-compact-menu').click({ force: true });
            cy.contains("Log in").click({ force: true });
            cy.get('[name="github"]').click({ force: true });
        
            // click on 'login with Github' button
            cy.origin("https://github.com", () => {
              cy.get("#login_field").type("qwerty@gmail.com");
              cy.get("#password").type("qwertyasd");
              cy.get("input").contains("Sign in").click();
            });
        
            cy.visit("https://www.netlify.com/");
            cy.url().should("contain", "netlify");
          });
    })
