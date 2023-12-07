import InventoryPage from "../support/pages/InventoryPage";
import LoginPage from "../support/pages/LoginPage";

describe("Cenário 4: Finalização da Compra", () => {
  beforeEach(() => {
    LoginPage.visit();
    cy.login("standard_user", "secret_sauce");
  });

  it("Deve adicionar itens no carrinho, e fazer chackout corretamente.", () => {
    InventoryPage.clickAddToCartButton(5);
    InventoryPage.verifyCartItemCount(5);
    InventoryPage.clickCartButton();
    cy.screenshot();
    cy.scrollToTop();
    InventoryPage.clickCheckoutButton();
    InventoryPage.verifyCheckoutPageIsDisplayed();
    cy.screenshot();
    cy.get('[data-test="firstName"]').type("felippe");
    cy.get('[data-test="lastName"]').type("andreis");
    cy.get('[data-test="postalCode"]').type("000005");
    cy.screenshot();
    cy.get('[data-test="continue"]').click();
    cy.screenshot();
    cy.url().should("include", "checkout-step-two.html");
    cy.screenshot();
    cy.get('[data-test="finish"]').click();
    cy.screenshot();
  });
});
