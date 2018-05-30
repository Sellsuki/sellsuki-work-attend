import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  accountList: [
    {
      id: 1,
      name: 'เวิลด์ 1'
    },
    {
      id: 2,
      name: 'เวิลด์ 2'
    }
  ],
  selectedAccountIdArray: []
}

const getters = {
  getSelectedAccount: state => state.accountList.filter(account => state.selectedAccountIdArray.indexOf(account.id) > -1).map(account => account.name),
  getUnselectedAccount: state => state.accountList.filter(account => !(state.selectedAccountIdArray.indexOf(account.id) > -1)).map(account => account.name)
}

const mutations = {
  SET_SELECTED_ACCOUNT_ID_ARRAY (state, payload) {
    state.selectedAccountIdArray = payload
  }
}

const store = () => {
  return new Vuex.Store({
    state,
    mutations,
    getters
  })
}

export default store
