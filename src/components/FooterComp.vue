<template>
  <v-card height="50">
    <v-footer absolute class="font-weight-medium" color="indigo lighten-4">
      <v-col class="text-center" cols="12">{{ new Date().getFullYear() }} — <strong>Anime / Manga</strong></v-col>
    </v-footer>
  </v-card>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style>

</style>