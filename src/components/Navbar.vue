<template>
     <nav class="lg:flex justify-between">
      <h1 class="text-5xl hidden lg:block font-extrabold">Buttercup</h1>
      <div class="hidden lg:flex gap-5 items-center text-[#101014]">
        <a href="/flowers">Shop</a>
        <a href="/blog">Blog</a>
        <a href="/">About us</a>
        <a href="/account">My profile</a>
        <button @click="showBasket" class="bg-[#101014] text-white px-6 py-1.5 rounded">Basket (4)</button>
      </div>
      <div class="lg:hidden flex justify-between items-center">
        <button @click="showMenu" class="text-[#101014]">
        <IconMenu2 size="36"/>
      </button>
      <h1 class="text-5xl font-extrabold">Buttercup</h1>
      <button class="text-[#101014]">
        <IconShoppingCart @click="showBasket" size="36" />
      </button>
      </div>
      <MobileMenu/>
      <Basket/>
    </nav>
</template>
<script>
import { IconShoppingBag } from '@tabler/icons-vue';
import { IconShoppingCart } from '@tabler/icons-vue';
import { IconMenu2 } from '@tabler/icons-vue';
import MobileMenu from './MobileMenu.vue'
import Basket from './Basket.vue';
export default {
  name: 'Navbar',
  components: {
    IconMenu2,
    IconShoppingBag,
    IconShoppingCart,
    MobileMenu,
    Basket
},
data() {
  return {

  }
},
methods: {
  showMenu() {
    this.emitter.emit("showMenu")
  },
  showBasket() {
    this.emitter.emit("showBasket")
  }
},
mounted() {

}
}
</script>