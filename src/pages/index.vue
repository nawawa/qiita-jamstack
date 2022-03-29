<template>
  <v-container>
    <CommonArticleListContainer :articles="articles" />
    <NuxtLink to="/articles/page/2">2</NuxtLink>
    <NuxtLink to="/articles/page/3">3</NuxtLink>
    {{user.items_count}}
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      articles: {},
      user_data: {}
    }
  },
  mounted() {
    this.$store.commit('user/add', this.user_data);
  },
  computed: {
    user() {
      return this.$store.state.user.user
    }
  },
  async asyncData({ $config: { apiSecret, apiURL } }) {
    const token = { Authorization: `Bearer ${apiSecret}` };

    const response = await Promise.all([
      axios.get(`${apiURL}/users/inarikawa/items?page=1&per_page=10`, { headers: token }),
      axios.get(`${apiURL}/users/inarikawa`, { headers: token }),
    ]);

    return { articles: response[0].data, user_data: response[1].data };
  },
}
</script>