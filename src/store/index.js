import Axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    manganimes: [],
    manganime: undefined,
    cart: [],
    items: [{value: 1, label:'Action', default: true}, 
            {value: 2, label:'Adventure'},
            {value: 3, label:'Cars'},
            {value: 4, label:'Comedy'},
            {value: 5, label:'Dementia'},
            {value: 6, label:'Demons'},
            {value: 7, label:'Mystery'},
            {value: 8, label:'Drama'},
            {value: 9, label:'Ecchi'},
            {value: 10, label:'Fantasy'}],
    selectedItem: '1'
  },
  mutations: {
    GET_MANGAS(state, mangas) {
      state.manganimes = mangas
    },
    GET_MANGA(state, manga) {
      state.manganime = manga
    },
    GET_ANIMES(state, mangas) {
      state.manganimes = mangas
    },
    GET_ANIME(state, manga) {
      state.manganime = manga
    },
    SET_SELECTED(state, newValue){ //para actualizar valor de selectedItem
      state.selectedItem = newValue
    }
  },
  actions: {
    setSelected({commit, state}, newValue){ //para llamar a mutacion que actualiza selectedItem
      commit('SET_SELECTED', newValue)
      return state.selectedItem
    },
    getMangas({ commit, state }) {
      Axios.get('https://api.jikan.moe/v3/genre/manga/' + state.selectedItem).then((response) => {
        commit('GET_MANGAS', response.data.manga)
      })
    },
    getManga({ commit }, id) { //commit llama a mutaciones
      Axios.get(`https://api.jikan.moe/v3/manga/search?q=${id}`).then((response) => {
        commit('GET_MANGA', response.data)
      })
    },
    getAnimes({ commit, state }) {
      Axios.get('https://api.jikan.moe/v3/genre/anime/'+ state.selectedItem).then((response) => {
        console.log(response.data)
        commit('GET_ANIMES', response.data.anime)
      })
    },
    getAnime({ commit }, id) { //commit llama a mutaciones
      Axios.get(`https://api.jikan.moe/v3/anime/search?q=${id}`).then((response) => {
        commit('GET_ANIME', response.data)
      })
    }
  },
  modules: {
  },
  getters: {
    selected: (state) => {
        return state.selectedItem;
    }
}
})