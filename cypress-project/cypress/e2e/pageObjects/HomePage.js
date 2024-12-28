class HomePage{
    // #region Elements
    get signInButton(){
        return cy.get('button.header_signin');
    }
    get addCarButton(){
        return cy.get()
    }
    // #endregion
    // #region Actions
    clickSignInButton(){
        this.signInButton.click();
    }
    // #endregion

    //#region Verifications
    
    //#endregion
}

export default new HomePage()