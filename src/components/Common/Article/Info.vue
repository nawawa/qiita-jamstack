<template>
  <v-row dense no-gutters>
    <v-col cols='6'>
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
    <v-col cols='6'>
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
  }
}
</script>

<style lang="scss" scoped>
  p {
    font-size: 14px;
    margin: 0 !important;
  }
</style>