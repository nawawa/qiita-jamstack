<template>
  <v-navigation-drawer
    color="background" 
    app
    v-model="drawerStatus"
    right
    fixed
    temporary 
  >
    <CommonNavigationDrawerPageList />
    <template v-slot:append>
      <CommonNavigationDrawerIconList />
    </template>
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