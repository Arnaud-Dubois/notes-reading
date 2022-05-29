<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Examen</router-link> |
      <router-link to="/notes">Lecture de notes</router-link> |
      <router-link to="/documentation">Documentation (en cours)</router-link>
      <!-- <router-link to="/quizz">Quizz</router-link> | -->
    </div>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>

export default {
  name: "App",
};
</script>

<style>

/* smooth scroll */
html {
	scroll-behavior: smooth;
}


:root {
  --hover-color: rgb(231, 231, 231);
}

body {
  background: #f2f2f2;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 60px;
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

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
