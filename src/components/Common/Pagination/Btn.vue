<template>
  <v-col>
    <div>
      {{ page_number }}
    </div>
  </v-col>
</template>

<script>
export default {
  props: {
    page_number: Number,
  },
}
</script>

<style lang="scss" scoped>
  div {
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
  }
</style>