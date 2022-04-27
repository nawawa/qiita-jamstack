<template>
  <v-row dense no-gutters class="mb-2 mt-4">
    <v-col :cols="cols">
      <div>
        <p>
          {{created_at.year}}
          年
          {{created_at.month}}
          月
          {{created_at.date}}
          日 投稿
        </p>
      </div>
    </v-col>
    <v-col :cols="cols">
      <div>
        <p>
          {{updated_at.year}}
          年
          {{updated_at.month}}
          月
          {{updated_at.date}}
          日 更新
        </p>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    created_at: Object,
    updated_at: Object,
    xs: Boolean
  },
  computed: {
    cols() {
      return (this.xs)? 6: 2;
    }
  }
}
</script>

<style lang="scss" scoped>
  p {
    font-size: 14px;
    margin: 0 !important;
  }
</style>