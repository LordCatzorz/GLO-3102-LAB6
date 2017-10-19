<template>
  <div>
    <h1>
      <span>Weather.js</span>
    </h1>
    <span>{{ this.extractLocation() }}</span>
  </div>
</template>

<script>
  export default {
    name: 'weatherheader',
    props: ['location'],
    methods: {
      extractLocation() {
        return `${this.location.city}, ${this.location.state}`;
      }
    }
  }

</script>

<style>

</style>
