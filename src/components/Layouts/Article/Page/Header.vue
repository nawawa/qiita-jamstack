<template>
  <CommonArticleHeader>
    <CommonArticleTitle :title="title" />
    <CommonArticleInfo :created_at="created_at" :updated_at="updated_at" />
  </CommonArticleHeader>
</template>

<script>
export default {
  props: {
    created_at: Object,
    updated_at: Object,
    title: String
  }
}
</script>