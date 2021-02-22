describe('app-name', () => {
  beforeEach(() => cy.visit('/iframe.html?id=appcomponent--primary'));

  it('should render the component', () => {
    cy.get('workspacename-root').should('exist');
  });
});
