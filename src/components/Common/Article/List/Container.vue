<template>
  <div>
    <div v-for="article in articles" :key="article.id">
      <NuxtLink :to="`/articles/${article.id}`">
        <CommonArticleCard>
          {{ article.title }}
        </CommonArticleCard>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default{
  props: {
    articles: {
      type: Array
    }
  }
}
</script>