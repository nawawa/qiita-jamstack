<template>
  <div id="switch" class="d-flex align-center">
    <div id="frame" :class="{ 'd-flex frame--on': dark }" @click="$emit('toggleTheme')">
      <div />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dark: Boolean
  }
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

    .frame--on {
      justify-content: flex-end;
    }
  }
</style>