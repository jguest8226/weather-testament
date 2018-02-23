<template>
  <div class="hello">
    <h3>{{ msg }}</h3>
    <ul>
      <li><router-link to="Home">Home</router-link></router-link></li>
    </ul>
    <ul>
      <li><img :src="forecast.icon_url" height="80" width="80"></li>
      <li><b>{{ forecast.weather }}</b></li>
      <li><b>Temperature:</b> {{ forecast.temp_f }} F</li>
      <li><b>Feels Like:</b> {{ forecast.feelslike_f }} F</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Current Weather',
      forecast: null,
      city: null,
      state: null,
      image: null
    }
  },
  created () {
    console.log(this.$router.params)
    this.city = this.$route.params.city
    this.state = this.$route.params.state
    axios.get(`http://api.wunderground.com/api/46d9c94c03619997/conditions/q/${this.state}/${this.city}.json`)
      .then(response => {
        this.forecast = response.data.current_observation
        this.image = response.data.current_observation.icon_url
        console.log(response.data.current_observation)
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
