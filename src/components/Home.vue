<template>
  <div class="hello">
    <h2>Welcome to Weather</h2>
    <h3>{{ msg }}</h3>
    <h6>Created by Jonathan Guest</h6>
    <ul>
      <li><form id="form" onsubmit="return false">
      City: <input type="text" id="city"> State: <input type="text" id="state">
      <input type="submit" onclick="captureLocation()">
      </form></li>
      <li><router-link to="OneDay">One Day Forecast</router-link></router-link></li>
      <li id="Extended"><router-link to="Extended">Extended Forecast</router-link></router-link></li>
    </ul>
    <ul>
    <li v-for="item in forecast"><b>{{ item.title }}:</b> <img :src="item.icon_url" height="20" width="20"> {{item.fcttext}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome',
      forecast: null,
      city: null,
      state: null
    }
  },
  methods: {
    captureLocation () {
      var city = document.getElementById('city').value
      var state = document.getElementById('state').value
      alert(city + '' + state)
    }
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
