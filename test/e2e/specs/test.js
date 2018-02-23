// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL
    var currentTime = Date()

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('.hello')
      .assert.containsText('h2', 'Welcome to Weather')
      .assert.elementCount('img', 1)
      .click('#Extended')
      .pause(3000)
      .assert.title('weather-testament')
      .assert.containsText('body','Shladurday')
      //.assert.containsText('body', 'Tuesday')
      .saveScreenshot(`extendedforcast${ currentTime }.png`)
      //.waitForElementVisible('#forecast', 5000)
      //.assert.elementCount('img', 8)
      //.assert.containsText('Thursday')
      //.assert.containsText('.ExtendedForecastView','Thursday')
      .end()

    /*var googleCommands = {
      submit: function() {
        this.api.pause(1000);
        return this.waitForElementVisible('@Extended', 1000)
          .click('@Extended')
          .waitForElementNotPresent('@Extended');
      }
  };*/


  }
}
