<template>
  <div data-app id="app">
    <v-container grid-list-md text-xs-center fluid>
      <v-layout row wrap>
        <v-flex xs12>
          <combos></combos>
          <v-row>
            <v-col>
              <v-btn v-on:click="getProdsFitrados()" elevation="12" x-large>
                <v-icon dark>mdi-cloud-search</v-icon>&nbsp; Buscar
              </v-btn>
              <v-btn v-on:click="limpiarBusqueda()" elevation="12" x-large>
                <v-icon dark>mdi-autorenew</v-icon>&nbsp; Nueva busqueda
              </v-btn>
            </v-col>
          </v-row>
          <cards :productos="productos" />
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Cards from "@/components/Cards.vue";
import Combos from "@/components/Combos.vue";
import servicioProductos from "@/services/servicio-productos.js";
export default {
  name: "Home",
  components: {
    Combos,
    Cards,
  },
  data() {
    return {
      prod: {},
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
    getProdsFitrados() {
      this.productos = [];
      var datos = {
        ProdColorID: this.$store.state.colorID,
        ProdEstiloID: this.$store.state.estiloID,
        ProdTallaID: this.$store.state.tallaID,
        ProdTemporadaID: this.$store.state.temporalidadID,
        ProdTerminadoID: this.$store.state.terminadoID,
        ProductoSucID: 1,
      };
      servicioProductos
        .productosFiltros(datos)
        .then(async (r) => {
          if (r.value) {
            this.productos = r.data.data;
            if (this.productos.length==0) {
               await this.$msg.warning("No se encontraron productos con las caracteristicas proporcionadas");
            }
          } else {
            await this.$msg.warning(r.message);
          }
        })
        .catch(async (r) => {
          await this.$msg.error("El servicio no se encuentra disponible");
        });
    },
    limpiarBusqueda() {
      window.history.go();
      this.$store.commit("setColor", 0);
      this.$store.commit("setEstilo", 0);
      this.$store.commit("setTalla", 0);
      this.$store.commit("setTempo", 0);
      this.$store.commit("setTerm", 0);
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