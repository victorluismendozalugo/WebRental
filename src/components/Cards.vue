      <template>
  <div id="app">
    <v-app id="inspire">
      <v-row>
        <v-col
          xl="2"
          lg="4"
          md="6"
          sm="9"
          xs="12"
          v-for="(prod, x) in arr"
          :key="x"
        >
          <!-- <v-card
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
           

              <v-chip-group
                v-model="selection"
                active-class="deep-purple accent-4 white--text"
                column
              >
                <v-chip>5:30PM</v-chip>

                <v-chip>7:30PM</v-chip>

                <v-chip>8:00PM</v-chip>

                <v-chip>9:00PM</v-chip>
              </v-chip-group>
              <v-container>
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
                      <v-date-picker v-model="date"></v-date-picker>
                    </v-menu>
                  </v-col>
              </v-container>
            </v-card-text>
       </v-card> -->
          <!-- <v-card-actions>
              <v-btn color="deep-purple lighten-2"> Mas informacion </v-btn>
            </v-card-actions> -->

          <v-card flat :elevation="22">
            <v-img
              :src="prod.prodImagen1"
              :aspect-ratio="16 / 9"
              gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"
              height="200px"
              class="elevation-2"
              style="border-radius: 16px"
              @click.stop="seleccionaRegistro(prod)"
            >
            </v-img>

            <v-card-text>
              <div class="font-weight-bold primary--text text-sm-body-3 text-md-body-3 text-lg-h10 text-xl-h10">
                {{ prod.productoDescCorta }}
              </div>

              <!-- <div class="py-4 text-sm-body-3 text-md-body-3 text-lg-h9 text-xl-h9">
                {{ prod.productoDescLarga }}
              </div> -->

              <div class="d-flex align-center">
                <!-- <v-avatar color="accent" size="36">
                  <v-icon dark>mdi-barcode</v-icon>
                    <v-btn color="accent">{{ prod.productoCod }}</v-btn>
                </v-avatar> -->
                <v-card-text>
                  <v-btn color="accent">
                    <v-icon dark>mdi-barcode</v-icon>
                    COD: {{ prod.productoCod }}</v-btn
                  >
                </v-card-text>
              </div>

              <div class="text-body-1 py-4">
                Renta desde: ${{ prod.prodPrecioRenta }}
              </div>
            </v-card-text>
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