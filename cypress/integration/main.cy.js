describe('Main page', () => {
    it('Take snapshot for main landing page', () => {
        cy.visit('http://localhost:3000/');
        cy.wait(3000);
        cy.percySnapshot('main');
    });
});
