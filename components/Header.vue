<template>
  <header class="header-grid bb">
    <Name />
    <NavBar />
  </header>
</template>

<script>
import Name from './Name';
import NavBar from './NavBar';
export default {
  components: {
    Name,
    NavBar
  }
};
</script>

<style>
.header-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1.25rem;
}
</style>
