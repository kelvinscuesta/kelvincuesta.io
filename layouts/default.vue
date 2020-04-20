<template>
  <div class="ph3 avenir bg-blue white">
    <Header class="pv2 f6" />
    <nuxt class="pv3" />
    <Footer class="mt3" />
  </div>
</template>

<script>
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';
export default {
  components: {
    Header,
    Footer
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
