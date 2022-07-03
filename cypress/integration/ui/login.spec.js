/// <reference types="Cypress"/>

describe('Authentication pages UI Testing', () => {
  describe('Visit Login page', () => {
    before(() => {
      cy.viewport(1600, 900);
      cy.visit('/');
    });
    it('Should input user details and login successfully', () => {
      cy.get('#username')
        .type('ekisar')
        .get('#password')
        .type('12345678{enter}');
    });
  });
});
