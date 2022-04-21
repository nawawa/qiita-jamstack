<template>
  <v-pagination
    v-model="page"
    :length="length"
    circle
  >
    <nuxt-link v-for="number in length" :key="number" :to="`/articles/page/${number}`" />
  </v-pagination>
</template>

<script>
export default {
  props: {
    page: Number,
    length: Number
  },
}
</script>