<template>
  <CommonPaginationContainer>
    <NuxtLink v-for="number in length" :key="number" :to="`/articles/page/${number}`">
      <CommonPaginationBtn :page="number" />
    </NuxtLink>
  </CommonPaginationContainer>
</template>

<script>
export default {
  props: {
    page: Number,
    length: Number
  },
}
</script>