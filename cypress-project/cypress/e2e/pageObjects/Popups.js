class Popups{
    //#region Elements
    //Log In popup Home page
    get LoginPopupEmailField(){
        return cy.get('#signinEmail');
    }
    get LoginPopupPasswordField(){
        return cy.get('#signinPassword');
    }
    get LoginButton(){
        return cy.contains('button', 'Login');
    }
    //Add Car popup 'Garage' page
    get AddCarPopupBrandDropdown(){
        return cy.get('#addCarBrand');
    }
    get AddCarPopupModelDropdown(){
        return cy.get('#addCarModel');
    }
    get AddCarPopupMileageField(){
        return cy.get('#addCarMileage');
    }
    get FooterAddButton(){
        return cy.get('.modal-content').contains('button', 'Add');
    }
    //Add an expence popup 'Garage' page
    get AddExpencePopupMileageField(){
        return cy.get('#addExpenseMileage');
    }
    get AddExpencePopupLitersField(){
        return cy.get('#addExpenseLiters');
    }
    get AddExpencePopupTotalCostField(){
        return cy.get('#addExpenseTotalCost');
    }
    //#endregion

    //#region Actions
    //log in popup 
    loginPopupInputEmailField(email){
        this.LoginPopupEmailField.type(email);
    }
    loginPopupInputPasswordField(password){
        this.LoginPopupPasswordField.type(password);
    }
    clickLoginButton(){
        this.LoginButton.click();
    }
    //'Add Car' popup 'Garage' page
    addCarPopupSelectCarDropdown(car){
        this.AddCarPopupBrandDropdown.select(car);
    }
    addCarPopupSelectModelDropdown(model){
        this.AddCarPopupModelDropdown.select(model);
    }
    addCarPopupInputMileageField(mileage){
        this.AddCarPopupMileageField.type(mileage);
    }
    clickAddFooterButton(){
        this.FooterAddButton.click();
    }
    //'Add an expence' popup 'Garage' page
    addExpenceInputMileageField(input){
        this.AddExpencePopupMileageField.clear().type(input);
    }
    addExpenceInputLitersField(input){
        this.AddExpencePopupLitersField.type(input);
    }
    addExpenceInputTotalCostField(input){
        this.AddExpencePopupTotalCostField.type(input);
    }
    //#endregion

    //#region Verifications
    //Add Car popup 'Garage' page
    checkFooterAddButtonEnabled(){
        this.FooterAddButton.should('be.enabled');
    }
    //#endregion
}
export default new Popups()