class FuelExpences{
    //#region Elements
    get HeaderFuelExpences(){
        return cy.contains('h1', 'Fuel expenses');
    }

    get CarDropdown(){
        return cy.get('#carSelectDropdown');
    }
    get FuelExpencesLeftPanelButton(){
        return cy.contains('.sidebar_btn', 'Fuel expenses');
    }
    //endregion
    //#region Actions
    clickFuelExpencesLeftPanelButton(){
        this.FuelExpencesLeftPanelButton.click();
    }
    //endregion
    //#region Verifications
    checkHeaderFuelExpences(){
        this.HeaderFuelExpences.should('be.visible');
    }
    verifyCarDropdownValue(expectedValue){
        this.CarDropdown.should('contain', expectedValue);
    }
    checkTableCell(rowNumber, columnNumber, expectedText){
        cy.get('tbody>tr').eq(rowNumber).find('td').eq(columnNumber).should('contain', expectedText);
    }
    //#endregion
}
export default new FuelExpences();