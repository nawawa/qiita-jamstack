<template>
  <v-btn
    icon
    class="ma-3"
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