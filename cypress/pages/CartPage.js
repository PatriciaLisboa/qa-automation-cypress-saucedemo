class CartPage {


    openCart() {

        cy.get('[data-test="shopping-cart-link"]')
            .click();

    }


    removeProduct() {

        cy.get('[data-test="remove-sauce-labs-backpack"]')
            .click();

    }


}

export default new CartPage();
