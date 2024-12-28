/// <reference types="cypress" />
import GaragePage from "../pageObjects/GaragePage";
import Popups from "../pageObjects/Popups";
import FuelExpences from "../pageObjects/FuelExpences";

const { faker } = require("@faker-js/faker");

describe('Homework20', () => {
  beforeEach(() => {
    cy.viewport(1280, 720);
    cy.visit('/');
  });

  describe('Homework20 tests', () => {
    it('Check user successfull login', () => {
      cy.login(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASS'));
      
      GaragePage.checkGaragePageUrl();
      GaragePage.checkGarageHeaderVisible();
    });

    it('Check "Add" button enabled with correct input data', () => {
      cy.login(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASS')); 
      GaragePage.clickAddCarButton();

      Popups.addCarPopupSelectCarDropdown('Porsche');
      Popups.addCarPopupSelectModelDropdown('Panamera');
      Popups.addCarPopupInputMileageField('56789');
      Popups.checkFooterAddButtonEnabled();
    });

    it('Check user can add car on Garage page', () => {
      cy.login(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASS')); 
      GaragePage.clickAddCarButton();

      Popups.addCarPopupSelectCarDropdown('Porsche');
      Popups.addCarPopupSelectModelDropdown('Panamera');
      Popups.addCarPopupInputMileageField('56789');
      Popups.clickAddFooterButton();

      GaragePage.verifyCarHeaderTextWithId(0, 'Porsche Panamera');
      GaragePage.verifyCarMilesValueWithId(0, '56789');
    });

    it('Check user navigates to "Fuel expensces page" with last added car', () => {
      cy.login(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASS')); 
      GaragePage.clickAddCarButton();

      Popups.addCarPopupSelectCarDropdown('Audi');
      Popups.addCarPopupSelectModelDropdown('A8');
      Popups.addCarPopupInputMileageField('1111');
      Popups.clickAddFooterButton();

      GaragePage.verifyCarHeaderTextWithId(0, 'Audi A8');

      FuelExpences.clickFuelExpencesLeftPanelButton();
      FuelExpences.checkHeaderFuelExpences();
      FuelExpences.verifyCarDropdownValue('Audi A8');
    });

    it('Check user can add an expence for just added car', () => {
      cy.login(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASS')); 
      GaragePage.clickAddCarButton();

      Popups.addCarPopupSelectCarDropdown('BMW');
      Popups.addCarPopupSelectModelDropdown('X5');
      Popups.addCarPopupInputMileageField('100');
      Popups.clickAddFooterButton();

      GaragePage.clickAddFuelExpenceButtonWithid(0);
      
      Popups.addExpenceInputMileageField('200');
      Popups.addExpenceInputLitersField('10');
      Popups.addExpenceInputTotalCostField('5');
      Popups.clickAddFooterButton();

      FuelExpences.checkTableCell(0, 1,'200');
      FuelExpences.checkTableCell(0, 2,'10L');
      FuelExpences.checkTableCell(0, 3,'5.00 USD');
    });
  });
});
