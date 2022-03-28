<template>
  <v-container>
    <CommonArticleListContainer :articles="articles" />
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  async asyncData({ params,　$config: { apiSecret, apiURL } }) {
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