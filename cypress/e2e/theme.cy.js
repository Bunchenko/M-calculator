describe('Theme', () => {
  it('should toggle themes as expected', () => {
    cy.visit('/');

    cy.get('[data-cy="theme"]').click();

    cy.get('#root').should('have.css', 'background-color', 'rgb(41, 44, 53)');
    cy.get('[data-cy="app-name"]').should('have.css', 'color', 'rgb(255, 255, 255)');
    cy.get('[data-cy="history-panel"]').should('have.css', 'background-color', 'rgb(41, 44, 53)');
    cy.get('[data-cy="history-panel"]').should('have.css', 'color', 'rgb(255, 255, 255)');

    cy.get('[data-cy="history-panel"]').click()
    cy.get('[data-cy="history-list"]').should('have.css', 'background-color', 'rgb(41, 44, 53)');
    cy.get('[data-cy="history-list"]').should('have.css', 'color', 'rgb(255, 255, 255)');

    cy.get('[data-cy="navlink-FC"]').click();
    cy.get('[data-cy="navlink-FC"] button').should('have.css', 'background-color', 'rgb(255, 165, 0)');

    cy.get('[data-cy="theme"]').click();

    cy.get('#root').should('have.css', 'background-color', 'rgb(255, 255, 255)');
    cy.get('[data-cy="app-name"]').should('have.css', 'color', 'rgb(0, 0, 0)');
    cy.get('[data-cy="history-panel"]').should('have.css', 'background-color', 'rgb(255, 255, 255)');
    cy.get('[data-cy="history-panel"]').should('have.css', 'color', 'rgb(0, 0, 0)');

    cy.get('[data-cy="history-panel"]').click()
    cy.get('[data-cy="history-list"]').should('have.css', 'background-color', 'rgb(255, 255, 255)');
    cy.get('[data-cy="history-list"]').should('have.css', 'color', 'rgb(0, 0, 0)');

    cy.get('[data-cy="navlink-FC"] button').should('have.css', 'background-color', 'rgb(255, 255, 255)');
  })
})