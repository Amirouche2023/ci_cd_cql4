describe('connexion sur carambar', () => {
    it('page de connexion', () => {


        cy.visit('https://www.laboutique.carambarco.com/'); // se rendre sur le site
        cy.get('[href="#"]').click(); //accepter la CMP
        
        cy.get(' .nq-c-Header-menu-item-label').eq(2).click(); // cliquer sur marques
        cy.get('[href="https://www.laboutique.carambarco.com/68-lutti"]').eq(2).click(); // ajouter le produit au panier en cliquant sur la petite icone panier
        cy.get('[data-id-product="323"] > .nq-c-ProductListItem-mainlink > .nq-c-ProductListItem-imgContainer > .nq-c-ProductAddToCart > form > button').click();
        cy.get('.nq-c-CartPopin-actions-back').click(); //cliquer sur continuer mes achats
        
        cy.get('[data-id-product="317"]').click() // cliquer sur le produit
        cy.get('.nq-c-ProductAddToCart-main > .nq-c-Btn > span').click() // cliquer sur le bouton ajouter au panier
        cy.get('.nq-c-CartPopin-actions-back').click(); //cliquer sur continuer mes achats
        cy.get(' .nq-c-Header-menu-item-label').eq(3).click(); // cliquer sur bonbons
        cy.get('[data-id-product="165"] > .nq-c-ProductListItem-mainlink > .nq-c-ProductListItem-main > .nq-c-ProductListItem-name').click() // cliquer sur le nom du produit
        cy.get('.nq-c-ProductAddToCart-main > .nq-c-Btn > span').click() // cliquer sur le bouton ajouter au panier
        cy.get('.nq-c-CartPopin-actions-back').click(); //cliquer sur continuer mes achats

        cy.get(' .nq-c-Header-menu-item-label').eq(4).click(); // cliquer sur chocolats
        cy.get('[data-id-product="222"] > .nq-c-ProductListItem-mainlink > .nq-c-ProductListItem-imgContainer > .nq-c-ProductAddToCart > form > button').click()

        cy.get('[class="nq-c-HeaderCart-icon"]').click()     
        
         
    });
});







