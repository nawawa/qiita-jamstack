<template>
  <v-app dark>

    <LayoutsNavigationDrawer v-model="drawer" />

    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
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
  }
}
</script>
