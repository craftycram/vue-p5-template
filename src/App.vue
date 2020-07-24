<template>
  <div id="app">
    <Main style="width: 100vw; height: 100vh;"></Main>
  </div>
</template>

<script>
import Main from "./views/Main.vue";

export default {

  name: 'App',
  components: {
    Main,
  }
}
</script>

<style>
#app {
  font-family: 'Source Code Pro', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #000000;
  color: #bacada;
  margin: 0px;
}
</style>
