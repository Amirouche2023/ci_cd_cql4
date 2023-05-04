describe('connexion sur carambar', () => {
    it('page de connexion', () => {

        cy.visit('https://www.laboutique.carambarco.com/')
        
         cy.get('[href="#"]').click() //pour accepter la CMP*
        
         cy.get('[href="https://www.laboutique.carambarco.com/mon-compte"]').eq(0).click()
        
         cy.get('[type="email"]').eq(0).type('aitmezianeidir@yahoo.fr')
        
         cy.get('[name="password"]').type('A@martin3')
        
         cy.get('[data-link-action="sign-in"]').click()
         
         y.contains("Échec d'authentification").should('be.visible')
    });
});