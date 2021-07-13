<template>
  <div id="app">
    <!-- <principal hidden="hidden" />
    <tablas /> -->
    <cards :arr="arr" :load="loading" />
  </div>
</template>

<script>
// import Principal from "./components/Principal.vue";
// import Tablas from "./components/Tablas.vue";
import Cards from "./components/Cards.vue";

export default {
  name: "App",
  components: {
    // Tablas,
    // Principal,
    Cards,
  },
  data() {
    return {
      arr: [],
      loading: false,
    };
  },
  mounted() {
    this.loading = true
    this.getProds();
  },
  methods: {
    getProds() {
      var datos = {
        productoID: 0,
        productoSucID: 1,
      };
      http
        .postLoader("catalogo/productos", datos)
        .then((response) => {
          this.arr = response.data.data.data;
          console.log(this.arr)
          this.loading = false
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
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
