<template>
<nav class="lg:flex justify-between">
    <a href="/flowers" class="text-5xl hidden lg:block font-extrabold">Buttercup</a>
    <div class="hidden lg:flex gap-5 items-center text-[#101014]">
        <a href="/flowers">Shop</a>
        <a href="/">Blog</a>
        <a href="/">About us</a>
        <a href="/">My profile</a>
        <button @click="showBasket" class="bg-[#101014] text-white px-6 py-1.5 rounded">Basket ({{ cartLength }})</button>
    </div>
    <div class="lg:hidden flex justify-between items-center">
        <button @click="showMenu" class="text-[#101014]">
            <IconMenu2 size="36" />
        </button>
        <a href="/flowers" class="text-5xl font-extrabold">Buttercup</a>
        <button class="text-[#101014]">
            <IconShoppingCart @click="showBasket" size="36" />
        </button>
    </div>
    <MobileMenu />
    <Basket />
</nav>
</template>

<script>
import {
    IconShoppingCart
} from '@tabler/icons-vue';
import {
    IconMenu2
} from '@tabler/icons-vue';
import MobileMenu from './MobileMenu.vue'
import Basket from './Basket.vue';
import { mapGetters, mapActions } from 'vuex';
export default {
    name: 'Navbar',
    components: {
        IconMenu2,
        IconShoppingCart,
        MobileMenu,
        Basket
    },
    data() {
        return {

        }
    },
    computed: {
        ...mapGetters({
            storedCartLength: 'storedCartLength'
        }),
        cartLength() {
            return this.storedCartLength
        }
    },
    methods: {
        ...mapActions({
            getCartItems: 'getCartItems'
        }),
        init() {
            this.getCartItems({
                cb: () => {}
            })
        },
        showMenu() {
            this.emitter.emit("showMenu")
        },
        showBasket() {
            this.emitter.emit("showBasket")
        }
    },
    mounted() {
        this.init()
        this.emitter.on("updateCart", value => {
            this.init()
        })
    }
}
</script>
