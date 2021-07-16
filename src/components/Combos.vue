 <template>
  <v-app id="">
    <v-container>
      <v-row align="center">
        <v-col class="d-flex" cols="12" sm="6">
          <v-select :items="colores" label="Colores" dense outlined></v-select>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
  <script>
export default {
  name: "Catalogos",
  data: () => {
    return {
      colores: [],
    };
  },
  computed: {},
  mounted() {},
  methods: {},
};
</script>