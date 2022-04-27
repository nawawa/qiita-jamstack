<template>
  <h1>
    {{ title }}
  </h1>
</template>

<script>
export default {
  props: {
    title: String
  }
}
</script>

<style lang="scss" scoped>
  h1 {
    font-size: 32px;
    font-weight: bold;
    line-height: 1.4;
    margin: 8px 0 48px;
    word-break: break-all;
  }
</style>