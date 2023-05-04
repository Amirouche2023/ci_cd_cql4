describe('connexion sur carambar', () => {
    it('page de connexion', () => {

        cy.visit('https://www.laboutique.carambarco.com/');
        
         cy.get('[href="#"]').click() //pour accepter la CMP*
        
         cy.get('[href="https://www.laboutique.carambarco.com/mon-compte"]').eq(0).click();
        
         cy.get('[type="email"]').eq(0).type('amirouche.life@hotmail.com');
        
         cy.get('[name="password"]').type('Alex@2018');
        
         cy.get('[data-link-action="sign-in"]').click();



         cy.get('[class="nq-c-Header-menu-item-label"]').eq(2).click();

         cy.get('[href="https://www.laboutique.carambarco.com/69-carambar"]').eq(2).click();
         cy.get('[data-button-action="add-to-cart"]').eq(0).click();
         cy.get('[class="nq-c-Link"]').click();
         cy.get ('[class="nq-i-plus"]').eq(1).click();
         cy.get('[data-button-action="add-to-cart"]').eq(0).click();
         cy.get('[class="nq-c-Btn"]').eq(3).click(); // cliquer sur je commande
         
        // cy.get('[data-type="decrement"]').eq(0).click(); // retirer 1 seul article sur la premiere ligne du panier
        //cy.get('[data-type="increment"]').eq(0).click(); // ajouter 1 seul article sur la premiere ligne du panier

        cy.get('[class="nq-c-Btn"]').eq(0).click(); // cliquer sur je commande dans le panier

        

 cy.get("[name='firstname']").eq(0).clear().type("Amirouche");
   cy.get("[name='lastname']").eq(0).clear().type("life");
      
 cy.get('[type="text"]').eq(4).clear().type('20 rue Henri Barbusse');

    cy.get('[type="text"]').eq(6).clear().type('72310');

     cy.get('[type="text"]').eq(7).clear().type('Besse sur Braye');

     cy.get('[type="text"]').eq(8).clear().type('0617365298');

     cy.get('[name="confirm-addresses"]').click()
     cy.get('[name="confirmDeliveryOption"');
   //  cy.get ('[id="delivery_message"]').type('j adore les bonbons')



         
    });
});


