<template>
  <div class="container dp-flex jtf-ct-center">
    <div class="column is-half">
      <textarea class="textarea" rows="10" :value="fbPost()"></textarea>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { fbPost } from '../utils/template'
export default {
  name: 'Result',
  computed: {
    ...mapGetters({
      accountNameList: 'getSelectedAccount'
    })
  },
  methods: {
    fbPost
  }
}
</script>
