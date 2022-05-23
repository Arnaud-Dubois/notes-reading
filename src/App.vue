<template>
  <div id="app">
    <div class="container">
      <div>
        <Documentation />
      </div>
      <h1>Notes reading</h1>
      <MusicalRange />
    </div>
  </div>
</template>

<script>
import MusicalRange from "./components/MusicalRange.vue";
import Documentation from "./components/Documentation.vue";

export default {
  name: "App",
  components: {
    MusicalRange,
    Documentation,
  },
};
</script>

<style>
:root {
  --hover-color: rgb(231, 231, 231);
}

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

@media screen and (max-width: 640px) {
  .container {
    max-width: 100%;
  }
}
</style>
