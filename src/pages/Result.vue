<template>
  <div class="container dp-flex jtf-ct-center">
    <div class="column is-half">
      <textarea class="textarea" rows="10" :value="selectedAccountIdArray"></textarea>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Result',
  computed: {
    ...mapState(['selectedAccountIdArray'])
  }
}
</script>
