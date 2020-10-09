import Vue from 'vue'
import Vuex from 'vuex'

import expenseData from '@/static/billing/expenseData.json'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    expenseData: expenseData
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
