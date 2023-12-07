class LoginPage {
  // depraecated

  visit() {
    cy.visit("https://www.saucedemo.com/"); // Altere a URL conforme necessário
  }

  fillUsername(username) {
    cy.get("#user-name").should('be.visible').type(username); // Use o seletor CSS apropriado
  }

  fillPassword(password) {
    cy.get("#password").should('be.visible').type(password); // Use o seletor CSS apropriado
  }

  clickLoginButton() {
    cy.get('#login-button').should('be.visible').click(); // Use o seletor CSS apropriado
  }
}

export default new LoginPage();
