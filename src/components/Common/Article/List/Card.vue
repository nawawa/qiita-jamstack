<template>
  <v-card
    tile 
  >
    <v-card-title>
      {{ title }}
    </v-card-title>
    <div class="grey--text ms-4">
      {{ '投稿日' + created_at }}
      {{ '更新日' + updated_at }}
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    title: String,
    created_at: String,
    updated_at: String,
  }
}
</script>