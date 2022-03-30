<template>
  <v-container>
    <CommonArticleListContainer :articles="articles" />
    <div v-if="is_paginated">
      <NuxtLink v-for="number in length" :key="number" :to="`/articles/page/${number}`">
        {{number}}
      </NuxtLink>
    </div>
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
    length() {
      return Math.ceil(((this.article_total_count) / this.page_articles_count));
    }
  },
  async asyncData({ params, $config: { apiSecret, apiURL } }) {
    const page_number = params.p || 1;
    const page_articles_count = 10;
    const token = { Authorization: `Bearer ${apiSecret}` };

    const response = await Promise.all([
      axios.get(`${apiURL}/users/inarikawa/items?page=${page_number}&per_page=${page_articles_count}`, { headers: token }),
      axios.get(`${apiURL}/users/inarikawa`, { headers: token }),
    ]);
    return { articles: response[0].data, user_data: response[1].data, page_articles_count: page_articles_count };
  },
}
</script>