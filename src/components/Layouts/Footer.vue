<template>
  <v-footer
    :style="{background: $vuetify.theme.themes[theme].background}" 
    :absolute="!fixed"
    app
  >
    <span>&copy; {{ new Date().getFullYear() }}</span>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      fixed: false,
    }
  },
  computed: {
    theme() {
      return this.$store.state.theme.theme;
    },
  },
}
</script>