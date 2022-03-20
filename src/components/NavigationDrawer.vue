<template>
  <v-navigation-drawer
    app
    v-model="drawer"
    right
    fixed
    floating
    temporary
  >
    <slot />
  </v-navigation-drawer>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
    }
  }
}
</script>