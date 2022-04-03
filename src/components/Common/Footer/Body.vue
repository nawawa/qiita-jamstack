<template>
  <v-footer
    :style="{background: $vuetify.theme.themes[theme].background}" 
    :absolute="!fixed" 
    height="60"
    app
  >
    <slot />
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