class LoginPage {

    accessLoginPage() {
        cy.visit("/");
    }

    fillUsername(username) {
        cy.get('[data-test="username"]')
            .type(username);
    }

    fillPassword(password) {
        cy.get('[data-test="password"]')
            .type(password);
    }

    clickLoginButton() {
        cy.get('[data-test="login-button"]')
            .click();
    }

    validateSuccessfulLogin() {
        cy.url()
            .should("include", "/inventory");
    }

    validateErrorMessage(message) {
        cy.get('[data-test="error"]')
            .should("contain", message);
    }

}

export default new LoginPage();
