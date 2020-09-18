<template>
  <v-container>
    <v-row class="ma-auto">
      <v-container class="backgroundAnime main d-flex aling-items-center">
      <v-col cols="12" class="d-flex justify-center">
        <v-btn depressed large color="red accent-4" dark to='/anime' class="aling-center my-auto">Anime</v-btn>
      </v-col>
      </v-container>
      <v-container class="backgroundManga main d-flex aling-items-center">
      <v-col cols="12" class="d-flex justify-center">
        <v-btn depressed large color="red accent-4" dark to='/manga' class="aling-center my-auto">Manga</v-btn>
      </v-col>
      </v-container>
    </v-row>
  </v-container>
</template>
 
<script>
 
export default {
  name: 'Home',
  components: {
  }
}
</script>
 
<style scoped>
  .main{
    height: 80vh;
  }
  .backgroundManga {
    background-image: url('https://inmanga.com/thumbnails/manga/Nanatsu-no-Taizai/74d824c1-85ba-4544-8fb2-aa4ccecd9eea');
    background-position: center;
    background-size:cover;
    width: 50%;
  }
  .backgroundAnime {
    background-image: url('https://i.pinimg.com/originals/38/0a/62/380a625c516360ca1607261bc8ec338a.jpg');
    background-position: center;
    background-size:cover;
    width: 50%;
  }
</style>

