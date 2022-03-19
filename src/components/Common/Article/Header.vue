<template>
  <header>
    <CommonArticleTimeStamp>
      <template #type>
        <slot name="type_create" />
      </template>
      <template #year>
        <slot name="c_year" />
      </template>
      <template #month>
        <slot name="c_month" />
      </template>
      <template #date>
        <slot name="c_date" />
      </template>
    </CommonArticleTimeStamp>
    <CommonArticleTimeStamp>
      <template #type>
        <slot name="type_update" />
      </template>
      <template #year>
        <slot name="u_year" />
      </template>
      <template #month>
        <slot name="u_month" />
      </template>
      <template #date>
        <slot name="u_date" />
      </template>
    </CommonArticleTimeStamp>
    <CommonArticleTitle>
      <slot name="title" />
    </CommonArticleTitle>
  </header>
</template>

<script>
export default {
}
</script>