<template>
  <v-container>
    <CommonArticleListContainer :articles="articles" />
    <div v-if="pagination">
      <NuxtLink v-for="number in length" :key="number" :to="`/articles/page/${number}`">
        {{number}}
      </NuxtLink>
    </div>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  async asyncData({ params, $config: { apiSecret, apiURL } }) {
    const page_number = params.p || 1
    const {data} = await axios.get(
      `${apiURL}/users/inarikawa/items?page=${page_number}&per_page=10`,
      {
        headers: { Authorization: `Bearer ${apiSecret}` }
      }
    )
    return { articles: data, count: data.length, page_number: Number(page_number) };
  },
  computed: {
    pagination() {
      return this.$store.state.article.pagination;
    },
    article_total_count() {
      return this.$store.state.user.user.items_count;
    },
    length() {
      return Math.ceil(((this.article_total_count) / 10));
    }
  },
}
</script>