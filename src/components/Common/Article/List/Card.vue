<template>
  <v-card
    tile 
    flat
  >
    <v-card-title :class="{'text-subtitle-1':xs}">
      {{ title }}
    </v-card-title>
    <v-card-text>
      <v-chip-group>
        <v-chip v-for="tag in tags" :key="tag.length" class="text-caption">
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
  },
  computed: {
    xs() {
      const breakpoint = this.$vuetify.breakpoint.name;
      return (breakpoint === `xs`) ? true: false;
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
