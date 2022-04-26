<template>
  <CommonPaginationContainer>
    <CommonPaginationLR :xs="xs">
      <CommonPaginationLeftSVG :mode="mode" />
    </CommonPaginationLR>
    <NuxtLink v-for="number in length" :key="number" :to="`/articles/page/${number}`">
      <CommonPaginationBtn :xs="xs" :now_page="page" :page_number="number" />
    </NuxtLink>
    <CommonPaginationLR :xs="xs">
      <CommonPaginationRightSVG :mode="mode" />
    </CommonPaginationLR>
  </CommonPaginationContainer>
</template>

<script>
// max 5
export default {
  props: {
    page: Number,
    length: Number
  },
  computed: {
    mode() {
      return (this.$vuetify.theme.dark === true) ? "dark": "light";
    },
    xs() {
      return (this.$vuetify.breakpoint.name === `xs`) ? true: false;
    }
  },
}
</script>