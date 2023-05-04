describe('inscription sur carambar', () => {
    it('page d inscription', () => {
    cy.visit('https://www.laboutique.carambarco.com/'); // visiter la page
  
  
    
      cy.get('[href="#"]').click(); //accepter la CMP
      cy.get(".login").eq(0).click();
      cy.get('[href="https://www.laboutique.carambarco.com/mon-compte"]');
      cy.get('[href="https://www.laboutique.carambarco.com/connexion?create_account=1"]').click();
  
      cy.get('.nq-c-RadioGroup-label').eq(0).click(); //cocher la case M
  
      cy.get('[name="firstname"]').type("amirouche") ;  //saisir le prénom
      cy.get('[name="lastname"]').type("life") ;  //saisir le nom
  
      cy.get('.nq-c-RadioGroup-label').eq(2).click(); //cocher la case partoculier
  
  
  
      cy.get('[type="email"]').eq(0).type("amirouhe.life@hotmail.com") ;  //saisir email
      cy.get('[name="password"]').type("Alex@2018") ;  //saisir mdp   
  
     
  
      cy.get('[data-link-action="save-customer"]').click() //cliquer sur le bouton enregistrer 

      cy.get('[class="nq-c-Field-errors"]').should('be.visible');
    
     });
  });
  
  
  
  