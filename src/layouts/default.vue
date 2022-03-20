<template>
  <v-app dark>

    <LayoutsNavigationDrawer v-model="drawer" />

    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <p>{{ drawer }}</p>
    </v-app-bar>

    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
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
