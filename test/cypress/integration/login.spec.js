'use strict'

describe('Pruebas del login', () => {

    // Before all tests
    before(() => {
        cy.exec('npm run test-clean')
    })

    // Before each test
    beforeEach(() => {
        // Load test data in fixture/user.json folder
        // Alias is require (.as)
        cy.fixture('user.json').as('userData')
        cy.visit('/login')
        cy.contains('h1', 'Bienvenido').should('be.visible')
    })

    it('Debe registrar un usuario', () => {
        cy.get('@userData').then((userData) => {
            // Custom command
            cy.createUser(userData)
        })
    })

    it('Debe fallar con un usuario erróneo', () => {
        // Custom command        
        cy.loginUser('fail@test.com', 'qweasd')
        cy.get('.error-msg').should('be.visible')
    })

    it('Debe logear un usuario', () => {
        cy.get('@userData').then((userData) => {
            // Custom command
            cy.loginUser(userData.email, userData.password)
            cy.contains('a', 'Dashboard').should('be.visible')
        })
    })

    // After all test
    after(() => {
        cy.log('Test finalizados')
    })
})