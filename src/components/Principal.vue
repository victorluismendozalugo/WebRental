<template>
  <div class="container">
    <b-modal id="modal-registro" size="lg" title="Large Modal">
      <div class="form-group row">
        <div class="col-xs">
          <label>Clave prod/serv</label>
          <input
            type="number"
            class="form-control"
            name="Clave"
            readonly="true"
          />
        </div>
      </div>
    </b-modal>

    <b-button v-b-modal.modal-registro variant="warning"
      ><i class="far fa-plus-square"></i> &nbsp;Registrar nuevo
    </b-button>
    <div class="form-group row">
      <div class="col-sm">
        <b-form-input
          class="form-control"
          v-model="filter"
          type="search"
          id="filterInput"
          placeholder="Escribe para buscar"
        ></b-form-input>
      </div>

      <div class="col-sm float-right">
        <b-form-select
          class="form-control"
          v-model="perPage"
          id="perPageSelect"
          size="sm"
          :options="pageOptions"
        >
        </b-form-select>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title">Listado de productos</h4>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <b-table
                class="table table-hover table-striped"
                hover
                :items="this.productos"
                :fields="fields"
                :filter="filter"
                :filterIncludedFields="filterOn"
                @filtered="onFiltered"
                @row-clicked="editarRegistro"
                :per-page="perPage"
                :current-page="currentPage"
                :busy="isBusy"
                small
              >
                <template v-slot:table-busy>
                  <div class="text-center text-warning my-2">
                    <b-spinner class="align-middle"></b-spinner>
                    <strong>Cargando productos...</strong>
                  </div>
                </template>
              </b-table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="form-group row">
      <div class="col-sm-4">Total de registros: {{ rows }}</div>
      <div class="col-sm-4">Página actual: {{ currentPage }}</div>
      <div class="col-sm-4 pagination">
        <b-pagination
          class="pagination pagination-primary"
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
          aria-controls="my-table"
        ></b-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Principal",
  data() {
    return {
      isBusy: false,
      perPage: 10,
      pageOptions: [5, 10, 15, 30, 50, 100],
      currentPage: 1,
      fields: [
        {
          key: "productoCod",
          label: "Código",
        },
        {
          key: "productoID",
        },
        {
          key: "productoDescCorta",
          label: "Nombre producto",
          filterByFormatted: true,
        },
        {
          key: "productoDescLarga",
          label: "Descripcion",
          filterByFormatted: true,
        },
        {
          key: "colorNombre",
          label: "Color",
        },
      ],
      filter: "",
      filterOn: [],
      productos: [],
      items: [
        {
          text: "Admin",
          href: "#",
        },
        {
          text: "Manage",
          href: "#",
        },
        {
          text: "Library",
          active: true,
        },
      ],
    };
  },
  computed: {
    sortOptions() {
      // Create an options list from our fields
      return this.fields
        .filter((f) => f.sortable)
        .map((f) => {
          return { text: f.label, value: f.key };
        });
    },
    rows() {
      return this.productos.length;
    },
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
    toggleBusy() {
      this.isBusy = !this.isBusy;
    },
    editarRegistro(item) {
      this.producto = item;
      this.$bvModal.show("modal-registro");
    },
    onFiltered(filteredItems) {
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
  },
};
</script>


<style>
</style>
