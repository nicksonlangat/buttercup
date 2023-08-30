import { createStore } from 'vuex'
import flowers from'./modules/flowers';
import cart from './modules/cart';

export default createStore({
  modules: {
    flowers,
    cart
  }
})
