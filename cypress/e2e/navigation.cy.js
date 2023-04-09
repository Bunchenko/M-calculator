describe('Navigation', () => {
  it('navigates to class components page', () => {
    cy.visit('/');

    cy.get('[data-cy="navlink-CC"]').click();

    cy.get('[data-cy="navlink-CC"]').should('have.class', 'active');
    cy.url().should('include', '/class');
  })

  it('navigates to functional components page', () => {
    cy.visit('/');

    cy.get('[data-cy="navlink-FC"]').click();

    cy.get('[data-cy="navlink-FC"]').should('have.class', 'active');
    cy.url().should('include', '/functional');
  })
})