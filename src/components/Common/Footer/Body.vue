<template>
  <v-footer
    :style="{background: $vuetify.theme.themes[mode].background}" 
    :absolute="!fixed" 
    height="60"
    app
  >
    <slot />
  </v-footer>
</template>

<script>
export default {
  props: {
    mode: String
  },
  data() {
    return {
      fixed: false,
    }
  },
}
</script>