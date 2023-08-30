
import Api from '@/services/Api'

const state = {
  cartItems: [],
  cartTotal: 0,
}

const mutations = {
  UPDATE_CART (state, payload) {
    state.cartItems = payload.cart;
    state.cartTotal = payload.cart_total_price
  }
}

const actions = {

  async getCartItems({ commit }, { cb }) {
    return await Api()
        .get('/cart/')
        .then((response) => {
            commit('UPDATE_CART', response.data)
            if (cb) {
                cb(response.data)
            }
            return response.data
        })
        .catch((error) => {
            return Promise.reject(error)
        })
},
async addCartItem({ commit }, { payload, cb }) {
    return await Api()
        .post('cart/', payload)
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
  removeCartItem ({ commit }, cartItem) {
    axios.delete('/api/cart/delete', cartItem).then((response) => {
      commit('UPDATE_CART', response.data)
    });
  },
  removeAllCartItems ({ commit }) {
    axios.delete('/api/cart/delete/all').then((response) => {
      commit('UPDATE_CART', response.data)
    });
  }
}

const getters = {
  storedCartItems (state) {
    return state.cartItems
  },
  storedCartTotal(state) {
    return state.cartTotal
  },
  storedCartLength(state) {
    console.log(state.cartItems.length)
    return state.cartItems.length
  }
}

const cartModule = {
    state,
    mutations,
    actions,
    getters
  }
export default cartModule