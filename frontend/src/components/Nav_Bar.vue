<template>
  <nav class="navbar navbar-expand-lg navbar-light align-items-center" id="navbar">
    <slot></slot>
  </nav>
</template>

<script>
export default {
  name: "Nav_Bar",

  components: {},
};
</script>

<style scoped>
#navbar {
  background-color: purple;
}
</style>
