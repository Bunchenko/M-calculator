describe('History', () => {
  it('updates and clears the history, and dropdown works as expected', () => {
    cy.visit('/');

    cy.get('[data-cy="digit-9"]').click();
    cy.get('[data-cy="operation-*"]').click();
    cy.get('[data-cy="digit-5"]').click();
    cy.get('[data-cy="equals"]').click();

    cy.get('[data-cy="history-panel"]').click();
    cy.get('[data-cy="history-list"]').should('exist');
    cy.get('[data-cy="history-list"]').children().should('contain', '9 * 5 = 45');
    cy.get('[data-cy="history-list"]').children().should('have.length', 1);

    cy.get('body').click();
    cy.get('[data-cy="history-list"]').should('not.to.exist');

    cy.get('[data-cy="digit-8"]').click();
    cy.get('[data-cy="operation-/"]').click();
    cy.get('[data-cy="digit-4"]').click();
    cy.get('[data-cy="equals"]').click();

    cy.get('[data-cy="history-panel"]').click();
    cy.get('[data-cy="history-list"]').should('exist');
    cy.get('[data-cy="history-list"]').children().should('contain', '8 / 4 = 2');
    cy.get('[data-cy="history-list"]').children().should('have.length', 2);

    cy.get('[data-cy="clear-history"]').click();

    cy.get('[data-cy="history-panel"]').click();
    cy.get('[data-cy="history-list"]').should('exist');
    cy.get('[data-cy="history-list"]').should('contain', 'History is empty!');
    cy.get('[data-cy="history-list"]').children().should('have.length', 0);
  })
})