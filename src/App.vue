<template>
  <LandingPage msg="Welcome to notes landing page  " />
 
</template>

<script>
import LandingPage from './components/LandingPage.vue'

export default {
  name: 'App',
  components: {
    LandingPage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  margin-top: 60px;
}
</style>
