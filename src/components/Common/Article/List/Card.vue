<template>
  <v-card
    flat
    tile
    color="background"
  >
    <v-card-title :class="{'text-subtitle-1':xs}">
      {{ title }}
    </v-card-title>
    <v-card-text>
      <v-chip-group column>
        <v-chip 
          v-for="tag in tags" :key="tag.length" 
          :small="xs" 
          outlined
        >
          {{ tag.name }}
        </v-chip>
      </v-chip-group>
    </v-card-text>
    <v-card-text>
      <div class="font--text--lighten-2 text-caption">
        {{ '投稿日：' + created_at }}
        {{ '更新日：' + updated_at }}
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
  },
  computed: {
    xs() {
      return (this.$vuetify.breakpoint.name === `xs`) ? true: false;
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
