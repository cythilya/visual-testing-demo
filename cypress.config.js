const { defineConfig } = require('cypress')

module.exports = defineConfig({
  defaultCommandTimeout: 5000,
  e2e: {
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    defaultCommandTimeout: 10000,
    slowTestThreshold: 5000,
  },
})
