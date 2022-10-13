describe('About page', () => {
  it('Take snapshot for my about page', () => {
    cy.visit('https://www.cythilya.tw/about/');
    cy.percySnapshot('about');
  });

  it('Check elements status', () => {
    cy
      .get('.page-title')
      .should('exist');
    cy
      .get('.sidebar-nav-item.active')
      .should('have.text', '關於我');
  });
});