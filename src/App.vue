<template>
  <div id="app">
    <v-container grid-list-md text-xs-center fluid>
      <v-layout row wrap>
        <v-flex xs12>
          <cards :productos="productos" />
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Cards from "./components/Cards.vue";

export default {
  name: "App",
  components: {
    Cards,
  },
  data() {
    return {
      productos: [],
    };
  },
  mounted() {
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
          this.productos = response.data.data.data;
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
