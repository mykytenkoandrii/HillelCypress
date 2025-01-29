class ProfilePage{
    // #region Elements
    get ProfileHeader(){
        return cy.contains('h1', 'Profile');
    }
    get UsernameRow(){
        return cy.get('p.profile_name');
    }
    get ProfileLeftPanelButton(){
        return cy.contains('.sidebar_btn', 'Profile');
    }
    // #endregion

    // #region Actions
    clickProfileLeftPanelButton(){
        this.ProfileLeftPanelButton.click();
    }
    // #endregion

    // #region Verifications
    checkProfilePageUrl(){
        cy.url().should('contain', '/profile');
    }
    checkProfileHeaderVisible(){
        this.ProfileHeader.should('be.visible');
    }
    verifyUsernameValue(expectedValue){
        this.UsernameRow.should('have.text', expectedValue);
    }
    // #endregion
}

export default new ProfilePage()