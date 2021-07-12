<template>
  <div>
    <v-app id="inspire">
      <v-card>
        <v-card-title>
          Listado
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            append-icon="search"
            label="Buscar"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>
        <v-data-table :headers="headers" :items="productos" :search="search">
          <template slot="items" slot-scope="props">
            <td>{{ props.item.name }}</td>
            <td class="text-xs-right">{{ props.item.productoDescCorta }}</td>
            <td class="text-xs-right">{{ props.item.productoID }}</td>
          </template>
          <v-alert slot="no-results" :value="true" color="error" icon="warning">
            Su búsqueda para "{{ search }}" no encontró resultados.
          </v-alert>
        </v-data-table>
      </v-card>
    </v-app>
  </div>
</template>
  
  <script>
export default {
  name: "Tablas",
  data() {
    return {
      search: "",
      headers: [
        {
          text: "Nombre producto",
          align: "left",
          sortable: false,
          value: "productoDescCorta",
        },
        { text: "Clave Producto", value: "productoID" },
      ],
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
  }
};
</script>
  
  <style>
</style>