<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/documentation">Documentation</router-link>
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
:root {
  --hover-color: rgb(231, 231, 231);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 60px;
  background: #f2f2f2;
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
