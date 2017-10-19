<template>
  <div class="forecastday">
    <div> {{ this.getForecastDayOfWeek() }}</div>
    <img v-bind:src="this.getForecastIconUrl()"/>
    <div>
      <span>{{ this.getForecastMax() }}°C</span>
      <span>{{ this.getForecastMin() }}°C</span>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'forecastday',
    props: ['forecast'],
    methods: {
      getForecastDayOfWeek() {
        return this.forecast.date.weekday;
      },
      getForecastIconUrl() {
        return this.forecast.icon_url;
      },
      getForecastMin() {
        return this.forecast.low.celsius;
      },
      getForecastMax() {
        return this.forecast.high.celsius;
      }
    }

  }

</script>

<style scoped>
  img {
    width: 50px;
    height: 50px;
  }

  .forecastday {
    background-color: #EEEEEE;
    padding: 20px;
    border-radius: 10px;
  }

</style>
