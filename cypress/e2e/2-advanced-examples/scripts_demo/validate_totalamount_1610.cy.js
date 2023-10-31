Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
describe('Walmart', () => {
    it('Calculate total amount', () => {
        cy.visit('https://www.walmart.com/')
        cy.wait(15000)
        cy.title().should('eq', 'Shop Halloween Costumes, Décor, Candy & More - Walmart')
        cy.wait(5000)
        cy.get('.w_jaHf').click({ force: true })
        cy.get('input[type="search"]').type("sudha murty books")  //User name entered
        cy.wait(5000)
        cy.get('[data-testid="search-form"] > .flex > .br-100').click({ force: true })

        cy.get(':nth-child(1) > .pb1-xl > .mid-gray > [data-testid="list-view"] > :nth-child(1) > :nth-child(2) > .z-2 > .relative > .w_hhLG > .mr2').click({ force: true })
        cy.wait(5000)
        cy.get(':nth-child(2) > .pb1-xl > .mid-gray > [data-testid="list-view"] > :nth-child(1) > :nth-child(2) > .z-2 > .relative > .w_hhLG > .mr2').click({ force: true })
        cy.wait(5000)
        cy.get(':nth-child(3) > .pb1-xl > .mid-gray > [data-testid="list-view"] > :nth-child(1) > :nth-child(2) > .z-2 > .relative > .w_hhLG > .mr2').click({ force: true })
        cy.wait(5000)


        cy.get('#cart-button-header > .db').each(($ele) => {
            const total = $ele.text().trim().replace(/[^0-9\.-]+/g, "")
            cy.log(total)


            cy.get('#cart-button-header').click({ force: true })

            //Individual products
            cy.get('[class="f5 lh-copy h2-l f4-l lh-title-l b black tr"]').eq(0).each(($ele1) => {
                const t1 = $ele1.text().trim().replace(/[^0-9\.-]+/g, "")
                cy.log(t1)



                cy.get('[class="f5 lh-copy h2-l f4-l lh-title-l b black tr"]').eq(1).each(($ele2) => {
                    const t2 = $ele2.text().trim().replace(/[^0-9\.-]+/g, "")
                    cy.log(t2)



                    cy.get('[class="f5 lh-copy h2-l f4-l lh-title-l b black tr"]').eq(2).each(($ele3) => {
                        const t3 = $ele3.text().trim().replace(/[^0-9\.-]+/g, "")
                        cy.log(t3)

                        //  console.log("typeof",parseInt(t1+t2))
                        const num = parseFloat(total);
                        const num1 = parseFloat(t1);
                        const num2 = parseFloat(t2);
                        const num3 = parseFloat(t3);
                        const TOTAL = num1 + num2 + num3;
                        cy.log(TOTAL)
                        expect(num).to.equal(TOTAL); //Expect the individual addition of products (TOTAL) to equal the total at the cart(total)
                        cy.log("Both are equal")
                        // Comparisons
                        /* expect(num1).to.be.lessThan(num2); // num1 is less than num2
                         expect(num1).to.be.lessThanOrEqual(num2); // num1 is less than or equal to num2
                         expect(num1).to.be.greaterThan(num2); // num1 is greater than num2
                         expect(num1).to.be.greaterThanOrEqual(num2); */// num1 is greater than or equal to num2
                    })

                })
            })

        })


    })

})