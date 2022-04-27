<template>
  <CommonArticleHeader>
    <CommonArticleInfo :created_at="created_at" :updated_at="updated_at" :xs="xs" />
    <CommonArticleTitle :title="title" />
  </CommonArticleHeader>
</template>

<script>
export default {
  props: {
    created_at: Object,
    updated_at: Object,
    title: String
  },
  computed: {
    xs() {
      return (this.$vuetify.breakpoint.name === `xs`) ? true: false;
    }
  }
}
</script>