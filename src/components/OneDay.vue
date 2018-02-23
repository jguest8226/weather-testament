<template>
  <div class="hello">
    <h3>{{ msg }}</h3>
    <h6>Created by Jonathan Guest</h6>
    <ul>
      <li><router-link to="OneDay">One Day Forecast</router-link></router-link></li>
      <li><router-link to="Extended">Extended Forecast</router-link></router-link></li>
    </ul>
    <ul>
    <li><b>{{ forecast[0].date.weekday }}, {{forecast[0].date.pretty}}</b></li>
    <li><img :src="forecast[0].icon_url" height="75" width="75"></li>
    <li><b>High:</b> {{ forecast[0].high.fahrenheit }} <b>Low:</b> {{ forecast[0].high.fahrenheit }}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Home',
  data () {
    return {
      msg: 'One Day Forecast',
      forecast: null
    }
  },
  created () {
    axios.get('http://api.wunderground.com/api/46d9c94c03619997/geolookup/conditions/q/MI/Detroit.json')
      .then(response => {
        this.forecast = response.data.forecast.simpleforecast.forecastday
        console.log(response.data.forecast.simpleforecast.forecastday)
      })
      .catch(function (response) {
        console.log(response)
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
