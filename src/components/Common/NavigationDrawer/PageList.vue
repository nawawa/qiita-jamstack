<template>
  <v-list class="py-8">
    <v-list-item
      v-for="item in items"
      :key="item.title"
      :to="item.link"
      class="mb-4"
    >
      <v-list-item-content class="px-8">
        <v-list-item-title class="text">
          {{ item.title }}
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { 
          title: 'home',
          link: '/'
        },
        { 
          title: 'about',
          link: '/about'
        },
      ],
      
    }
  },
}
</script>

<style lang="scss" scoped>
  $header-font-family: 'Raleway', sans-serif !important;
  $header-font-size: 18px !important;
  $header-font-weight: bold;
  $header-font-spacing: 0.1em !important;
  
  .text {
    font-family: $header-font-family;
    font-size: $header-font-size;
    font-weight: $header-font-weight;
    letter-spacing: $header-font-spacing;
  }
</style>