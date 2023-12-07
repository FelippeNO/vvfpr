import InventoryPage from "../support/pages/InventoryPage";
import LoginPage from "../support/pages/LoginPage";

describe("Cenário 3: Adição de Produtos ao Carrinho", () => {
  beforeEach(() => {
    LoginPage.visit();
    cy.login("standard_user", "secret_sauce");
  });

  it("Deve adicionar itens no carrinho, verificar contagem e remover item.", () => {
    InventoryPage.clickAddToCartButton(2); // Adiciona 2 itens.
    cy.screenshot();
    InventoryPage.verifyCartItemCount(2); // Verifica o count de itens.
    InventoryPage.clickRemoveFromCartButton(1); // Remove 1 item.
    cy.screenshot();
    InventoryPage.verifyCartItemCount(1); // VVerifica o count de itens.
    InventoryPage.clickCartButton(); // Vai para o carrinho.
    cy.screenshot();
    cy.scrollToTop();
  });
});
