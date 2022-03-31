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
      <v-app-bar-nav-icon @click="toggleTheme" />
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
