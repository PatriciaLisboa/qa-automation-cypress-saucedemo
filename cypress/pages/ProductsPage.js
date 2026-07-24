class ProductsPage {

    addBackpackToCart() {

        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
            .click();

    }


    sortByPriceLowToHigh() {

        cy.get('[data-test="product-sort-container"]')
            .select("lohi");

    }


    validateProductsPage() {

        cy.url()
            .should("include", "/inventory");

    }

}

export default new ProductsPage();
