<template>
  <main>
    <h1>{{title}}</h1>
    <div>{{body}}</div>
  </main>
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
  }
}
</script>