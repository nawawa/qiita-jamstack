<template>
  <div>
    <img v-bind="$attrs">
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>

  div {

    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 24px;
      height: 24px;
    }

  }

</style>