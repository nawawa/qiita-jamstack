<template>
  <v-btn
    icon
    :x-small="xs"
    class="ma-3"
  >
    <div>
      <slot />
    </div>
  </v-btn>
</template>

<script>
export default {
  props: {
    xs: Boolean
  }
}
</script>

<style lang="scss" scoped>
  div {
    width: 16px;
    height: 16px;
    position: relative;
  }
</style>