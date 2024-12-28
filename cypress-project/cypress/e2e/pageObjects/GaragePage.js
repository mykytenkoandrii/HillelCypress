class GaragePage{
    // #region Elements
    get GarageHeader(){
        return cy.contains('h1', 'Garage');
    }
    get AddCarButton(){
        return cy.contains('button', 'Add car');
    }
    // #endregion

    // #region Actions
    clickAddCarButton(){
        this.AddCarButton.click();
    }

    clickAddFuelExpenceButtonWithid(id){
        cy.get('.car_add-expense').eq(id).click();
    }
    // #endregion

    // #region Verifications
    checkGaragePageUrl(){
        cy.url().should('contain', '/garage');
    }
    checkGarageHeaderVisible(){
        this.GarageHeader.should('be.visible');
    }
    verifyCarHeaderTextWithId(id, expectedText){
        cy.get('.car_name.h2').eq(id).should('have.text', expectedText);
    }
    verifyCarMilesValueWithId(id, expectedText){
        cy.get('[type=number]').eq(id).should('have.value', expectedText);
    }
    // #endregion
}

export default new GaragePage()