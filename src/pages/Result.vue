<template>
  <div class="container dp-flex jtf-ct-center">
    <div class="column is-half">
      <textarea class="textarea" rows="10" :value="accountNameList"></textarea>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Result',
  computed: {
    ...mapGetters({
      accountNameList: 'getSelectedAccount'
    })
  }
}
</script>
