describe('Main page', () => {
  it('Take snapshot for main landing page', () => {
    cy.visit('https://www.cythilya.tw/about/');
    cy.wait(3000);
    cy.percySnapshot('about');
  });
});
