Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from   
    // failing the test   
    return false
})

describe('Cypress Studio', () => {
    it('Generate the script using CypressStudio', () => {

     
            cy.visit('https://mytestingthoughts.com/FP/register.html')


    })

    /* ==== Test Created with Cypress Studio ==== */
    it('cypressstudio1', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('https://mytestingthoughts.com/FP/register.html');
        cy.get('#u43_input').clear('A');
        cy.get('#u43_input').type('Akansha');
        cy.get('#u45_input').clear('R');
        cy.get('#u45_input').type('Rao');
        cy.get('#u50_input').clear('a');
        cy.get('#u50_input').type('akrao@gmail.com');
        cy.get('#u51_input').clear('a');
        cy.get('#u51_input').type('ak1234#');
        cy.get('#u52_input').clear('a');
        cy.get('#u52_input').type('ak1234#');
        cy.get('#u53_input').clear('9');
        cy.get('#u53_input').type('9000000001');
        cy.get('#u60_input').clear('M');
        cy.get('#u60_input').type('Marks Colony');
        cy.get('#u61_input').clear('D');
        cy.get('#u61_input').type('D.No.1234');
        cy.get('#u62_input').clear('D');
        cy.get('#u62_input').type('Delhi');
        cy.get('#u63_input').clear('I');
        cy.get('#u63_input').type('India');
        cy.get('#u54_div').click({force:true});
        /* ==== End Cypress Studio ==== */
    });
})