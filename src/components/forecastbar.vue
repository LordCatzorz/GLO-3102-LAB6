<template>
  <div class="forecastbar">
    <forecastday v-for="aForecast in this.getForecastArray()" :key="aForecast.period" :forecast="aForecast" >
    </forecastday>
  </div>
</template>

<script>
  import forecastday from '@/components/forecastday';

  export default {
    name: 'forecastbar',
    props: ['completeforecast'],
    components: {forecastday},
    methods: {
      getForecastArray() {
        return this.completeforecast;
      }
    }
  }
</script>

<style scoped>

  .forecastbar {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .forecastbar > * {
    margin:20px;
  }

</style>
