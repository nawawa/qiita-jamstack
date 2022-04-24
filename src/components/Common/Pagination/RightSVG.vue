<template>
  <svg viewBox="0 0 16 54" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1 1L15 27L1 53" :stroke="this.$vuetify.theme.themes[mode].font" />
  </svg>
</template>

<script>
export default {
  props: {
    mode: String
  },
}
</script>

<style lang="scss" scoped>
  svg {
    position: absolute;
    top: 0;
    left: 40%;
    height: 100%;
  }
</style>