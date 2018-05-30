<template>
  <div class="container dp-flex jtf-ct-center">
    <div class="column is-half">
      <textarea class="textarea" rows="30" :value="fbPost(selectedAccount, unselectedAccount)"></textarea>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { fbPost } from '../utils/Template'
export default {
  name: 'Result',
  computed: {
    ...mapGetters({
      selectedAccount: 'getSelectedAccount',
      unselectedAccount: 'getUnselectedAccount'
    })
  },
  methods: {
    fbPost
  }
}
</script>
