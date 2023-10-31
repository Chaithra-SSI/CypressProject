class Rediff {


    visit() {
        cy.visit("https://register.rediff.com/register/register.php?FormName=user_details")
    }

    fullname(value) {

        const fn = cy.get("table.f14:nth-child(3) tbody:nth-child(1) tr:nth-child(3) td:nth-child(3) > input:nth-child(1)")
        fn.clear()
        fn.type(value)
        return this
    }

    userID(value) {

        const uid = cy.get("table.f14:nth-child(3) tbody:nth-child(1) tr:nth-child(7) td:nth-child(3) > input:nth-child(1)")
        uid.clear()
        uid.type(value)
        return this
    }

    checkavailability()
    {
        const b1=cy.get("table.f14:nth-child(3) tbody:nth-child(1) tr:nth-child(7) td:nth-child(3) > input.btn_checkavail:nth-child(3)")
        b1.click({force:true})
    }

    Password(value) {

        const pwd = cy.get("#newpasswd")
        pwd.clear()
        pwd.type(value)
        return this
    }

    Password1(value) {

        const pwd1 = cy.get("#newpasswd1")
        pwd1.clear()
        pwd1.type(value)
        return this
    }

    AltEmail(value) {

        const altemail = cy.get("table.f14:nth-child(3) table.f14 tbody:nth-child(1) tr:nth-child(1) td:nth-child(3) > input:nth-child(1)")
        altemail.clear()
        altemail.type(value)
        return this
    }
    checkbox()
    {
        const cb=cy.get("table.f14:nth-child(3) table:nth-child(1) tbody:nth-child(1) tr:nth-child(1) td:nth-child(1) > input.nomargin")
        cb.click({force:true})
    }
    Phone(value) {

        const phno = cy.get("#mobno")
        phno.clear()
        phno.type(value)
        return this
    }

    day() {

        const Day = cy.get("table.f14:nth-child(3) tbody:nth-child(1) tr:nth-child(23) td:nth-child(3) > select:nth-child(1)").select('15')
        
    }
    month() {

        const Month = cy.get("table.f14:nth-child(3) tbody:nth-child(1) tr:nth-child(23) td:nth-child(3) > select:nth-child(2)").select('JUL')
        
    }
    year() {

        const Year = cy.get("table.f14:nth-child(3) tbody:nth-child(1) tr:nth-child(23) td:nth-child(3) > select:nth-child(3)").select('1988')
        
    }
    radiobutton()
    {
        const rb=cy.get("table.f14:nth-child(3) tbody:nth-child(1) tr:nth-child(25) td:nth-child(3) > input:nth-child(2)")
        rb.click({force:true})
    }

    country() {

        const Country = cy.get("#country").select('India')
        
    }
    city() {

        const City = cy.get("table.f14:nth-child(3) table.f14 tbody:nth-child(1) tr:nth-child(1) td:nth-child(3) > select:nth-child(1)").select('Bangalore')
        
    }
    regbutton()
    {
        const REG=cy.get("#Register")
        REG.click({force:true})
    }

   

}
export default Rediff