<template>
  <v-container>
    <CommonArticleListContainer :articles="articles" />
    <NuxtLink v-if="is_paginated" to="/articles/page/2">
      READ MORE
    </NuxtLink>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  middleware: 'qiita_api', // TODO:ミドルウェアで共通化する（今はトップの方のindex.vueではVuexに入れてるけど、無意味）
  computed: {
    article_total_count() {
      return this.user_data.items_count;
    },
    is_paginated() {
      return this.article_total_count > this.page_articles_count;
    },
  },
  async asyncData({ $config: { apiSecret, apiURL } }) {
    const page_articles_count = 10;
    const token = { Authorization: `Bearer ${apiSecret}` };

    const response = await Promise.all([
      axios.get(`${apiURL}/users/inarikawa/items?page=1&per_page=${page_articles_count}`, { headers: token }),
      axios.get(`${apiURL}/users/inarikawa`, { headers: token }),
    ]);

    return { articles: response[0].data, user_data: response[1].data, page_articles_count: page_articles_count };
  },
}
</script>