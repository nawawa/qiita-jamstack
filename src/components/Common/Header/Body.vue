<template>
  <v-app-bar
    :style="{background: $vuetify.theme.themes[theme].background}" 
    :clipped-left="clipped"
    fixed 
    flat 
    app
  >
    <slot />
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
    }
  },
  computed: {
    theme() {
      return this.$store.state.theme.theme;
    },
  },
}
</script>