const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
      baseUrl: "https://guest:welcome2qauto@qauto2.forstudy.space/",

      retries: {
        runMode: 2,
      },
      reporter: 'cypress-mochawesome-reporter',
      defaultCommandTimeout: 10000,
      viewportHeight: 1080,
      viewportWidth: 1920,
      screenshotsFolder: "cypress/screenshots",
      screenshotOnRunFailure: true,
      video: true,
      videosFolder: "cypress/videos",
    env:{
      USER_EMAIL: 'testdata+hillel2@gmail.com',
      USER_PASS: '!sSq&m1L2Xader'
    }
  },
  });