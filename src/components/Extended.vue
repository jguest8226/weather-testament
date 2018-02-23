<template>
  <div class="hello">
    <h3>{{ msg }}</h3>
    <h6>Created by Jonathan Guest</h6>
    <ul>
      <li><router-link to="Home">Home</router-link></router-link></li>
    </ul>
    <ul>
    <li v-for="item in forecast"><b>{{ item.title }}:</b> <img :src="item.icon_url" height="20" width="20"> {{item.fcttext}}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Extended Forecast',
      forecast: null
    }
  },
  created () {
    console.log(this.$router.params)
    this.city = this.$route.params.city
    this.state = this.$route.params.state
    axios.get(`http://api.wunderground.com/api/46d9c94c03619997/forecast/q/${this.state}/${this.city}.json`)
      .then(response => {
        this.forecast = response.data.forecast.txt_forecast.forecastday
        console.log(response.data.forecast.txt_forecast.forecastday)
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
