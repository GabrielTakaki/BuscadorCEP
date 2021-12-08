const fetchMock = require('../mocks/fetch');
const findAddress = require('../mocks/findAddress');

describe('Tem os elementos corretos na tela', () => {
  it('Tem o input', () => {
    cy.visit('http://localhost:3000/findByZip');
    
    cy.get('#cep').should('have.attr', 'type', 'number');
  });

  it('Existe botão de busca', () => {
    cy.visit('http://localhost:3000/findByZip');

    cy.get('#cep-button').should('have.text', 'Buscar');
  });

  it('Se retorna o endereco do CEP informado, apresentado', () => {
    cy.visit('http://localhost:3000/findByZip', {
      onBeforeLoad(win) {
        cy.spy(win, 'fetch');
      },
    });
  
    cy.get('#cep').type(88334150);
    cy.get('#cep-button').click();
  
    cy.window()
      .its('fetch')
      .should('be.calledWith', 'https://viacep.com.br/ws/88334150/json/');

    cy.get('#patio').should('be.visible');
    cy.get('#city').should('be.visible');
    cy.get('#neighborhood').should('be.visible');
    cy.get('#state').should('be.visible');;
  });

  it('Verifica se o footer está presente na tela', () => {
    cy.visit('http://localhost:3000/findByZip');
    cy.get('footer').should('be.visible');
  });

  it('Verifica se o header está presente na tela', () => {
    cy.visit('http://localhost:3000/findByZip');
    cy.get('header').should('be.visible');
  });

  it('Verifica se retorna alert ao inserir CEP invalido', () => {
    cy.visit('http://localhost:3000/findByZip');
    cy.get('#cep').type(883350);
    cy.get('#cep-button').click();
    cy.get('.valid-msg').should('have.text', 'CEP inválido');
  })
});
