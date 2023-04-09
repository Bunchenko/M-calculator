describe('Keypad', () => {
  it('should handle clicks on every button', () => {
    cy.visit('/');

    cy.get('[data-cy="digit-9"]').click();
    cy.get('[data-cy="digit-8"]').click();
    cy.get('[data-cy="digit-7"]').click();
    cy.get('[data-cy="digit-6"]').click();
    cy.get('[data-cy="digit-5"]').click();
    cy.get('[data-cy="digit-4"]').click();
    cy.get('[data-cy="digit-3"]').click();
    cy.get('[data-cy="digit-2"]').click();
    cy.get('[data-cy="digit-1"]').click();
    cy.get('[data-cy="digit-0"]').click();

    cy.get('[data-cy="display-current-operand"]').should('have.value', '9876543210  ');

    //there has to be only one point in number
    cy.get('[data-cy="point"]').click();
    cy.get('[data-cy="point"]').click();

    cy.get('[data-cy="display-current-operand"]').should('have.value', '9876543210.  ');

    //equals doesn't work if there is no operation and second operand
    cy.get('[data-cy="equals"]').click();

    cy.get('[data-cy="display-result"]').should('have.value', '0  ');
    cy.get('[data-cy="display-current-operand"]').should('have.value', '9876543210.  ');

    //only one operation can be chosen
    cy.get('[data-cy="operation-+"]').click();
    cy.get('[data-cy="operation--"]').click();
    cy.get('[data-cy="operation-/"]').click();
    cy.get('[data-cy="operation-*"]').click();

    cy.get('[data-cy="display-result"]').should('have.value', '9876543210 * ');

    //active operation button should have white background
    cy.get('[data-cy="operation-*"]').should('have.css', 'background-color', 'rgb(255, 255, 255)');

    //pressing point button with empty current operand
    cy.get('[data-cy="point"]').click();
    cy.get('[data-cy="display-current-operand"]').should('have.value', '0.  ');
  })
})