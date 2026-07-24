import ProductsPage from "../pages/ProductsPage";


describe("Produtos", () => {


    beforeEach(() => {

        cy.visit("/");

        cy.get('[data-test="username"]')
            .type("standard_user");

        cy.get('[data-test="password"]')
            .type("secret_sauce");

        cy.get('[data-test="login-button"]')
            .click();

    });


    it("Deve adicionar um produto ao carrinho", () => {

        ProductsPage.addBackpackToCart();

    });


    it("Deve ordenar os produtos pelo menor preço", () => {

        ProductsPage.sortByPriceLowToHigh();

    });


});
