const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  video:true,
  projectId: 'uv4bn7',
 
  "experimentalStudio": true,
  "chromeWebSecurity": true,
  defaultCommandTimeout: 10000,
   pageLoadTimeout: 80000,
   reporter: 'cypress-mochawesome-reporter', //for HTML reports
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on); //for HTML reports
      on('task',{

        log(message){
        
        console.log(message)
        
        
        
      return null
        
        },
        
      })
    },
  },
});
