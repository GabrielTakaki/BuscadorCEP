describe('Página home apresenta os elementos esperados', () => {
  it('verifica sem o header está na página', () => {
    cy.visit('http://localhost:3000/');
    cy.get('header').should('be.visible');
  });

  it('verifica se footer está na página', () => {
    cy.visit('http://localhost:3000/');
    cy.get('footer').should('be.visible');
  });

  it('Se existe a tag main com conteúdo', () => {
    cy.visit('http://localhost:3000/')
    cy.get('.main').should('exist');
  });

  it('Se contém texto de boas vindas', () => {
    cy.visit('http://localhost:3000/')
    cy.get('.main__title').contains('Seja bem-vindo ao BuscadorCEP!');
  });
})