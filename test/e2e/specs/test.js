// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL
    var currentTime = Date()
    var inputCity = 'SEATTLE'
    var inputState = 'WA'

    browser
      //Verify Initial App View
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('.hello')
      .assert.containsText('h2', 'Welcome to Weather')
      .assert.elementCount('img', 1)
      .setValue('input[id=city]', inputCity)
      .setValue('input[id=state]', inputState)

      //Verify Extended Forecast
      .click('#extendedsubmit')
      .pause(3000)
      .assert.containsText('body', inputCity)
      .assert.containsText('body', inputState)
      .assert.elementCount('img', 9)
      .saveScreenshot(`extendedforcast${ currentTime }.png`)

      //Verify Current Forecast
      .click('#homelink')
      .pause(3000)
      .setValue('input[id=city]', inputCity)
      .setValue('input[id=state]', inputState)
      .click('#currentsubmit')
      .pause(3000)
      .assert.containsText('body', inputCity)
      .assert.containsText('body', inputState)
      .assert.elementCount('img', 2)
      .saveScreenshot(`currentforcast${ currentTime }.png`)

      .end()



  }
}
