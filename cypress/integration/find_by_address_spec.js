const fetchMock = require('../mocks/fetch');
const findCep = require('../mocks/findCep');

describe('Teste da tela de address. Verifica se existe os inputs e buttons, e se fazem o esperado.', () => {
  it('Inputs presentes na tela.', () => {
    cy.visit('http://localhost:3000/findByAddress');
    
    cy.get('#state').should('have.value', 'AC');
    cy.get('#city').should('have.value', '').should('have.attr', 'placeholder', 'Rio Branco');
    cy.get('#street').should('have.value', '').should('have.attr', 'placeholder', 'Rua João Paulo');
  });

  it('Verifica se existe a table', () => {
    cy.visit('http://localhost:3000/findByAddress');

    cy.get('.table').should('be.visible');


  });
  it('Se com as informaçoes passadas, retorna o CEP e o Logradouro.', () => {
    cy.visit('http://localhost:3000/findByAddress', {
      onBeforeLoad(win) {
        cy.spy(win, 'fetch');
      },
    });
    cy.get('#state').select('SC');
    cy.get('#city').type('Balneário Camboriú');
    cy.get('#street').type('João Jorge Pio');
    cy.get('.btn').click();
    findCep.forEach((cep, index) => {
      cy.get(`[data-testid="cep-${index}"]`).should('be.visible');
    })
  });
  it('Verifica se o footer está presente na tela', () => {
    cy.visit('http://localhost:3000/findByAddress');
    cy.get('footer').should('be.visible');
  });

  it('Verifica se o header está presente na tela', () => {
    cy.visit('http://localhost:3000/findByAddress');
    cy.get('header').should('be.visible');
  });
});
