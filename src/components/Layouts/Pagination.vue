<template>
  <CommonPaginationContainer>
    <NuxtLink :to="preview" :class="{'disabled': disabled_left}">
      <CommonPaginationLR :xs="xs" left :disabled="disabled_left">
        <CommonPaginationLeftSVG :mode="mode" />
      </CommonPaginationLR>
    </NuxtLink>
    <NuxtLink v-for="number in length" :key="number" :to="`/articles/page/${number}`">
      <CommonPaginationBtn :xs="xs" :now_page="page" :page_number="number" />
    </NuxtLink>
    <NuxtLink :to="next" :class="{'disabled': disabled_right}">
      <CommonPaginationLR :xs="xs" right :disabled="disabled_right">
        <CommonPaginationRightSVG :mode="mode" />
      </CommonPaginationLR>
    </NuxtLink>
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
    },
    preview() {
      return `/articles/page/${this.page - 1}`;
    },
    next() {
      return `/articles/page/${this.page + 1}`;
    },
    disabled_left() {
      return (this.page === 1)? true: false
    },
    disabled_right() {
      return (this.page === this.length)? true: false
    }
  },
}
</script>

<style lang="scss" scoped>
  .disabled {
    pointer-events: none;
  }
</style>