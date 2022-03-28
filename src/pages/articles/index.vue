<template>
  <v-container>
    <CommonArticleListContainer :articles="articles" />
    <NuxtLink :to="`/articles/page/${nextPage()}`">NEXT</NuxtLink>
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
  methods: {
    nextPage() {
      return this.page_number + 1;
    }
  }
}
</script>