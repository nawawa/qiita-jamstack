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
  mounted() {
    this.$store.commit('user/add', this.user_data);
    this.$store.commit('article/set_is_paginated', (this.$store.state.user.user.items_count > this.page_articles_count));
  },
  computed: {
    user() {
      return this.$store.state.user.user
    },
    is_paginated() {
      return this.$store.state.article.is_paginated;
    }
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