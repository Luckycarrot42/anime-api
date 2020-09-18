<template>
  <div class="anime">
    <v-container>
      <h1>Anime</h1>
      <h3>{{ selectedGenre.label }} </h3>
      <v-row align="center">
      <v-col class="d-flex" cols="12" sm="6">
        <v-select 
          label="Seleccione categoria:"
          :items="items"
          item-text="label"
          v-model="selectedGenre"
          @input="setSelected(selectedGenre.value)" 
          return-object
          item-value="value"
        ></v-select>
      </v-col>
      </v-row>
       <v-row>
        <v-col v-for="anime in manganimes" :key="anime.mal_id" cols="4" class="my-3">
          <v-card class="mx-auto">
            <v-img :src="anime.image_url" height="250px"></v-img>
            <v-card-title>{{ anime.title }}</v-card-title>
            <v-card-subtitle>{{ anime.synopsis }}</v-card-subtitle>
            <v-card-actions>
              <v-btn color="info" text>Ver detalles</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
 
<script>
import {mapState, mapActions } from 'vuex'
 
export default {
  data() {
    return {
      selectedGenre: {} //recibe objeto seleccionado
    }
  },
  created() {
    this.getAnimes()
  },
  computed: {
    ...mapState(['manganimes', 'manganime', 'items', 'selectedItem']),
    value(){ //separa el selectedGenre.value
      return this.selectedGenre.value
    },
    label(){ //separa el selectedGenre.label
      return this.selectedGenre.label
    },
    selectedItem: { //para settear selectedItem para su uso
      get () { //
        return this.$store.state.selectedItem //obtiene selectedItem del store
      },
      set (newValue) {
        return this.$store.dispatch('setSelected', newValue) //indica que se usara con action setSelected
      }
  }
  },
    methods: {
    ...mapActions(['getAnimes', 'getAnime', 'setSelected']),
    setSelected(value){
      this.selectedItem = value  
      this.getAnimes()
    }
    }   
  
}
</script>