      <template>
  <v-app id="inspire">
    <v-row>
      <v-col
        xl="3"
        lg="4"
        md="6"
        sm="8"
        xs="12"
        v-for="(prod, x) in productos"
        :key="x"
      >
        <v-card flat :elevation="17" :loading="loading" style=" border-radius: 15px;" >
          <v-carousel>
            <v-carousel-item
              :src="prod.prodImagen1"
              reverse-transition="fade-transition"
              transition="fade-transition"
            ></v-carousel-item>
            <v-carousel-item
              :src="prod.prodImagen2"
              reverse-transition="fade-transition"
              transition="fade-transition"
            ></v-carousel-item>
            <v-carousel-item
              :src="prod.prodImagen3"
              reverse-transition="fade-transition"
              transition="fade-transition"
            ></v-carousel-item>
            <v-carousel-item
              :src="prod.prodImagen4"
              reverse-transition="fade-transition"
              transition="fade-transition"
            ></v-carousel-item>
          </v-carousel>

          <v-card-text>
            <div
              class="
                font-weight-bold
                primary--text
                text-sm-body-3 text-md-body-3 text-lg-h10 text-xl-h10
              "
            >
              {{ prod.productoDescCorta }}
            </div>
            <div class="d-flex align-center">
              <v-card-text>
                <v-chip class="deep-purple accent-4 white--text">
                  COD: {{ prod.productoCod }}
                </v-chip>
              </v-card-text>
            </div>

            <div class="text-body-1 py-4">
              Renta desde: ${{ prod.prodPrecioRenta }}
            </div>

            <v-card-text>
              <v-btn color="accent" v-on:click="masInformacion(prod)">
                <v-icon dark>mdi-whatsapp</v-icon>
                Mas informacion
              </v-btn>
            </v-card-text>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-app>
</template>
  <script>
export default {
  name: "Cards",
  props: ["productos"],
  data: () => {
    return {
      loading: true,
    };
  },
  computed: {},
  mounted() {
    this.reserve();
  },
  methods: {
    reserve() {
      this.loading = true;
      setTimeout(() => (this.loading = false), 2000);
    },
    seleccionaRegistro(i) {
      console.log(i);
    },
    masInformacion(i) {
      window.open(
        "https://wa.me/526671848445?text=Me%20interesa%20uno%20de%20los%20modelos%20publicados%20" +
          "COD:" +
          String(i.productoCod + " " + i.productoDescCorta) +
          ""
      );
    },
  },
};
</script>