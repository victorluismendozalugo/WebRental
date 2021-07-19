import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        colorID: 0,
        estiloID: 0,
        tallaID: 0,
        temporalidadID: 0,
        terminadoID: 0
    },
    mutations: {
        setColor(state, colorID) {
            state.colorID = colorID
        },
        setEstilo(state, estiloID) {
            state.estiloID = estiloID
        },
        setTalla(state, tallaID) {
            state.tallaID = tallaID
        },
        setTempo(state, tempID) {
            state.temporalidadID = tempID
        },
        setTerm(state, terminadoID) {
            state.terminadoID = terminadoID
        },
    },
    getters: {
        // currentUser(state, getters){

        // }
    },
    actions: {
    },
    modules: {
    }
})
