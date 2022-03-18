<template>
  <article>
    <CommonArticleHeader>
      <template v-slot:title>{{title}}</template>
    </CommonArticleHeader>
    <CommonArticleBody>
      <div v-html='rendered_body' />
    </CommonArticleBody>
  </article>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData({ params, $config: { apiSecret, apiURL }  }) {
    const { data } = await axios.get(
      `${apiURL}/items/${params.id}`,
      {
        headers: { Authorization: `Bearer ${apiSecret}` }
      }
    )
    return data
  },
}
</script>

<style lang="scss" scoped>

</style>