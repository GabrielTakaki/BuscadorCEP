describe('Tem os elementos corretos no footer', () => {
  it('Verifica se o footer tem atributo fixed', () => {
    cy.visit('http://localhost:3000/');
    cy.get('footer').should('have.css', 'position', 'fixed');
  });

  it('Apresenta logo do github e linkedin', () => {
    cy.visit('http://localhost:3000/');
    
    cy.get('#github-link').should('be.visible');
    cy.get('#linkedin-link').should('be.visible');
  });

  it('Apresenta copyright', () => {
    cy.visit('http://localhost:3000/');
    cy.get('.copyright').should('be.visible');
  });
});
