<template>
  <div class="container dp-flex jtf-ct-center">
    <div class="column is-half">
      <div class="box">
        <article class="media">
          <div class="media-left">
            <b-checkbox></b-checkbox>
          </div>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>เวิลด์ 1</strong>
              </p>
            </div>
          </div>
        </article>
      </div>
      <div class="box">
        <article class="media">
          <div class="media-left">
            <b-checkbox></b-checkbox>
          </div>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>เวิลด์ 2</strong>
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
