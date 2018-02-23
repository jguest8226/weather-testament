// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import JQuery from 'jquery'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

// console.log(forecast)

// function getWeatherData () {
//   axios.get('http://api.wunderground.com/api/46d9c94c03619997/forecast/q/CA/San_Francisco.json')
//   .then(function (response) {
//     var location = JSON.parse(response.location)
//     var city = JSON.parse(response.city)
//     return value
//   })
//   .catch(function (error) {
//     console.log(error)
//   })
// return value
// }
//
// getWeatherData()
// console.log(city + ' ' + location)

// jQuery(document).ready(function ($) {
//   $.ajax({
//     url: 'http://api.wunderground.com/api/46d9c94c03619997/geolookup/conditions/q/IA/Cedar_Rapids.json',
//     dataType: 'jsonp',
//     success: function(parsed_Json) {
//   var location = parsed_json['location']['city']
//   var temp_F = parsed_json['current_observation']['temp_f']
//   alert('Current temperature in ' + location + ' is: ' + temp_f)
//     }
//   })
// })

// require('jsdom').env('', function(err, window) {
//     if (err) {
//         console.error(err)
//         return;
//     }
//
//     var $ = require('jquery')(window)
// })

// function createNode (element) {
//   return document.createElement(element) // Create the type of element you pass in the parameters
// }
// function append (parent, el) {
//   return parent.appendChild(el) // Append the second parameter(element) to the first one
// }
//
// const ul = document.getElementById('forecast') // Get the list where we will place our authors
// const url = 'http://api.wunderground.com/api/46d9c94c03619997/forecast/q/CA/San_Francisco.json' // Get 10 random users
//
// fetch(url) // Call the fetch function passing the url of the API as a parameter
// .then((resp) => resp.json()) // Transform the data into json
// .then(function (data) {
//   let forecast = data.results // Get the results
//   return forecast.map(function (forecast) { // Map through the results and for each run the code below
//     let li = createNode('li') //  Create the elements we need
//     let img = createNode('img')
//     let span = createNode('span')
//       // img.src = forecast.picture.medium;  // Add the source of the image to be the src of the img element
//     span.innerHTML = `${forecast.name.first} ${forecast.name.last}` // Make the HTML of our span to be the first and last name of our author
//     append(li, img) // Append all our elements
//     append(li, span)
//     append(ul, li)
//   })
// })
// .catch(function (error) {
//   console.log(error)
// })
//
// console.log(data)
