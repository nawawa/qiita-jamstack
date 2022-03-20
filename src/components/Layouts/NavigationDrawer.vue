<template>
  <v-navigation-drawer
    app
    v-model="drawerStatus"
    right
    fixed
    floating
    temporary
  >
    <slot />
  </v-navigation-drawer>
</template>

<script>
export default {
  model: {
    prop: "drawer",
    event: "click"
  },
  props: {
    drawer: {
      type: Boolean
    }
  },
  computed: {
    drawerStatus: {
      get() {
        return this.drawer;
      },
      set(changedStatus) {
        this.$emit("click", changedStatus);
      },
    },
  },
}
</script>