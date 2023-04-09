describe('Control panel', () => {
  it('Clear, clear history, clear all, undo work as expected', () => {
    cy.visit('/');

    //clear
    cy.get('[data-cy="digit-9"]').click();
    cy.get('[data-cy="operation-*"]').click();
    cy.get('[data-cy="digit-5"]').click();

    cy.get('[data-cy="clear"]').click();

    cy.get('[data-cy="display-result"]').should('have.value', '0  ');
    cy.get('[data-cy="display-current-operand"]').should('have.value', '  ');

    //clear history
    cy.get('[data-cy="digit-9"]').click();
    cy.get('[data-cy="operation-*"]').click();
    cy.get('[data-cy="digit-5"]').click();
    cy.get('[data-cy="equals"]').click();

    cy.get('[data-cy="history-panel"]').click();
    cy.get('[data-cy="history-list"]').children().should('contain', '9 * 5 = 45');
    cy.get('[data-cy="history-list"]').children().should('have.length', 1);

    cy.get('[data-cy="clear-history"]').click();

    cy.get('[data-cy="history-panel"]').click();
    cy.get('[data-cy="history-list"]').should('contain', 'History is empty!');
    cy.get('[data-cy="history-list"]').children().should('have.length', 0);

    //clear all
    cy.get('[data-cy="digit-9"]').click();
    cy.get('[data-cy="operation--"]').click();
    cy.get('[data-cy="digit-5"]').click();
    cy.get('[data-cy="operation-+"]').click();
    cy.get('[data-cy="digit-3"]').click();

    cy.get('[data-cy="history-panel"]').click();
    cy.get('[data-cy="history-list"]').should('contain', '9 - 5 = 4');
    cy.get('[data-cy="history-list"]').children().should('have.length', 1);
    cy.get('[data-cy="display-result"]').should('have.value', '4 + ');
    cy.get('[data-cy="display-current-operand"]').should('have.value', '3  ');

    cy.get('[data-cy="clear-all"]').click();

    cy.get('[data-cy="history-panel"]').click();
    cy.get('[data-cy="history-list"]').should('contain', 'History is empty!');
    cy.get('[data-cy="history-list"]').children().should('have.length', 0);
    cy.get('[data-cy="display-result"]').should('have.value', '0  ');
    cy.get('[data-cy="display-current-operand"]').should('have.value', '  ');

    //undo
    cy.get('[data-cy="operation-+"]').click();
    cy.get('[data-cy="digit-3"]').click();
    cy.get('[data-cy="equals"]').click();

    cy.get('[data-cy="history-panel"]').click();
    cy.get('[data-cy="history-list"]').children().should('contain', '0 + 3 = 3');
    cy.get('[data-cy="history-list"]').children().should('have.length', 1);
    cy.get('[data-cy="display-result"]').should('have.value', '3  ');

    cy.get('[data-cy="undo"]').click()

    cy.get('[data-cy="display-result"]').should('have.value', '0  ');
    cy.get('[data-cy="history-panel"]').click();
    cy.get('[data-cy="history-list"]').should('contain', 'History is empty!');
    cy.get('[data-cy="history-list"]').children().should('have.length', 0);
  })
})