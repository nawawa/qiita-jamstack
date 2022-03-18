<template>
  <article>
    <p>{{ user_id }}</p>
    <CommonArticleHeader>
      <template v-slot:title>{{article.title}}</template>
    </CommonArticleHeader>
    <CommonArticleBody>
      <div v-html='article.rendered_body' />
    </CommonArticleBody>
  </article>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData({ params, $config: { apiSecret, apiURL }, redirect }) {
    const {data} = await axios.get(
      `${apiURL}/items/${params.id}`,
      {
        headers: { Authorization: `Bearer ${apiSecret}` }
      }
    )
    return (data.user.id === 'inarikawa') ?
      { article: data, user_id: data.user.id }:
      redirect({ path: '/404'});
  },
}
</script>