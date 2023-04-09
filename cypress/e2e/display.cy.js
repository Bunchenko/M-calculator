describe('Display', () => {
  it('should update accordingly to pressed digit, operation and control buttons', () => {
    cy.visit('/');

    cy.get('[data-cy="digit-9"]').click();

    cy.get('[data-cy="display-result"]').should('have.value', '0  ');
    cy.get('[data-cy="display-current-operand"]').should('have.value', '9  ');

    cy.get('[data-cy="operation-*"]').click();

    cy.get('[data-cy="display-result"]').should('have.value', '9 * ');
    cy.get('[data-cy="display-current-operand"]').should('have.value', '  ');

    cy.get('[data-cy="point"]').click();

    cy.get('[data-cy="display-current-operand"]').should('have.value', '0.  ');

    cy.get('[data-cy="digit-1"]').click()
    cy.get('[data-cy="digit-0"]').click()
    cy.get('[data-cy="digit-1"]').click()
    cy.get('[data-cy="equals"]').click()

    cy.get('[data-cy="display-result"]').should('have.value', '0.909  ');
    cy.get('[data-cy="display-current-operand"]').should('have.value', '  ');

    cy.get('[data-cy="operation--"]').click();
    cy.get('[data-cy="digit-8"]').click();

    cy.get('[data-cy="display-result"]').should('have.value', '0.909 - ');
    cy.get('[data-cy="display-current-operand"]').should('have.value', '8  ');

    cy.get('[data-cy="clear"]').click();

    cy.get('[data-cy="display-result"]').should('have.value', '0  ');
    cy.get('[data-cy="display-current-operand"]').should('have.value', '  ');
  })
})