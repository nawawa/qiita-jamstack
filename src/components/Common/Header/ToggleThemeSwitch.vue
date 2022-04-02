<template>
  <div id="switch" class="d-flex align-center">
    <div id="frame">
      <div />
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
  #switch {
    height: 100%;
    #frame {
      width: 60px;
      height: 30px;
      border: 1px solid var(--v-font-base);
      border-radius: 50px;
      div {
        height: 100%;
        width: 50%;
        background: var(--v-font-base);
        border-radius: 50%;
        border: 4px solid var(--v-background-base);
      }
    }
  }
</style>