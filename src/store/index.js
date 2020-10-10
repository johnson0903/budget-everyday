import Vue from 'vue'
import Vuex from 'vuex'

// import expenseData from '@/static/billing/expenseData.json'
import { db } from './db'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    expenseData: []
  },
  mutations: {
    setExpenseData (state, expenseData) {
      state.expenseData = expenseData
    },
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
    getExpenseDataFromDB ({ commit }) {
      return new Promise((resolve, reject) => {
        db.collection('expense')
          .get()
          .then(querySnapshot => {
            const documents = querySnapshot.docs.map(doc => doc.data())
            commit('setExpenseData', documents)
            resolve()
          })
          .catch(({ response }) => reject(response.status))
      })
    }
  },
  modules: {
  }
})
