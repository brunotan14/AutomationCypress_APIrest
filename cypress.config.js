const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'qn1yft',
  e2e: {
    reporter: 'cypress-mochawesome-reporter',
    baseUrl: 'https://api.restful-api.dev',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
