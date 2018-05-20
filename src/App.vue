<template>
  <div id="app">
    <top-navbar></top-navbar>
    <section class="hero">
      <div class="hero-body">
        <router-view/>
      </div>
    </section>
  </div>
</template>

<script>
import TopNavbar from './components/TopNavbar'
export default {
  name: 'App',
  components: {
    TopNavbar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
