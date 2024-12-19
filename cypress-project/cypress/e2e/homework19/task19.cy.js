/// <reference types="cypress" />
const { faker } = require("@faker-js/faker");

describe('Homework19', () => {
  beforeEach(() => {
    cy.viewport(1280, 720);
    cy.visit('/');
  });

  describe('Field "Name" validations', () => {
    it('Check "Name is required" empty field error', () => {
      cy.get('button.hero-descriptor_btn').click();
      cy.get('#signupName').focus().blur();

      cy.contains('.invalid-feedback', 'Name required').should('be.visible');
    });

    it('Check "Name is invalid" incorrect input error', () => {
      cy.get('button.hero-descriptor_btn').click();
      cy.get('#signupName').type('/#test').blur();

      cy.contains('.invalid-feedback', 'Name is invalid').should('be.visible');

      cy.get('#signupName').clear().type('this ');

      cy.contains('.invalid-feedback', 'Name is invalid').should('be.visible');

      cy.get('#signupName').clear().type('Вася');

      cy.contains('.invalid-feedback', 'Name is invalid').should('be.visible');
    });

    it('Check "Name has to be from 2 to 20 characters long" string lenght error', () => {
      cy.get('button.hero-descriptor_btn').click();
      cy.get('#signupName').type('a').blur();

      cy.contains('.invalid-feedback', 'Name has to be from 2 to 20 characters long').should('be.visible');

      cy.get('#signupName').clear().type('thisistwentycharsdata');
      
      cy.contains('.invalid-feedback', 'Name has to be from 2 to 20 characters long').should('be.visible')
    });

    it('Check "Name" field error red border-color', () => {
      cy.get('button.hero-descriptor_btn').click();
      cy.get('#signupName').type('a').blur();

      cy.get('#signupName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
      cy.get('.invalid-feedback').should('have.css', 'color', 'rgb(220, 53, 69)');
    });
  });

  describe('Field "Last name" validations', () => {
    it('Check "Last name is required" empty field error', () => {
      cy.get('button.hero-descriptor_btn').click();
      cy.get('#signupLastName').focus().blur();

      cy.contains('.invalid-feedback', 'Last name required').should('be.visible');
    });

    it('Check "Last name is invalid" incorrect input error', () => {
      cy.get('button.hero-descriptor_btn').click();
      cy.get('#signupLastName').type('/#test').blur();

      cy.contains('.invalid-feedback', 'Last name is invalid').should('be.visible');
      
      cy.get('#signupLastName').clear().type('te st');

      cy.contains('.invalid-feedback', 'Last name is invalid').should('be.visible');

      cy.get('#signupLastName').clear().type('iнput');

      cy.contains('.invalid-feedback', 'Last name is invalid').should('be.visible');
    });

    it('Check "Last name has to be from 2 to 20 characters long" string lenght error', () => {
      cy.get('button.hero-descriptor_btn').click();
      cy.get('#signupLastName').type('a').blur();

      cy.contains('.invalid-feedback', 'Last name has to be from 2 to 20 characters long').should('be.visible');

      cy.get('#signupLastName').clear().type('thisistwentycharsdata');
      
      cy.contains('.invalid-feedback', 'Last name has to be from 2 to 20 characters long').should('be.visible')
    });

    it('Check "Last name" field error red border-color', () => {
      cy.get('button.hero-descriptor_btn').click();
      cy.get('#signupLastName').type('%').blur();
      
      cy.get('#signupLastName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
      cy.get('.invalid-feedback').should('have.css', 'color', 'rgb(220, 53, 69)');
    });
  });

  describe('Field "Email" validations', () => {
    it('Check "Email is required" empty field error', () => {
      cy.get('button.hero-descriptor_btn').click();
      cy.get('#signupLastName').focus().blur();

      cy.contains('.invalid-feedback', 'Last name required').should('be.visible');
    });

    it('Check "Email is incorrect" wrong input email error', () => {
      cy.get('button.hero-descriptor_btn').click();
      cy.get('#signupEmail').type('@test').blur();

      cy.contains('.invalid-feedback', 'Email is incorrect').should('be.visible');
    });

    it('Check "Email" field error red border-color', () => {
      cy.get('button.hero-descriptor_btn').click();
      cy.get('#signupEmail').type('123456').blur();
      
      cy.get('#signupEmail').should('have.css', 'border-color', 'rgb(220, 53, 69)');
      cy.get('.invalid-feedback').should('have.css', 'color', 'rgb(220, 53, 69)');
    });
  });

  describe('Field "Password" validations', () => {
    it('Check "Password is required" empty field error', () => {
      cy.get('button.hero-descriptor_btn').click();
      cy.get('#signupPassword').focus().blur();

      cy.contains('.invalid-feedback', 'Password required').should('be.visible');
    });

    it('Check "Password has to be from..." wrong password length errors', () => {
      cy.get('button.hero-descriptor_btn').click();
      cy.get('#signupPassword').type('!sSq&m1').blur();

      cy.contains('.invalid-feedback', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter').should('be.visible');

      cy.get('#signupPassword').type('L2Xader$s');
      cy.contains('.invalid-feedback', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter').should('be.visible');
    });

    it('Check correct password length input values', () => {
      cy.get('button.hero-descriptor_btn').click();

      cy.get('#signupPassword').type('!sSq&m1L');
      cy.get('.invalid-feedback').should('not.exist');

      cy.get('#signupPassword').type('2Xader$');
      cy.get('.invalid-feedback').should('not.exist');
    });

    it('Check "Password" field error red border-color', () => {
      cy.get('button.hero-descriptor_btn').click();
      cy.get('#signupPassword').type('QWERTY').blur();
      
      cy.get('#signupPassword').should('have.css', 'border-color', 'rgb(220, 53, 69)');
      cy.get('.invalid-feedback').should('have.css', 'color', 'rgb(220, 53, 69)');
    });
  });

    describe('Field "Re-enter password" validations', () => {
    it('Check "Re-enter password is required" empty field error', () => {
      cy.get('button.hero-descriptor_btn').click();
      cy.get('#signupRepeatPassword').focus().blur();

      cy.contains('.invalid-feedback', 'Re-enter password required').should('be.visible');
    });

    it('Check "Passwords do not match" field error', () => {
      cy.get('button.hero-descriptor_btn').click();
      cy.get('#signupPassword').type('!sSq&m1L2Xader');
      cy.get('#signupRepeatPassword').type('!sSq&m1L2').blur();

      cy.contains('.invalid-feedback', 'Passwords do not match').should('be.visible');
    });

    it('Check "Re-enter password" field error red border-color', () => {
      cy.get('button.hero-descriptor_btn').click();
      cy.get('#signupRepeatPassword').type('QWERTY').blur();
      
      cy.get('#signupRepeatPassword').should('have.css', 'border-color', 'rgb(220, 53, 69)');
      cy.get('.invalid-feedback').should('have.css', 'color', 'rgb(220, 53, 69)');
    });
  });

  describe('Registration process validations', () => {
    it('Check "Register" button is inactive if one field has invalid data', () => {
      const input = faker.string.alpha(5);
      
      cy.get('button.hero-descriptor_btn').click();
      cy.get('#signupName').type(input);
      cy.get('#signupLastName').type(input);
      cy.get('#signupEmail').type(`testdata+${input}@gmail.com`);
      cy.get('#signupPassword').type('!sSq&m1L2Xader');
      cy.get('#signupRepeatPassword').type('!!!!!').blur();

      cy.contains('[type="button"]', 'Register').should('be.disabled');
    });

    it('Check Registration successfull process', () => {
      const input = faker.string.alpha(5);
      
      cy.get('button.hero-descriptor_btn').click();
      cy.get('#signupName').type(input);
      cy.get('#signupLastName').type(input);
      cy.get('#signupEmail').type(`testdata+${input}@gmail.com`);
      cy.get('#signupPassword').type('!sSq&m1L2Xader');
      cy.get('#signupRepeatPassword').type('!sSq&m1L2Xader');

      cy.contains('[type="button"]', 'Register').should('be.enabled');
      cy.contains('[type="button"]', 'Register').click();

      cy.contains('.panel-empty_message', 'You don’t have any cars in your garage').should('be.visible');
    });
  });
});
