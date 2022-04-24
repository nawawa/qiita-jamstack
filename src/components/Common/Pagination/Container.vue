<template>
  <div>
    <v-row cols="6">
      <slot />
    </v-row>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
  div {
    margin: 50px 0;
    padding: 0 30%;
  }
</style>