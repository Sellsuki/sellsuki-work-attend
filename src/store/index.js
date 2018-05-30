import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  accountList: [
    {
      id: 1,
      name: '🛳 ไสว เพียงชายคนนี้ไม่ใช่ผู้วิเศษ 🐯🐯🐯'
    },
    {
      id: 2,
      name: '🚣‍♀️ เฟ้น'
    },
    {
      id: 3,
      name: '🛳 พี่บอล'
    },
    {
      id: 4,
      name: '🚤 ณัฐ'
    },
    {
      id: 5,
      name: '🛳 พี่เฟิร์น'
    },
    {
      id: 6,
      name: '🛳 พี่โอม'
    },
    {
      id: 7,
      name: '🚣‍♀️ มิ้น'
    },
    {
      id: 8,
      name: '🛥 พี่วิทย์'
    },
    {
      id: 9,
      name: '🚤 พี่นิค '
    },
    {
      id: 10,
      name: '🛥 มะ(ขิ่น)ปราง'
    },
    {
      id: 11,
      name: '🛳 พี่แจ็ค'
    },
    {
      id: 12,
      name: '⛴ พี่เต้ย'
    },
    {
      id: 13,
      name: '🛥 พี่คิม'
    },
    {
      id: 14,
      name: '🛳 พี่หนุ่ม'
    },
    {
      id: 15,
      name: '🛳 พี่เหิน'
    },
    {
      id: 15,
      name: '🛳 ข้าวฟ่าง'
    },
    {
      id: 16,
      name: '🚤 พี่บิ๊ก 🤔'
    },
    {
      id: 17,
      name: '🚤 พี่แน๊ค'
    },
    {
      id: 18,
      name: '🛥 พี่เปิ้ล'
    },
    {
      id: 19,
      name: '🚢 พี่เต้'
    },
    {
      id: 20,
      name: '🛥 พี่วัฒน์'
    },
    {
      id: 21,
      name: '🚢 พี่อั๋น'
    },
    {
      id: 22,
      name: '🐷 พี่แป้ง'
    },
    {
      id: 23,
      name: '🚣‍♀️ แต๊ก'
    },
    {
      id: 24,
      name: '🛥 เวิลด์'
    },
    {
      id: 24,
      name: '🚣‍♀️ อั้ม ใสใสวัยรุ่นชอบ'
    },
    {
      id: 25,
      name: '🛳 พี่ไบร์ท'
    },
    {
      id: 26,
      name: '🚢 พี่หวาน'
    },
    {
      id: 27,
      name: '⛴ พี่มาร์ค'
    },
    {
      id: 28,
      name: '🛥 ต้น'
    },
    {
      id: 29,
      name: '🚤 พี่บอย'
    },
    {
      id: 30,
      name: '🛳 พี่ม่อน'
    },
    {
      id: 31,
      name: '🛥 พี่จูน'
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
