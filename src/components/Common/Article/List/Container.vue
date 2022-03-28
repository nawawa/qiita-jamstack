<template>
  <div>
    <div v-for="article in articles" :key="article.id">
      <NuxtLink :to="`/articles/${article.id}`">
        <CommonArticleListCard>
          {{ article.title }}
        </CommonArticleListCard>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default{
  props: {
    articles: {
      type: Array
    },
    // page_number: {
    //   type: Number,
    //   require: false,
    //   default: 1,
    // }
  },
}
</script>