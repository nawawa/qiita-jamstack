<template>
  <CommonPaginationContainer>
    <CommonPaginationLR>
      <CommonPaginationLeftSVG :mode="mode()" />
    </CommonPaginationLR>
    <NuxtLink v-for="number in length" :key="number" :to="`/articles/page/${number}`">
      <CommonPaginationBtn :now_page="page" :page_number="number" />
    </NuxtLink>
    <CommonPaginationLR>
      <CommonPaginationRightSVG :mode="mode()" />
    </CommonPaginationLR>
  </CommonPaginationContainer>
</template>

<script>
export default {
  props: {
    page: Number,
    length: Number
  },
  methods: {
    mode() {
      return (this.$vuetify.theme.dark === true) ? "dark": "light";
    },
  },
}
</script>