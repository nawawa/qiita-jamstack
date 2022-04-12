<template>
  <h1>
    <slot />
  </h1>
</template>

<script>
export default {
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