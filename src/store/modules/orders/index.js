
import Api from '@/services/Api'

const state = {
  orders: [],
}

const mutations = {
  UPDATE_ORDERS (state, payload) {
    state.orders = payload
  }
}

const actions = {

  async getAllOrders({ commit }, { cb }) {
    return await Api()
        .get('/orders/')
        .then((response) => {
            commit('UPDATE_ORDERS', response.data.results)
            if (cb) {
                cb(response.data)
            }
            return response.data
        })
        .catch((error) => {
            return Promise.reject(error)
        })
},
async createOrder({ commit }, { payload, cb }) {
    return await Api()
        .post('orders/', payload)
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
}

const getters = {
  storedOrders (state) {
    return state.orders
  }
}

const orderModule = {
    state,
    mutations,
    actions,
    getters
  }
export default orderModule