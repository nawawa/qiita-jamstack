<template>
  <v-app :style="{background: $vuetify.theme.themes[theme].background}">

    <LayoutsNavigationDrawer v-model="drawer" />

    <LayoutsHeaderBody>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <LayoutsHeaderTitle />
      <LayoutsHeaderToggleThemeSwitch :dark="this.$vuetify.theme.dark" @toggleTheme="toggleTheme" />
    </LayoutsHeaderBody>

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
      drawer: false,
    }
  },
  mounted() {
    const is_dark_mode = this.checkBrowserIsDarkTheme;
    this.$vuetify.theme.dark = is_dark_mode;
    this.$store.commit('theme/toggle', (is_dark_mode === true) ? "dark": "light");
  },
  computed: {
    theme() {
      return this.$store.state.theme.theme;
    },
    checkBrowserIsDarkTheme() {
      return (window.matchMedia('(prefers-color-scheme: dark)').matches === true);
    },
  },
  methods: {
    toggleTheme(event) {
      this.$vuetify.theme.dark = (this.$vuetify.theme.dark = !this.$vuetify.theme.dark);
      this.$store.commit('theme/toggle', (this.theme === "dark") ? "light": "dark");
    },
  }
}
</script>
