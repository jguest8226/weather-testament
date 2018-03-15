// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL
    var currentdate = new Date();
    var today = currentdate.getDay();
    var inputCity = 'Seattle'
    var inputState = 'WA'

    var weekday = new Array(7);
    weekday[0] =  "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    var day1value = today
    var day2value = null
    var day3value = null
    var day4value = null

    //Adjust Days
    if (day1value === 0){
      day2value = day1value + 1
      day3value = day1value + 2
      day4value = day1value + 3
    }
    else if (day1value === 1){
      day2value = day1value + 1
      day3value = day1value + 2
      day4value = day1value + 3
    }
    else if (day1value === 2){
      day2value = day1value + 1
      day3value = day1value + 2
      day4value = day1value + 3
    }
    else if (day1value === 3){
      day2value = day1value + 1
      day3value = day1value + 2
      day4value = day1value + 3
    }
    else if (day1value === 4){
      day2value = day1value + 1
      day3value = day1value + 2
      day4value = day1value - 4
    }
    else if (day1value === 5){
      day2value = day1value + 1
      day3value = day1value - 5
      day4value = day1value - 4
    }
    else if (day1value === 6){
      day2value = day1value - 6
      day3value = day1value - 5
      day4value = day1value - 4
    }

    var day1 = weekday[day1value]
    var day2 = weekday[day2value]
    var day3 = weekday[day3value]
    var day4 = weekday[day4value]

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
      .pause(2000)
      .assert.containsText('body', inputCity)
      .assert.containsText('body', inputState)
      .assert.elementCount('img', 9)
      .assert.containsText('body', day1)
      .assert.containsText('body', day2)
      .assert.containsText('body', day3)
      .assert.containsText('body', day4)
      .saveScreenshot(`extendedforcast${ currentdate }.png`)

      //Verify Current Forecast
      .click('#homelink')
      .pause(2000)
      .setValue('input[id=city]', inputCity)
      .setValue('input[id=state]', inputState)
      .click('#currentsubmit')
      .pause(2000)
      .assert.containsText('body', inputCity)
      .assert.containsText('body', inputState)
      .assert.elementCount('img', 2)
      .saveScreenshot(`currentforcast${ currentdate }.png`)

      .end()



  }
}
