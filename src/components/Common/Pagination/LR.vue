<template>
  <v-btn
    icon
  >
    <div>
      <slot />
    </div>
  </v-btn>
</template>

<style lang="scss" scoped>
  div {
    width: 16px;
    height: 16px;
    position: relative;
  }
</style>

<script>
export default {
}
</script>