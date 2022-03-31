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
  mounted() {
    const browser_theme = (window.matchMedia('(prefers-color-scheme: dark)').matches === true)? "dark": "light";
    this.$store.commit('theme/toggle', browser_theme);
  },
  computed: {
    theme() {
      return this.$store.state.theme.theme;
    },
  },
}
</script>
