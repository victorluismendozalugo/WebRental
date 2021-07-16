<template>
  <div data-app id="app">
    <v-container grid-list-md text-xs-center fluid>
      <v-layout row wrap>
        <v-flex xs12>
          <combos></combos>
          <cards :productos="productos" />
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Cards from "./components/Cards.vue";
import Combos from "./components/Combos.vue";
import servicioProductos from "./services/servicio-productos.js";
import servicioCatalogos from "./services/servicio-catalogos.js";
export default {
  name: "App",
  components: {
    Combos,
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
      servicioProductos
        .productosCon(datos)
        .then(async (r) => {
          if (r.value) {
            this.productos = r.data.data;
          } else {
            await this.$msg.warning(r.message);
          }
        })
        .catch(async (r) => {
          await this.$msg.error("El servicio no se encuentra disponible");
        });
    },
  },
};
</script>

<style>
.v-application--wrap {
  min-height: 0vh !important;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
