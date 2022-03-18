<template>
  <article>
    <header>
      <h1>{{title}}</h1>
    </header>
    <div v-html='rendered_body' />
  </article>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData({ params, $config: { apiSecret, apiURL }  }) {
    const { data } = await axios.get(
      `${apiURL}/items/${params.id}`,
      {
        headers: { Authorization: `Bearer ${apiSecret}` }
      }
    )
    return data
  },
  computed: {
    stylingCodeBlock() {
      return function(elements, styles) {
          Array.prototype.forEach.call(elements, function(el) {
          el.style = styles;
        });
      };
    }
  },
  mounted() {

    this.stylingCodeBlock(
      document.getElementsByClassName('code-frame'), 
      `
        background-color: #364549;
        color: #e3e3e3;
        margin: 1.5em -32px;
        padding: 1em 32px;
        font-size: .9em;
        position: relative;
      `
    );

    this.stylingCodeBlock(
      document.getElementsByTagName('pre'), 
      `
        display: block;
        padding: 0;
        margin: 0;
        font-size: inherit;
        font-family: "SFMono-Regular",Consolas,"Liberation Mono",Menlo,Courier,monospace;
        line-height: inherit;
        color: inherit;
        background-color: transparent;
        border: none;
        border-radius: 0;
        line-height: 1.8;
      `
    );

    this.stylingCodeBlock(
      document.getElementsByClassName('highlight'), 
      `
        padding: .5em;
        overflow-x: auto;
      `
    );

    this.stylingCodeBlock(
      document.querySelectorAll('pre > code'), 
      `
        display: block;
        width: -webkit-fit-content;
        width: -moz-fit-content;
        width: fit-content;
        min-width: 100%;
        -webkit-text-size-adjust: 100%;
        background-color: inherit;
        color: inherit;
        font-family: inherit;
        padding: inherit;
      `
    );

    const span_c_elements = document.getElementsByClassName('c');
  }
}
</script>

<style lang="scss" scoped>

</style>