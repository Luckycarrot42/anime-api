<template>
  <v-app>
    <navbar-comp></navbar-comp>
    <v-main>
      <router-view></router-view>
    </v-main>
    <footer-comp></footer-comp>
  </v-app>
</template>

<script>
import FooterComp from './components/FooterComp'
import NavbarComp from './components/NavbarComp'

export default {
  name: 'App',
  components: {
    FooterComp,
    NavbarComp
  }
};
</script>
