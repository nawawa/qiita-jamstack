<template>
  <v-btn
    icon
    class="ma-3"
    :class="{'now_page':page_number===now_page}"
  >
    <div >
      {{ page_number }}
    </div>
  </v-btn>
</template>

<script>
export default {
  props: {
    page_number: Number,
    now_page: Number
  },
}
</script>

<style lang="scss" scoped>
  .now_page {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 2px solid var(--v-font-base);
  }
</style>