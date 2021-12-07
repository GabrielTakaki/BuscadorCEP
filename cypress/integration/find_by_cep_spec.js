const fetchMock = require('../../src/cypress/mocks/fetch');
const cepMock = require('../../src/cypress/mocks/findCep');

describe('Tem os elementos corretos na tela', () => {
  it('Input de procurar por CEP tem type "number"', () => {
    cy.visit('http://localhost:3000/findByZip');
    
    cy.get('#cep').should('have.type', 'number');
  });

  it('Se redireciona para a página de procurar pro endereço', () => {
    cy.visit('http://localhost:3000/findByZip');
    cy.get('.btn-el-address').click();
    cy.url().should('eq', 'http://localhost:3000/findByAddress');
  });

  it('Se retorna o endereco do CEP informado, apresentado', () => {
    cy.visit('http://localhost:3000/', {
      onBeforeLoad(win) {
        cy.spy(win, 'fetch');
      },
    });
    cy.get('#cep').type(88334150);
    cy.get('#cep-button').click();
    cepMock.forEach((cep, index) => {
      cy.get('.address-card').should('exist');
      cy.get('.street').should('exist');
      cy.get('.city').should('exist');
      cy.get('.neighbourhood').should('exist');
      cy.get('.cep').should('exist');
    });
  });
});
