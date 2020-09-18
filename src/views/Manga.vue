<template>
  <div class="manga">
    <v-container>
      <h1>Manga</h1>
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
        <v-col v-for="manga in manganimes" :key="manga.mal_id" cols="4" class="my-3">
          <v-card class="mx-auto">
            <v-img :src="manga.image_url" height="250px"></v-img>
            <v-card-title>{{ manga.title }}</v-card-title>
            <v-card-subtitle>{{ manga.synopsis }}</v-card-subtitle>
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
    this.getMangas()
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
    ...mapActions(['getMangas', 'getManga', 'setSelected']),
    setSelected(value){
      this.selectedItem = value  
      this.getMangas()
    }
    }   
  
}
</script>