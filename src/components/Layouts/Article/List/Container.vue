<template>
  <CommonArticleListContainer>
    <div v-for="article in articles" :key="article.id">
      <NuxtLink :to="`/articles/${article.id}`">
        <CommonArticleListCard
          :title="article.title"
          :created_at="getYearMonthDate(article.created_at)"
          :updated_at="getYearMonthDate(article.updated_at)"
          :tags="article.tags"
        />
      </NuxtLink>
    </div>
  </CommonArticleListContainer>
</template>

<script>
export default{
  props: {
    articles: {
      type: Array
    },
  },
  computed: {
    getYearMonthDate() {
      return function(time_stamp) {
        const date = new Date(time_stamp);
        return date.getFullYear() + '年' + date.getMonth() + '月' + date.getDate() + '日'
      }
    },
  }
}
</script>