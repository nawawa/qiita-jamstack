<template>
  <v-app :style="{background: $vuetify.theme.themes[mode].background}">
    <LayoutsNavigationDrawer :mode="mode" v-model="drawer" />

    <LayoutsHeaderBody :mode="mode">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <LayoutsHeaderTitle />
      <LayoutsHeaderToggleThemeSwitch :dark="this.$vuetify.theme.dark" @toggleTheme="toggleTheme" />
    </LayoutsHeaderBody>

    <v-main>
      <Nuxt />
    </v-main>

    <LayoutsFooter :mode="mode" />

  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
    }
  },
  computed: {
    mode() {
      return (this.$vuetify.theme.dark === true) ? "dark": "light";
    }
  },
  methods: {
    toggleTheme(event) {
      this.$vuetify.theme.dark = (this.$vuetify.theme.dark = !this.$vuetify.theme.dark);
    },
  }
}
</script>
