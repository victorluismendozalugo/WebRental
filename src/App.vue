<template>
  <div id="app">
    <principal hidden="hidden"/>
    <tablas/>
  </div>
</template>

<script>
import Principal from './components/Principal.vue'
import Tablas from './components/Tablas.vue'

export default {
  name: 'App',
  components: {
    Tablas,
    Principal
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
</style>
