const fetchMock = require('../mocks/fetch');
const findCep = require('../mocks/findCep');

describe('Teste da tela de address. Verifica se existe os inputs e buttons, e se fazem o esperado.', () => {
  it('Inputs presentes na tela.', () => {
    cy.visit('http://localhost:3000/address');
    
    cy.get('.select-state').should('have.value', 'AC');
    cy.get('#city').should('have.value', '');
    cy.get('#street').should('have.value', '');
  });

  it('Se com as informaçoes passadas, retorna o CEP e o Logradouro.', () => {
    cy.visit('http://localhost:3000/address', {
      onBeforeLoad(win) {
        cy.spy(win, 'fetch');
      },
    });
    cy.get('.select-state').select('SC');
    cy.get('#city').type('Balneário Camboriú');
    cy.get('#street').type('Joao Jorge Pio');
    cy.get('.btn-el').click();
    findCep.forEach((cep, index) => {
      cy.get(`[data-testid="cep-${index}"]`).should('exist');
    })
  });

  it('Se redireciona para a pagina inicial', () => {
    cy.visit('http://localhost:3000/address');
    cy.get('.btn-el-address').click();
    cy.url().should('eq', 'http://localhost:3000/');
  });
});
