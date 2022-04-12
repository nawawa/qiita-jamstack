<template>
  <v-card
    tile 
  >
    <v-card-title>
      {{ title }}
    </v-card-title>
    <v-card-text>
      <v-chip-group>
        <v-chip v-for="tag in tags" :key="tag.length">
          {{ tag.name }}
        </v-chip>
      </v-chip-group>
    </v-card-text>
    <v-card-text>
      <div class="grey--text">
        {{ '投稿日' + created_at }}
        {{ '更新日' + updated_at }}
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    title: String,
    created_at: String,
    updated_at: String,
    tags: Array,
  }
}
</script>