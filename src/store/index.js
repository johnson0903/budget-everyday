import Vue from 'vue'
import Vuex from 'vuex'

import expenseData from '@/static/billing/expenseData.json'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    expenseData: expenseData
  },
  mutations: {
    addExpenseData (state, data) {
      state.expenseData.push(data)
    },
    editExpenseData (state, { index, data }) {
      if (state.expenseData[index]) {
        state.expenseData.splice(index, 1, data)
      }
    },
    deleteExpenseData (state, index) {
      if (state.expenseData[index]) {
        state.expenseData.splice(index, 1)
      }
    }
  },
  actions: {

  },
  modules: {
  }
})
