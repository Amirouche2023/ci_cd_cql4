const user = require("../fixtures/compteCarambar.json");

describe('connexion sur carambar', () => {
    it('page de connexion', () => {

        cy.visit('https://www.laboutique.carambarco.com/')
        
         cy.get('[href="#"]').click() //pour accepter la CMP*
        
         cy.get('[href="https://www.laboutique.carambarco.com/mon-compte"]').eq(0).click()
        
         cy.get('[name="email"]').eq(0).type(user[2].email);
        
         cy.get('[name="password"]').eq(0).type(user[2].password); //eq(0) position 1 sur le site et user[2] c la position du jeu de donnée
        
         cy.get('[data-link-action="sign-in"]').click()
    });
});