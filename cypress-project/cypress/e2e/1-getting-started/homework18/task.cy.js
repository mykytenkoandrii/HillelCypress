/// <reference types="cypress" />

describe("Homework18", () => {
  beforeEach(() => {
    cy.viewport(1024, 720);
    cy.visit("https://qauto.forstudy.space", {
      auth: {
        username: "guest",
        password: "welcome2qauto",
      },
    });
  });

  describe('Header elements visibility checkings', () => {   
    it('Check header logo visibility', () => {  
      cy.get('a.header_logo').as('headerLogo');
      cy.get('@headerLogo').should('be.visible');
    });

    it('Check header "Home" button visibility', () => {
      cy.contains('.btn.header-link', 'Home').as('headerHomeButton');
      cy.get('@headerHomeButton').should('be.visible');
    });

    it('Check header "About" button visibility', () => {
      cy.contains('.btn.header-link', 'About').as('headerHomeButton');
      cy.get('@headerHomeButton').should('be.visible');
    });

    it('Check header "Contacts" button visibility', () => {
      cy.contains('.btn.header-link', 'Contacts').as('headerHomeButton');
      cy.get('@headerHomeButton').should('be.visible');
    });
  });

  describe('Footer elements checkings', () => {
    it('Check Facebook icon visibility and link', () => {
      cy.get('a[href="https://www.facebook.com/Hillel.IT.School"]').as('facebookLink');
      cy.get('span[class*="icon-facebook"]').as('facebookIcon');

      cy.get('@facebookLink').should('be.visible');
      cy.get('@facebookIcon').should('be.visible');
    })

    it('Check Telegram icon visibility and link', () => {
      cy.get('a[href="https://t.me/ithillel_kyiv"]').as('telegramLink');
      cy.get('span[class*="icon-telegram"]').as('telegramIcon');

      cy.get('@telegramLink').should('be.visible');
      cy.get('@telegramIcon').should('be.visible');
    })

    it('Check Youtube icon visibility and link', () => {
      cy.get('a[href="https://www.youtube.com/user/HillelITSchool?sub_confirmation=1"]').as('youtubeLink');
      cy.get('span[class*="icon-youtube"]').as('youtubeIcon');

      cy.get('@youtubeLink').should('be.visible');
      cy.get('@youtubeIcon').should('be.visible');
    })

    it('Check Instagram icon visibility and link', () => {
      cy.get('a[href="https://www.instagram.com/hillel_itschool/"]').as('instaLink');
      cy.get('span[class*="icon-instagram"]').as('instaIcon');

      cy.get('@instaLink').should('be.visible');
      cy.get('@instaIcon').should('be.visible');
    })

    it('Check LinkedIn icon visibility and link', () => {
      cy.get('a[href="https://www.linkedin.com/school/ithillel/"]').as('linkedinLink');
      cy.get('span[class*="icon-linkedin"]').as('linkedinIcon');

      cy.get('@linkedinLink').should('be.visible');
      cy.get('@linkedinIcon').should('be.visible');
    })

    it('Check footer main website link', () => {
      cy.get('[href="https://ithillel.ua"]').as('footerMainWebsiteLink');
      cy.contains('.contacts_link', 'ithillel.ua').as('footerMainWebsite');

      cy.get('@footerMainWebsiteLink').should('be.visible');
      cy.get('@footerMainWebsite').should('be.visible');
    })

    it('Check footer support link', () => {
      cy.get('[href="mailto:developer@ithillel.ua"]').as('footerSupportMailLink');
      cy.contains('.contacts_link', 'support@ithillel.ua').as('footerSupportMail');

      cy.get('@footerSupportMailLink').should('be.visible');
      cy.get('@footerSupportMail').should('be.visible');
    })
  })
})
