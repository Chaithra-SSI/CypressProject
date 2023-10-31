Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
describe("Cypress.io Login with Google Test", () => {
    it("Visits Cypress.io and Clicks Login with Google", () => {
      // Visit the Cypress.io website
      cy.visit("https://www.cypress.io");
      cy.wait(5000)
      cy.get('[data-cy="header-login"]').invoke('removeAttr','target').click({force:true})
      // Locate and click the "Login with Google" button
      cy.get('.btn-provider-google').click(); // Adjust the selector as needed
      
    });
    it('should input email and password', { baseUrl:  'https://accounts.google.com' }, function() {
        // Handling all errors and 'skipping' test to avoid global failure.
        cy.on('uncaught:exception', (err, runnable) => {
          console.error('Google Login -> uncaught:exception', err);
         
          return false;
        });
       
        cy.visit('/v3/signin/identifier?opparams=%253F&dsh=S-284937094%3A1698662825588243&client_id=323538377670-hctjvd4d7a1hunae4p48da66h0pal8ce.apps.googleusercontent.com&o2v=2&redirect_uri=https%3A%2F%2Fauthenticate.cypress.io%2Flogin%2Fgoogle%2Fcallback&response_type=code&scope=email+profile+openid&service=lso&state=%7B%22source%22%3A%22dashboard%22%7D&theme=glif&flowName=GeneralOAuthFlow&continue=https%3A%2F%2Faccounts.google.com%2Fsignin%2Foauth%2Fconsent%3Fauthuser%3Dunknown%26part%3DAJi8hAOPVv8e5iknp2pqD_gATs2EyvXBGoC3MlwkkdfwKUi7WseQkLoYUij3IIvFtt_lxUp52KDUmPC84GdEpOR49RS0Uw-E42JQbzQy9RpoVlmYIAEn1Iq9TYEzwEkcTUFr5yrfkGO_SUZml1P_wRlrCXJI5A-50Z7HRZDxNq5iQ8lXxF0U8p5Q2ACjUhL9GWCkJGYzNAEdp5DS_--MtwxYO1jvzTR6U4z6pkxsZOszGsDHkViLXa4_XNVMrgAmh5I__m0JeqFy9ak1cifd3clGASDwlrfkUCFtbgRCPJPGMhXccTab9lncOft9m92eLfIVARMaM6pWik7LPA_2nM4cC55IRkkylk1y2VLbDvptfDwTvI63kNUJ2pC_qiukbzjXfsfKYNW_YwRWFBSnjwsiDUCb_fEgGk9RerVOMaLQOkDCdRjK8mufsrVLPzlmdnMCx1dmJofP4HwxlaQWD_QxWW3U5ectJ-b4r_Z3yrPkcqaHoNd4Ra4%26as%3DS-284937094%253A1698662825588243%26client_id%3D323538377670-hctjvd4d7a1hunae4p48da66h0pal8ce.apps.googleusercontent.com%26theme%3Dglif%23&app_domain=https%3A%2F%2Fauthenticate.cypress.io&rart=ANgoxce93VhN2z43PbSb1y2FPSd41X8Qzm2oWyWkvWu1jZStiKRFUP_xhUm6GgD43x152l3Os2ahie3B16SXmYgnoIqFhBYYHw',{
          failOnStatusCode: false}
        )

        cy.wait(3000);

        // Google Login Redirection: Email Input
        cy.url().should('contain', 'accounts.google.com')
          .get('input[type="email"]').type('cchandrashekhar@smartsight.in')
          .type('{enter}').wait(10000);

        // Google Login Redirection: Password Input
        cy.url().should('contain', 'accounts.google.com')
          .get('input[type="password"]').type('SmartSI@2023')
          .type('{enter}').wait(10000);

        })
    
  })
  