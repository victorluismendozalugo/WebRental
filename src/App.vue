<template>
  <div id="app">
    <principal hidden="hidden"/>
    <tablas/>
    <cards/>
  </div>
</template>

<script>
import Principal from './components/Principal.vue'
import Tablas from './components/Tablas.vue'
import Cards from './components/Cards.vue'

export default {
  name: 'App',
  components: {
    Tablas,
    Principal,
    Cards
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
