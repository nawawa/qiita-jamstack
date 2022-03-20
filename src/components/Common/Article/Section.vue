<template>
  <v-container>
    <section>
      <slot />
    </section>
  </v-container>
</template>

<script>
export default {
  computed: {
    styling() {
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
    this.styling(
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

    this.styling(
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

    this.styling(
      document.getElementsByClassName('highlight'), 
      `
        padding: .5em;
        overflow-x: auto;
      `
    );

    this.styling(
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

    this.styling(
      document.getElementsByClassName('c'),
      `
        color: #9dabae;
      `
    );

    this.styling(
      document.getElementsByClassName('c1'),
      `
        color: #9dabae;
      `
    );

    this.styling(
      document.getElementsByClassName('k'),
      `
        color: #ebd247;
      `
    );

    this.styling(
      document.getElementsByClassName('kd'),
      `
        color: #ebd247;
      `
    );

    this.styling(
      document.getElementsByClassName('s'),
      `
        color: #41b7d7;
      `
    );

    this.styling(
      document.getElementsByClassName('s1'),
      `
        color: #41b7d7;
      `
    );

    this.styling(
      document.getElementsByClassName('o'),
      `
        color: #ff8095;
      `
    );

    this.styling(
      document.getElementsByClassName('se'),
      `
        color: #a980f5;
      `
    );

    this.styling(
      document.getElementsByClassName('nl'),
      `
        color: #e3e3e3;
      `
    );

    this.styling(
      document.getElementsByClassName('nf'),
      `
        color: #8bdf4c;
      `
    );

    this.styling(
      document.getElementsByClassName('dl'),
      `
        color: #41b7d7;
      `
    );

    this.styling(
      document.getElementsByClassName('m'),
      `
        color: #a980f5;
      `
    );

    this.styling(
      document.getElementsByClassName('m1'),
      `
        color: #a980f5;
      `
    );

    this.styling(
      document.getElementsByClassName('p'),
      `
        color: #e3e3e3;
      `
    );

    this.styling(
      document.getElementsByClassName('ell'),
      `
        border-bottom: 2px dotted #c01b1b;
        color: #ddd;
      `
    );

    this.styling(
      document.getElementsByClassName('hdl'),
      `
        display: block;
        background-color: rgba(255,128,149,.3);
      `
    );

    this.styling(
      document.getElementsByClassName('hil'),
      `
        display: block;
        background-color: rgba(139,223,76,.3);
      `
    );

    this.styling(
      document.getElementsByClassName('na'),
      `
        background-color: transparent;
        font-weight: normal;
        color: #8bdf4c;
      `
    );

    this.styling(
      document.getElementsByClassName('nb'),
      `
        color: #e3e3e3;
      `
    );

    this.styling(
      document.getElementsByClassName('nc'),
      `
        background-color: transparent;
        font-weight: normal;
        color: #8bdf4c;
      `
    );

    this.styling(
      document.getElementsByClassName('nx'),
      `
        background-color: transparent;
        font-weight: normal;
        color: #8bdf4c;
      `
    );

    this.styling(
      document.getElementsByTagName('img'),
      `
        margin: 1.5em 0;
        height: auto;
        max-width: 100%;
        border-style: none;
      `
    );

    this.styling(
      document.getElementsByTagName('hr'),
      `
        margin: 3em 0;
        border: 0;
        height: 2px;
        background-color: #ddd;
        overflow: visible;
      `
    );

    this.styling(
      document.getElementsByTagName('h2'),
      `
        font-size: 1.6em;
        border-bottom: 1px solid #ddd;
        padding-bottom: 0.1em;
        font-weight: bold;
        line-height: 1.5;
        font-feature-settings: "palt";
        margin-top: 2.2em;
        margin-bottom: 2.4rem;
        cursor: pointer;
        position: relative;
      `
    );

    this.styling(
      document.getElementsByTagName('h3'),
      `
        font-size: 1.4em;
        font-weight: bold;
        line-height: 1.5;
        font-feature-settings: "palt";
        margin-top: 2.2em;
        margin-bottom: 2.4rem;
        cursor: pointer;
        position: relative;
      `
    );
  }
}
</script>

<style lang="scss" scoped>

</style>