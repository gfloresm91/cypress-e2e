'use strict'

describe('Pruebas del login', () => {

    // Before each test
    beforeEach(() => {
        cy.visit('/login')
        cy.contains('h1', 'Bienvenido').should('be.visible')
    })

    // Skip this test
    it.skip('Debe registrar un usuario', () => {
        cy.contains('Crear una cuenta').click()
        cy.get('#name').type('Usuario de prueba')
        cy.get('#title').type('Compañia de prueba')
        cy.get('#email2').type('test@test.com')
        cy.get('#password2').type('qweasd')
        cy.contains('.button', 'Registrarse').click()
        cy.wait(3000)
        cy.get('.error-msg').should('not.exist')
    })

    it('Debe fallar con un usuario erróneo', () => {
        cy.get('#email1').type('fail@test.com')
        cy.get('#password1').type('qweasd')
        cy.contains('.button', 'Ingresar').click()
        cy.wait(3000)
        cy.get('.error-msg').should('be.visible')
    })

    it('Debe logear un usuario', () => {
        cy.get('#email1').type('test@test.com')
        cy.get('#password1').type('qweasd')
        cy.contains('.button', 'Ingresar').click()
        cy.wait(3000)
        cy.contains('a', 'Dashboard').should('be.visible')
    })

    // After all test
    after(() => {
        cy.log('Test finalizados')
    })
})