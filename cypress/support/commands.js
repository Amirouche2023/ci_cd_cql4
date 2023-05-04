

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
const user = require("../fixtures/compteCarambar.json");
Cypress.Commands.add('login', (email, password) => { 

    cy.get('[href="#"]').click() //pour accepter la CMP*
        
         cy.get('[href="https://www.laboutique.carambarco.com/mon-compte"]').eq(0).click()
         cy.get('[type="email"]').eq(0).type(user[1].email)
         cy.get('[name="password"]').type(user[1].password)
        
       //  cy.get('[type="email"]').eq(0).type('amirouche.life@hotmail.com')
        
       //  cy.get('[name="password"]').type('Alex@2018')
        
         cy.get('[data-link-action="sign-in"]').click()
})
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })