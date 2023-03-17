const getWorldParams = () => {
    const params = {
      foo: 'bar',
    };
  
    return params;
  };
 const config ={
    allScriptsTimeout: 11000,
  autoStartStopServer: true,

  multiCapabilities: [
    {
      browserName: "chrome"
    }
  ],


  framework: "custom",
  frameworkPath: require.resolve("protractor-cucumber-framework"),
  //specs: ["./e2e/**/*.feature"],
  specs: ["features/accessing_landing_page.feature"],
    cucumberOpts: {
        //require: "./e2e/**/*.steps.ts",
        require: "src/steps/general.steps.js",
        tags: [],
        strict: true,
        format: ["pretty"],
        "dry-run": false,
        compiler: []
      },
    
}
 
 module.exports =config