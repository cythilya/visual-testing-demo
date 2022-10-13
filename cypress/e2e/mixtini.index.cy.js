describe('Mixtini index page', () => {
  it('Take snapshot', () => {
    cy.visit('https://mixtini-co.web.app/');
    cy.wait(3000);
    cy.percySnapshot('mixtini-index');
  });

  it('Check elements status', () => {
    cy.get('#intro').should('exist');
  });
});