describe('Tem os elementos corretos no header', () => {
  it('Verifica se o header tem atributo fixed', () => {
    cy.visit('http://localhost:3000/');
    cy.get('header').should('have.css', 'position', 'fixed');
  });

  it('Apresenta logo da aplicação', () => {
    cy.visit('http://localhost:3000/');
    
    cy.get('.img-logo').should('be.visible');
  });

  it('Apresenta os botões de redirecionamento', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#home-link').should('be.visible');
    cy.get('#zip-link').should('be.visible');
    cy.get('#address-link').should('be.visible');
  });
});

describe('Os botões tem o comportamento esperado', () => {
  it('Se redireciona para as páginas esperadas', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#home-link').click();
    cy.url().should('eq', 'http://localhost:3000/');

    cy.visit('http://localhost:3000/');
    cy.get('#zip-link').click();
    cy.url().should('eq', 'http://localhost:3000/findByZip');

    cy.visit('http://localhost:3000/');
    cy.get('#address-link').click();
    cy.url().should('eq', 'http://localhost:3000/findByAddress');
  });
});
