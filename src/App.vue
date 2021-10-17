<template>
  <div id="app">
    <div class="container">
      <h1>Notes reading</h1>
      <MusicalRange/>
    </div>    
  </div>
</template>

<script>
import MusicalRange from './components/MusicalRange.vue'

export default {
  name: 'App',
  components: {
    MusicalRange
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.container {
  margin: 0 auto;
  max-width: 50%;
}
</style>
