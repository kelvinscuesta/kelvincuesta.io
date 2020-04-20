<template>
  <div class="app ph3 avenir bg-washed-blue navy debug-grid">
    <Header class="pt2" />
    <nuxt class="" />
  </div>
</template>

<script>
import Header from '~/components/Header.vue';
export default {
  components: {
    Header
  }
};
</script>
<style>
html {
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

.app {
  width: 100vw;
  height: 100vh;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0px;
}
</style>
