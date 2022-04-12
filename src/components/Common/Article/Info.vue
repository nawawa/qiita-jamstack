<template>
  <v-row dense no-gutters>
    <v-col cols='2'>
      <slot name="created_at" />
    </v-col>
    <v-col cols='2'>
      <slot name="updated_at" />
    </v-col>
  </v-row>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
v-col {
  padding: 0;
}
</style>