class CheckoutPage {


    fillFirstName(name) {

        cy.get('[data-test="firstName"]')
            .type(name);

    }


    fillLastName(lastName) {

        cy.get('[data-test="lastName"]')
            .type(lastName);

    }


    fillPostalCode(postalCode) {

        cy.get('[data-test="postalCode"]')
            .type(postalCode);

    }


    clickContinueButton() {

        cy.get('[data-test="continue"]')
            .click();

    }


}

export default new CheckoutPage();
