<template>
  <div class="box">
    <article class="media">
      <div class="media-left">
        <b-checkbox @input="addRemoveSelected(id)"></b-checkbox>
      </div>
      <div class="media-content">
        <div class="content">
          <p>
            <strong>{{ name }}</strong>
          </p>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: 'AccountBox',
  props: {
    name: String,
    id: Number,
    addRemoveSelected: Function
  }
}
</script>
