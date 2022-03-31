<template>
  <v-app :style="{background: $vuetify.theme.themes[theme].background}">

    <LayoutsNavigationDrawer v-model="drawer" />

    <v-app-bar
      :style="{background: $vuetify.theme.themes[theme].background}" 
      :clipped-left="clipped"
      fixed 
      flat 
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
    </v-app-bar>

    <v-main>
      <Nuxt />
    </v-main>

    <LayoutsFooter />

  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
    }
  },
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    },
  },
}
</script>
