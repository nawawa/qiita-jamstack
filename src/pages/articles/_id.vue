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
      return (elements, styles) => {
          Array.prototype.forEach.call(elements, function(el) {
          el.style = styles;
        });
      };
    },
  },
  mounted() {
    /**
     * 
     * Qiitaからコピってきたスタイルを当てる
     * 
     */
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

    this.stylingCodeBlock(
      document.getElementsByClassName('c'),
      `
        color: #9dabae;
      `
    );

    this.stylingCodeBlock(
      document.getElementsByClassName('c1'),
      `
        color: #9dabae;
      `
    );

    this.stylingCodeBlock(
      document.getElementsByClassName('k'),
      `
        color: #ebd247;
      `
    );

    this.stylingCodeBlock(
      document.getElementsByClassName('kd'),
      `
        color: #ebd247;
      `
    );

    this.stylingCodeBlock(
      document.getElementsByClassName('s'),
      `
        color: #41b7d7;
      `
    );

    this.stylingCodeBlock(
      document.getElementsByClassName('s1'),
      `
        color: #41b7d7;
      `
    );

    this.stylingCodeBlock(
      document.getElementsByClassName('o'),
      `
        color: #ff8095;
      `
    );

    this.stylingCodeBlock(
      document.getElementsByClassName('se'),
      `
        color: #a980f5;
      `
    );

    this.stylingCodeBlock(
      document.getElementsByClassName('nl'),
      `
        color: #e3e3e3;
      `
    );

    this.stylingCodeBlock(
      document.getElementsByClassName('nf'),
      `
        color: #8bdf4c;
      `
    );

    this.stylingCodeBlock(
      document.getElementsByClassName('dl'),
      `
        color: #41b7d7;
      `
    );

    this.stylingCodeBlock(
      document.getElementsByClassName('m'),
      `
        color: #a980f5;
      `
    );

    this.stylingCodeBlock(
      document.getElementsByClassName('m1'),
      `
        color: #a980f5;
      `
    );

    this.stylingCodeBlock(
      document.getElementsByClassName('p'),
      `
        color: #e3e3e3;
      `
    );

    this.stylingCodeBlock(
      document.getElementsByClassName('ell'),
      `
        border-bottom: 2px dotted #c01b1b;
        color: #ddd;
      `
    );

    this.stylingCodeBlock(
      document.getElementsByClassName('hdl'),
      `
        display: block;
        background-color: rgba(255,128,149,.3);
      `
    );

    this.stylingCodeBlock(
      document.getElementsByClassName('hil'),
      `
        display: block;
        background-color: rgba(139,223,76,.3);
      `
    );

    this.stylingCodeBlock(
      document.getElementsByClassName('na'),
      `
        background-color: transparent;
        font-weight: normal;
        color: #8bdf4c;
      `
    );

    this.stylingCodeBlock(
      document.getElementsByClassName('nb'),
      `
        color: #e3e3e3;
      `
    );

    this.stylingCodeBlock(
      document.getElementsByClassName('nc'),
      `
        background-color: transparent;
        font-weight: normal;
        color: #8bdf4c;
      `
    );

    this.stylingCodeBlock(
      document.getElementsByClassName('nx'),
      `
        background-color: transparent;
        font-weight: normal;
        color: #8bdf4c;
      `
    );

  }
}
</script>

<style lang="scss" scoped>

</style>