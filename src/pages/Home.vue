<template>
  <div class="container dp-flex jtf-ct-center">
    <div class="column is-half-desktop">
        <account-box
          v-for="(account, index) in accountList" :key="index"
          :name="account.name"
          :id="account.id"
          :addRemoveSelected="addRemoveSelected"
        ></account-box>
        <a class="button is-success" @click="submitAccount">ตกลง</a>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AccountBox from '../components/AccountBox'
export default {
  name: 'Home',
  components: {
    AccountBox
  },
  data () {
    return {
      selectedIdList: []
    }
  },
  computed: {
    ...mapState(['accountList'])
  },
  methods: {
    addRemoveSelected (newId) {
      if (this.selectedIdList.indexOf(newId) >= 0) {
        this.selectedIdList = this.selectedIdList.filter(id => id !== newId)
      } else {
        this.selectedIdList.push(newId)
      }
    },
    submitAccount () {
      this.$store.commit('SET_SELECTED_ACCOUNT_ID_ARRAY', this.selectedIdList)
      this.$router.push({ name: 'Result' })
    }
  }
}
</script>
