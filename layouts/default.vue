<template>
  <div class="ph3 avenir bg-blue white flex flex-column flex-grow-1">
    <Header class="pv2 f2" />
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
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

html {
  font-size: 16px;
  word-spacing: 1px;
  /* -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased; */
  box-sizing: border-box;
}

body {
  font-size: 16px;
  min-height: 100vh;
  word-spacing: 1px;
  display: flex;
  flex-direction: column;
}

#__nuxt {
  flex-grow: 1;
  display: flex;
}

#__layout {
  display: flex;
  flex-grow: 1;
}
.flex-grow-1 {
  flex-grow: 1;
}

.loud-yellow:hover {
  color: #ffff00;
}
</style>
