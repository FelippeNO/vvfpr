class InventoryPage {
  visit() {
    cy.visit("https://www.saucedemo.com/");
  }

  clickAddToCartButton(quantity) {
    cy.get(".btn_inventory")
      .should("be.visible")
      .each(($button, index) => {
        if (index < quantity) {
          $button.click();
        }
      });
  }

  clickRemoveFromCartButton(quantityToRemove) {
    for (let i = 0; i < quantityToRemove; i++) {
      cy.get(".btn_secondary").should("be.visible").last().click();
    }
  }

  clickCartButton() {
    cy.get(".shopping_cart_link").should("be.visible").click();
  }

  clickCheckoutButton() {
    cy.get("#checkout").should("be.visible").click();
  }

  verifyCartItemCount(expectedCount) {
    cy.get(".shopping_cart_badge").should(
      "have.text",
      expectedCount.toString()
    );
  }

  verifyCheckoutPageIsDisplayed() {
    cy.get(".checkout_info").should("be.visible");
  }
}

export default new InventoryPage();
