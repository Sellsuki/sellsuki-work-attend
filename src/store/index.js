import Vuex from 'vuex'

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

const mutations = {
  SET_SELECTED_ACCOUNT_ID_ARRAY (state, payload) {
    state.selectedAccountIdArray = payload
  }
}

const store = () => {
  return new Vuex.Store({
    state,
    mutations
  })
}

export default store
