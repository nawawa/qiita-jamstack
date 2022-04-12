<template>
  <v-container>
    <article>
      <CommonArticleHeader>
        <template #type_create>{{'投稿日'}}</template>
        <template #c_year>{{created_at.year}}</template>
        <template #c_month>{{created_at.month}}</template>
        <template #c_date>{{created_at.date}}</template>
        <template #type_update>{{'更新日'}}</template>
        <template #u_year>{{updated_at.year}}</template>
        <template #u_month>{{updated_at.month}}</template>
        <template #u_date>{{updated_at.date}}</template>
        <template #title>{{article.title}}</template>
      </CommonArticleHeader>
      <CommonArticleSection v-html='article.rendered_body' />
    </article>
    <CommonArticleAside />
  </v-container>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      created_at: {
        year: '',
        month: '',
        date: '',
      },
      updated_at: {
        year: '',
        month: '',
        date: '',
      }
    }
  },
  async asyncData({ params, $config: { apiSecret, apiURL }, redirect }) {
    const {data} = await axios.get(
      `${apiURL}/items/${params.id}`,
      {
        headers: { Authorization: `Bearer ${apiSecret}` }
      }
    )
    return (data.user.id === 'inarikawa') ?
      { article: data }:
      redirect({ path: '/404'});
  },
  mounted() {
    const created_at = this.createDateObject(new Date(this.article.created_at));
    this.created_at.year = created_at.year;
    this.created_at.month = created_at.month;
    this.created_at.date = created_at.date;
    const updated_at = this.createDateObject(new Date(this.article.updated_at));
    this.updated_at.year = updated_at.year;
    this.updated_at.month = updated_at.month;
    this.updated_at.date = updated_at.date;
  },
  methods: {
    createDateObject(date_object) {
      return {
        year: date_object.getFullYear(),
        month: date_object.getMonth() + 1,
        date: date_object.getDate()
      };
    },
  }
}
</script>