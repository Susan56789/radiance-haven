<template>
  <div id="app">
    <router-view></router-view>
    <ScrollToTop />
  </div>
</template>

<script>
import ScrollToTop from './components/ScrollToTop/index.vue'

export default {
  name: 'App',
  components: {
    ScrollToTop
  }
}
</script>

<style>
#app {
  background-color: var(--color-black);
  color: var(--color-white);
}

a {
  color: var(--color-pink);
}
</style>
