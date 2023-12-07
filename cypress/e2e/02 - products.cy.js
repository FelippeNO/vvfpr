describe("Cenário 2: Catálogo de Produtos", () => {
  it("Deve logar, mostrar o catálogo de produtos que são 6.", () => {
    cy.visit("https://www.saucedemo.com/");
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();
    cy.url().should("eq", "https://www.saucedemo.com/inventory.html");
    cy.screenshot();
    cy.get("#react-burger-menu-btn").click();
    cy.get("#inventory_container").should("be.visible");
    cy.screenshot();
    cy.get(".inventory_item").should("have.length", 6);
    cy.get(".inventory_item").each(($product) => {
      const productName = $product.find(".inventory_item_name").text();
      const productPrice = $product.find(".inventory_item_price").text();
    });
    cy.screenshot();
  });
});
