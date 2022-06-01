<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Examen</router-link> |
      <router-link to="/notes">Lecture de notes</router-link> |
      <router-link to="/documentation">Documentation (en cours)</router-link>
      <!-- <router-link to="/quizz">Quizz</router-link> | -->
    </div>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
:root {
  --hover-color: rgb(231, 231, 231);
  --primary-color: #00947e;
  --primary-light-color: #00d1b2;
  --background-color: #f2f2f2;
}

/* smooth scroll */
html {
  scroll-behavior: smooth;
}

body {
  padding: 1rem;
  background: var(--background-color);
}

img {
  max-width: 100%;
}

#app {
  font-family: "Merriweather", serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* padding-top: 60px; */
  line-height: 1.65rem;
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
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: var(--primary-color); /* #42b983; */
}

ul {
  margin: 0;
  padding: 0;
}

a,
strong {
  color: var(--primary-color);
  font-weight: 700;
}

a:hover {
  color: #42b983;
}

p {
  color: #404c58;
}

.todo {
  color: black;
  background: yellow;
  padding: 1rem;
  border-radius: 3px;
}

/* text utilities */
.text-sm {
  font-size: 0.75rem;
}
</style>
