import Vue from 'vue';
import Vuetify, {
    VCard,
    VRating,
    VToolbar,
    VHover
} from 'vuetify/lib'
import { Ripple } from 'vuetify/lib/directives'

Vue.use(Vuetify, {
    components: {
        VCard,
        VRating,
        VToolbar,
        VHover
    },
    directives: {
        Ripple,
    },
})

const opts = {
    components:{
        VCard,
        VRating,
        VToolbar,
        VHover
    },
    theme: {
        options: {
            customProperties: true,
        },
        themes: {
            light: {
                primary: '#000',
                secondary: '#818383',
                accent: '#2178ff',
            },
        },
    },
}

export default new Vuetify(opts)
