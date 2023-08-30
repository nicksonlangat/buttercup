
import Api from '@/services/Api'

const state = {
    flowers: [],
}

const getters = {
    getStoredFlowers: (state) => {
      return state.flowers
  }
}

const mutations = {
    SET_FLOWERS(state, flowers) {
      state.flowers = flowers
   }
}

const actions = {
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
  }
}

const flowerModule = {
    state,
    mutations,
    actions,
    getters
}
export default flowerModule;