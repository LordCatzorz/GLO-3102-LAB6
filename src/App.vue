<template>
  <div id="app">
    <weatherheader v-if="this.infoLocation" :location="this.infoLocation">
    </weatherheader>
    <forecastbar :completeforecast="this.forecast">
    </forecastbar>
  </div>
</template>

<script>
  import {GetLocationASync, GetForecastASync} from '@/api/weather.js';
  import weatherheader from '@/components/weatherheader';
  import forecastbar from '@/components/forecastbar';


  export default {
    name: 'app',
    components: {
      weatherheader,
      forecastbar
    },
    data() {
      return {
        infoLocation: undefined,
        forecast: undefined
      }
    },
    methods: {
      fetchLocation() {
        GetLocationASync().then((responseData) => {
          this.infoLocation = responseData;
        }).then(() => {
          this.fetchForecast(this.infoLocation)
        });
      },
      fetchForecast(location) {
        GetForecastASync(location).then((responseData) => {
          this.forecast = responseData;
        })
      }
    },
    created() {
      this.fetchLocation();
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

  body {
    background-color: #15c7ff;
  }
</style>
