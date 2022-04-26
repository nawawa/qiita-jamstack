<template>
  <CommonArticleHeader>
    <template #type_create>{{'投稿日'}}</template>
    <template #c_year>{{created_at.year}}</template>
    <template #c_month>{{created_at.month}}</template>
    <template #c_date>{{created_at.date}}</template>
    <template #type_update>{{'更新日'}}</template>
    <template #u_year>{{updated_at.year}}</template>
    <template #u_month>{{updated_at.month}}</template>
    <template #u_date>{{updated_at.date}}</template>
    <template #title>{{title}}</template>
  </CommonArticleHeader>
</template>

<script>
export default {
  props: {
    created_at: Object,
    updated_at: Object,
    title: String
  }
}
</script>