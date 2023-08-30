import { createStore } from 'vuex'
import Api from '@/services/Api'

export default createStore({
  state: {
    categories: [],
    flowers: [],
  },
  getters: {
    getStoredCategories: (state) => {
      return state.categories
  },
    getStoredFlowers: (state) => {
      return state.flowers
  },
      
  },
  mutations: {
    SET_CATEGORIES(state, categories) {
      state.categories = categories
  },
    SET_FLOWERS(state, flowers) {
      state.flowers = flowers
  },
  },
  actions: {
    async getAllCategories({ commit, state }, { setResult=true, cb }) {
      return await Api()
          .get('/categories/list')
          .then((response) => {
              if (setResult) {
                  commit('SET_CATEGORIES', response.data.results)
              }
              if (cb) {
                  cb(response.data.results)
              }
              return response.data.results
          })
          .catch((error) => {
              return Promise.reject(error)
          })
  },
  
  async getAllFlowers({ commit, state }, { setResult=true, cb }) {
  return await Api()
      .get(`/flowers/list/`)
      .then((response) => {
          if (setResult) {
              commit('SET_FLOWERS', response.data.results)
          }
          if (cb) {
              cb(response.data.results)
          }
          return response.data.results
      })
      .catch((error) => {
          return Promise.reject(error)
      })
  },
  async createOrder({ commit }, { payload, cb }) {
    return await Api()
        .post('orders/create/', payload)
        .then((response) => {
            if (cb) {
                cb(response.data)
            }
            return response.data
        })
        .catch((error) => {
            return Promise.reject(error)
        })
  },
  },
  modules: {
  }
})
