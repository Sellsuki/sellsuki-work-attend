<template>
  <div class="container dp-flex jtf-ct-center">
    <div class="column is-half-desktop">
        <account-box
          v-for="(account, index) in accountList" :key="index"
          :name="account.name"
        ></account-box>
    </div>
  </div>
</template>

<script>
import AccountBox from '../components/AccountBox'
export default {
  name: 'Home',
  components: {
    AccountBox
  },
  data () {
    return {
      accountList: [
        {
          name: 'เวิลด์ 1'
        },
        {
          name: 'เวิลด์ 2'
        }
      ]
    }
  }
}
</script>
