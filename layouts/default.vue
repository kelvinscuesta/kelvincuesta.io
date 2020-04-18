<template>
  <div class="app flex system-sans-serif">
    <NavBar class="fl w-20 pa2" />
    <nuxt class="fr w-80 pa2" />
  </div>
</template>

<script>
import NavBar from '~/components/NavBar';
export default {
  components: {
    NavBar
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
