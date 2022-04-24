<template>
  <v-btn
    icon
    class="ma-3"
  >
    {{ page_number }}
  </v-btn>
</template>

<script>
export default {
  props: {
    page_number: Number,
  },
}
</script>