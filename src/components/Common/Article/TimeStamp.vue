<template>
  <div>
    <p>
      <slot name="type" />
      <slot name="year" />
      年
      <slot name="month" />
      月
      <slot name="date" />
      日
    </p>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
  p {
    font-size: 14px;
    margin: 0 !important;
  }
</style>