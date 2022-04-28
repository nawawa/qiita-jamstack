<template>
  <v-btn
    icon
    :x-small="xs"
    class="ma-3"
    :disabled="disabled"
  >
    <div>
      <slot />
    </div>
  </v-btn>
</template>

<script>
export default {
  props: {
    xs: Boolean,
    left: Boolean,
    right: Boolean,
    disabled: Boolean
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