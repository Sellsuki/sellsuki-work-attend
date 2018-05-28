<template>
  <nav class="navbar navbar--shadow dp-flex jtf-ct-center" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item" @click="() => this.$router.push({ name: 'Home' })">
          <img src="../assets/images/sellsuki-logo.png" alt="Sellsuki Work Attend" width="112px">
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'TopNavbar'
}
</script>

<style scoped>
.navbar--shadow {
  box-shadow: 0px 5px 20px 0 rgba(0, 0, 0, 0.05);
}
</style>
