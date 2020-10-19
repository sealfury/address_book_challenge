// userCanCreateAContact.feature.js 

describe('user can create a contact', () => {
    it('test', () => {
        cy.visit('http://localhost:3001')
        cy.get('#add-contact').click()
        cy.get('#name').type('William')
        cy.get('#email').type('willspecker@gmail.com')
        cy.get('#phone').type('0702 550482')
        cy.get('#company').type('Craft Academy')
        cy.get('#notes').type('Student coder')
        cy.get('#twitter').type('@alasihavenotwitter')
        cy.get('#submit').click()
       })

       it('displays the name of a new contact', () => {
           cy.get('#contact-list').should('contain', 'William')
       })

       it('displays the phone number of the new contact', () => {
           cy.get('#contact-list').should('contain', '0702 550482')
       })
})