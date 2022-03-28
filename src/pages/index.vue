<template>
  <v-container>
    <CommonArticleListContainer :articles="articles" />
    <NuxtLink to="/articles/page/2">2</NuxtLink>
    <NuxtLink to="/articles/page/3">3</NuxtLink>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  async asyncData({ $config: { apiSecret, apiURL } }) {
    const {data} = await axios.get(
      `${apiURL}/users/inarikawa/items?page=1&per_page=10`,
      {
        headers: { Authorization: `Bearer ${apiSecret}` }
      }
    )
    return { articles: data };
  },
}
</script>