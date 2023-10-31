Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from   
    // failing the test   
    return false
})

describe('ChildTabs/Windows', () => {
    it('Handle the ChildTabs/Windows(1)', () => {

     
            cy.visit('https://the-internet.herokuapp.com/windows')
            cy.wait(5000)
            cy.xpath("//a[contains(text(),'Click Here')]").invoke('removeAttr','target').click({force:true})
            cy.url().should('contain','new')
            cy.wait(2000)
            cy.go('back')
    })

    it.only('Handle the ChildTabs/Windows(2)', () => {

     
        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.wait(5000)
        cy.xpath("//a[contains(text(),'Click Here')]").then((ele)=>{
            let url=ele.prop('href');
            cy.visit(url)
        })
        
        cy.wait(2000)
        cy.url().should('contain','new')
        cy.wait(2000)
        cy.go('back')
})
})