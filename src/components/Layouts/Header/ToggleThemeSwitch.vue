<template>
  <CommonHeaderToggleThemeSwitch :dark="dark" @toggleTheme="$emit('toggleTheme')" />
</template>

<script>
export default {
  props: {
    dark: Boolean
  },
}
</script>