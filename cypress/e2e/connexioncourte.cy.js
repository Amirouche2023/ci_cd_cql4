describe('connexion sur carambar', () => {
    it('page de connexion', () => {

        cy.visit('https://www.laboutique.carambarco.com/')

        cy.login()
    });
});
