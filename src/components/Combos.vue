 <template>
  <v-app id="">
    <v-container fluid>
      <v-row align="center">
        <v-col class="d-flex" cols="12" sm="4" lg="3" xl="2">
          <v-select
            outlined
            :items="colores"
            item-text="colorNombre"
            label="Colores"
            dense
            return-object
            v-model="selectedColor"
            v-on:change="setColor(selectedColor)"
          ></v-select>
        </v-col>

        <v-col class="d-flex" cols="12" sm="4" lg="3" xl="2">
          <v-select
            outlined
            :items="estilos"
            item-text="estiloNombre"
            itemid="estiloID"
            label="Estilos"
            dense
            return-object
            v-model="selectedEstilo"
            v-on:change="setEstilo(selectedEstilo)"
          ></v-select>
        </v-col>

        <v-col class="d-flex" cols="12" sm="4" lg="3" xl="2">
          <v-select
            outlined
            :items="tallas"
            item-text="tallaNumero"
            itemid="tallaID"
            label="Tallas"
            dense
            return-object
            v-model="selectedTalla"
            v-on:change="setTalla(selectedTalla)"
          ></v-select>
        </v-col>

        <v-col class="d-flex" cols="12" sm="4" lg="3" xl="2">
          <v-select
            outlined
            :items="temporalidades"
            item-text="tempNombre"
            label="Temporadas"
            dense
            return-object
            v-model="selectedTemp"
            v-on:change="setTempo(selectedTemp)"
          ></v-select>
        </v-col>

        <v-col class="d-flex" cols="12" sm="4" lg="3" xl="2">
          <v-select
            outlined
            :items="terminados"
            item-text="terminadoNombre"
            itemid="terminadoID"
            label="Terminados"
            dense
            return-object
            v-model="selectedTerm"
            v-on:change="setTerm(selectedTerm)"
          ></v-select>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
  <script>
import servicioCatalogos from "../services/servicio-catalogos";
export default {
  name: "Catalogos",
  data: () => {
    return {
      selectedColor: null,
      selectedEstilo: null,
      selectedTalla: null,
      selectedTemp: null,
      selectedTerm: null,
      colores: [],
      estilos: [],
      tallas: [],
      temporalidades: [],
      terminados: [],
    };
  },
  computed: {},
  mounted() {
    this.getColores();
    this.getEstilos();
    this.getTallas();
    this.getTemps();
    this.getTerms();
  },
  methods: {
    getColores() {
      servicioCatalogos
        .colores({
          colorID: 0,
          sucursalID: 1,
        })
        .then(async (r) => {
          r.value
            ? (this.colores = r.data.data)
            : await this.$msg.warning(r.message);
        })
        .catch(async (r) => {
          await this.$msg.error("El servicio no se encuentra disponible");
        });
    },
    getEstilos() {
      servicioCatalogos
        .estilos({
          estiloID: 0,
          sucursalID: 1,
        })
        .then(async (r) => {
          r.value
            ? (this.estilos = r.data.data)
            : await this.$msg.warning(r.message);
        })
        .catch(async (r) => {
          await this.$msg.error("El servicio no se encuentra disponible");
        });
    },
    getTallas() {
      servicioCatalogos
        .tallas({
          tallaID: 0,
          sucursalID: 1,
        })
        .then(async (r) => {
          r.value
            ? (this.tallas = r.data.data)
            : await this.$msg.warning(r.message);
        })
        .catch(async (r) => {
          await this.$msg.error("El servicio no se encuentra disponible");
        });
    },
    getTemps() {
      servicioCatalogos
        .temporalidades({
          temporalidadID: 0,
          sucursalID: 1,
        })
        .then(async (r) => {
          r.value
            ? (this.temporalidades = r.data.data)
            : await this.$msg.warning(r.message);
        })
        .catch(async (r) => {
          await this.$msg.error("El servicio no se encuentra disponible");
        });
    },
    getTerms() {
      servicioCatalogos
        .terminados({
          terminadoID: 0,
          sucursalID: 1,
        })
        .then(async (r) => {
          r.value
            ? (this.terminados = r.data.data)
            : await this.$msg.warning(r.message);
        })
        .catch(async (r) => {
          await this.$msg.error("El servicio no se encuentra disponible");
        });
    },
    setColor(item) {
      this.$store.commit("setColor", item.colorID);
    },
    setEstilo(item) {
      this.$store.commit("setEstilo", item.estiloID);
    },
    setTalla(item) {
      this.$store.commit("setTalla", item.tallaID);
    },
    setTempo(item) {
      this.$store.commit("setTempo", item.temporalidadID);
    },
    setTerm(item) {
      this.$store.commit("setTerm", item.terminadoID);
    },
  },
};
</script>