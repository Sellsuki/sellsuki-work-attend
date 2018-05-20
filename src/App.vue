<template>
  <div id="app">
    <nav class="navbar" style="box-shadow: 0px 5px 20px 0 rgba(0, 0, 0, 0.05); display: flex; justify-content: center;" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item">
          <h1 class="title is-2">
            Sellsuki Work Attend
          </h1>
        </a>
      </div>
    </nav>
    <section class="hero">
      <div class="hero-body">
        <router-view/>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'App'
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
