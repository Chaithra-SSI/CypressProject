/// <reference types="cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
describe("HTTP_Requests", function () {
    it('Get Call', () => {
        cy.request('GET', 'https://jsonplaceholder.typicode.com/posts/1')
            .its('status')
            .should('equal', 200)

    })

    it('POST Call', () => {
        cy.request({

            method: 'POST',
            url: 'https://jsonplaceholder.typicode.com/posts',
            body:
            {
                title: "POST call",
                body: "This is API POST call",
                usedId: 18

            }
        }).then((res) => {

            expect(res.status).to.eq(201)
            expect(res.body).has.property('title', 'POST call')
            expect(res.body).has.property('body', 'This is API POST call')
            expect(res.body).has.property('usedId', 18)


        })


    })

    it('PUT Call', () => {
        cy.request({

            method: 'PUT',
            url: 'https://jsonplaceholder.typicode.com/posts/2',
            body:
            {
                title: "PUT call",
                body: "This is API PUT call",
                usedId: 18,
                id: 2

            }
        }).then((res) => {

            expect(res.status).to.eq(200)
            expect(res.body).has.property('title', 'PUT call')
            expect(res.body).has.property('body', 'This is API PUT call')
            expect(res.body).has.property('usedId', 18)
            expect(res.body).has.property('id', 2)


        })
    })

    it('DELETE Call', () => {
        cy.request({

            method: 'DELETE',
            url: 'https://jsonplaceholder.typicode.com/posts/2',

        })
            .its('status')
            .should('equal', 200)

    })


})