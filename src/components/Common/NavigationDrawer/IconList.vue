<template>
  <div id="sns-icons">
    <div
      v-for="icon in icons"
      :key="icon.path"
    >
      <v-btn :style="{background: $vuetify.theme.themes[`light`].background}"
        depressed
        icon
      >
        <Link :href="icon.link">
          <SnsIcon :src="icon.path" />
        </Link>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      icons: [
        {
          path: require("@/assets/img/twitter-logo-black.svg"),
          link: "https://twitter.com/nawa3ng"
        },
        {
          path: require("@/assets/img/Wantedly_Mark_Blk.svg"),
          link: "https://www.wantedly.com/id/ryoga_nawa"
        },
        {
          path: require("@/assets/img/github-logo.png"),
          link: "https://github.com/nawawa"
        }
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
  $header-icon-size: 24px;

  img {
    width: $header-icon-size;
    height: $header-icon-size;
  }

  #sns-icons {
    display: flex;
    gap: 0 15%;
    margin: 40px 52px;
  }
</style>