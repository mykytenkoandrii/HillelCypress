/// <reference types="cypress" />
import GaragePage from "../pageObjects/GaragePage";
import ProfilePage from "../pageObjects/ProfilePage";

describe('Homework21', () => {
  beforeEach(() => {
    cy.viewport(1280, 720);
    cy.visit('/');
  });

  describe('Homework21 interception task', () => {
    beforeEach(() => {
      cy.viewport(1280, 720);
      cy.visit('/');
    });

    it('Check intercept user name in Profile', () => {
      cy.intercept('GET', '**/profile', (req) => {
        req.reply({
          statusCode: 200,
          body: {
            data:{
              name: 'Polar Bear',
              lastname: '',
              photoFilename: 'default-user.png',
              userId: 71431
            }
          }
        })
      });

      cy.login(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASS'));
      
      GaragePage.checkGaragePageUrl();

      ProfilePage.clickProfileLeftPanelButton();
      ProfilePage.checkProfilePageUrl();
      ProfilePage.verifyUsernameValue('Polar Bear');
    });
  });
});