<template>
  <CommonPaginationContainer>
    <CommonPaginationLR>
      <CommonPaginationLeftSVG :mode="mode()" />
    </CommonPaginationLR>
    <NuxtLink v-for="number in length" :key="number" :to="`/articles/page/${number}`">
      <CommonPaginationBtn :page_number="number" />
    </NuxtLink>
    <CommonPaginationLR>
      <CommonPaginationRightSVG :mode="mode()" />
    </CommonPaginationLR>
  </CommonPaginationContainer>
</template>

<script>
export default {
  methods: {
    mode() {
      return (this.$vuetify.theme.dark === true) ? "dark": "light";
    }
  },
  props: {
    page: Number,
    length: Number
  },
}
</script>