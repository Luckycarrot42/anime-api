<template>
  <div class="manga">
    <v-container>
      <h1>Contenido de Manga</h1>
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
import {mapState, mapActions} from 'vuex'
 
export default {
  created() {
    this.getMangas()
  },
  computed: {
    ...mapState(['manganimes', 'manganime'])
  },
    methods: {
    ...mapActions(['getMangas', 'getManga']),
  }
}
</script>