      <template>
  <div id="app">
    <v-app id="inspire">
      <v-row>
        <v-col
          cols="12"
          xl="2"
          lg="4"
          md="6"
          sm="9"
          xs="12"
          v-for="(prod, x) in arr"
          :key="x"
        >
          <v-card
            :loading="load"
            class="mx-auto my-12"
            max-width="374"
            @click.stop="seleccionaRegistro(prod)"
          >
            <template slot="progress">
              <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
              ></v-progress-linear>
            </template>

            <v-img height="250" :src="prod.prodImagen1"></v-img>

            <p class="subtitle-1 text-center">
              {{ prod.productoDescCorta.substring(0, 20) }}
            </p>

            <v-card-text>
              <p class="text-sm-left">COD: {{ prod.productoCod }}</p>
            </v-card-text>

            <v-card-text>
              <p class="text-sm-left font-weight-medium">
                Precio renta: ${{ prod.prodPrecioRenta }}
              </p>
            </v-card-text>

            <div>
              {{ prod.productoDescLarga }} Color: {{ prod.colorNombre }}
            </div>

            <v-divider class="mx-4"></v-divider>

            <v-card-title>Revisar disponibilidad</v-card-title>

            <v-card-text>

<!-- https://v2.vuetifyjs.com/en/styles/text-and-typography/ -->

              <!-- <v-chip-group
                v-model="selection"
                active-class="deep-purple accent-4 white--text"
                column
              >
                <v-chip>5:30PM</v-chip>

                <v-chip>7:30PM</v-chip>

                <v-chip>8:00PM</v-chip>

                <v-chip>9:00PM</v-chip>
              </v-chip-group> -->
              <v-container>
                <v-row>
                  <v-col cols="12" lg="12" xl="12">
                    <v-menu
                      v-model="menu1"
                      :close-on-content-click="false"
                      max-width="290"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          :value="computedDateFormattedMomentjs"
                          clearable
                          label="Selecciona la fecha de tu evento"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                          @click:clear="date = null"
                        ></v-text-field>
                      </template>
                      <v-date-picker
                        v-model="date"
                        @change="menu1 = false"
                      ></v-date-picker>
                    </v-menu>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-btn color="deep-purple lighten-2" text @click="reserve">
                Mas informacion
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-app>
  </div>
</template>
  <script>
import moment from "moment";
import { format, parseISO } from "date-fns";
export default {
  name: "Cards",
  props: ["arr", "load"],
  data: () => {
    return {
      loading: true,
      selection: 1,
      date: format(parseISO(new Date().toISOString()), "yyyy-MM-dd"),
      menu1: false,
    };
  },
  computed: {
    computedDateFormattedMomentjs() {
      return this.date ? moment(this.date).format("dddd, MMMM Do YYYY") : "";
    },
  },
  methods: {
    reserve() {
      this.loading = true;
      setTimeout(() => (this.loading = false), 2000);
    },
    seleccionaRegistro(i) {
      console.log(i);
    },
  },
};
</script>