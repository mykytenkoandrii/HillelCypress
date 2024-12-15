const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
      //baseUrl: "https://qauto.forstudy.space/",

      retries: {
        runMode: 2,
        openMode: 1
      },

      defaultCommandTimeout: 10000,
      viewportHeight: 1080,
      viewportWidth: 1920,
      screenshotsFolder: "cypress/screenshots",
      screenshotOnRunFailure: true,
      video: true,
      videosFolder: "cypress/videos"
    },
  });