<template>
  <div id="app">
    <top-navbar></top-navbar>
    <section class="hero">
      <div class="hero-body">
        <span class="tag is-large">
          {{ nowFormatTime(time) }}
        </span>
        <router-view/>
      </div>
    </section>
  </div>
</template>

<script>
import TopNavbar from './components/TopNavbar'
import { nowFormatTime } from './utils/Datetime'
export default {
  name: 'App',
  components: {
    TopNavbar
  },
  created () {
    setInterval(() => {
      this.time = new Date()
    }, 1000)
  },
  data () {
    return {
      time: new Date()
    }
  },
  methods: {
    nowFormatTime
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
