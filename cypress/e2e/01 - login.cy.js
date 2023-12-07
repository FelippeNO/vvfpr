describe("Cenário 1: Login e Navegação", () => {
  it("Deve logar com as credenciais corretas e mostrar o inventory container.", () => {
    cy.visit("www.saucedemo.com");
    cy.screenshot();
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");
    cy.screenshot();
    cy.get("#login-button").click();
    cy.url().should("eq", "https://www.saucedemo.com/inventory.html");
    cy.screenshot();
    cy.get("#react-burger-menu-btn").click();
    cy.get("#inventory_container").should("be.visible");

    cy.get("#inventory_container").should(($container) => {
      const position = $container.position();
      expect(position.top).to.be.closeTo(100, 15);
      expect(position.left).to.be.closeTo(0, 15);
    });
    cy.screenshot();
  });
});
