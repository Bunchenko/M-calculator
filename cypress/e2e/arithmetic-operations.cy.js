describe('Arithmetic operations', () => {
  it('Adds, subtracts, multiplies, divides with correct result', () => {
    cy.visit('/');

    cy.get('[data-cy="digit-9"]').click();
    cy.get('[data-cy="digit-0"]').click();
    cy.get('[data-cy="operation-+"]').click();
    cy.get('[data-cy="digit-1"]').click();
    cy.get('[data-cy="digit-0"]').click();
    cy.get('[data-cy="operation--"]').click();

    cy.get('[data-cy="display-result"]').should('have.value', '100 - ');

    cy.get('[data-cy="digit-1"]').click();
    cy.get('[data-cy="operation-*"]').click();

    cy.get('[data-cy="display-result"]').should('have.value', '99 * ');

    cy.get('[data-cy="point"]').click();
    cy.get('[data-cy="digit-1"]').click();
    cy.get('[data-cy="operation-/"]').click();

    cy.get('[data-cy="display-result"]').should('have.value', '9.9 / ');

    cy.get('[data-cy="digit-9"]').click();
    cy.get('[data-cy="point"]').click();
    cy.get('[data-cy="digit-9"]').click();

    cy.get('[data-cy="equals"]').click();
    cy.get('[data-cy="display-result"]').should('have.value', '1  ');
  })
})