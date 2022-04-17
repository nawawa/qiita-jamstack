<template>
  <v-toolbar-title 
    align-content="center"
    class="mx-auto"
  >
    <h1><NuxtLink to="/" class="text">{{ title }}</NuxtLink></h1>
  </v-toolbar-title>
</template>

<script>
export default {
  data() {
    return {
      title: `nawamemo`
    }
  },
}
</script>

<style lang="scss" scoped>
  $header-font-family: 'Raleway', sans-serif !important;
  $header-font-size: 18px !important;
  $header-font-weight: bold;
  $header-font-spacing: 0.1em !important;

  h1 {
    margin: 0 0 16px 0;
    border-bottom: none;
  }

  a {
    color: var(--v-font-base) !important;
  }

  .text {
    font-family: $header-font-family;
    font-size: $header-font-size;
    font-weight: $header-font-weight;
    letter-spacing: $header-font-spacing;
  }
</style>