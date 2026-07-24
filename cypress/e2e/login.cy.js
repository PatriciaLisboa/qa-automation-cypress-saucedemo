import LoginPage from "../pages/LoginPage";


describe("Login", () => {

    let users;


    before(() => {

        cy.fixture("users")
            .then((data) => {

                users = data;

            });

    });


    it("Deve realizar login com sucesso", () => {

        LoginPage.accessLoginPage();

        LoginPage.fillUsername(
            users.standard_user.username
        );

        LoginPage.fillPassword(
            users.standard_user.password
        );

        LoginPage.clickLoginButton();

        LoginPage.validateSuccessfulLogin();

    });


    it("Não deve permitir login do usuário bloqueado", () => {

        LoginPage.accessLoginPage();

        LoginPage.fillUsername(
            users.locked_out_user.username
        );

        LoginPage.fillPassword(
            users.locked_out_user.password
        );

        LoginPage.clickLoginButton();

        LoginPage.validateErrorMessage(
            "Sorry, this user has been locked out."
        );

    });

});
