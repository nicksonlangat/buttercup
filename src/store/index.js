import { createStore } from 'vuex'
import flowers from'./modules/flowers';
import cart from './modules/cart';
import orders from './modules/orders'
export default createStore({
  modules: {
    flowers,
    cart,
    orders
  }
})
