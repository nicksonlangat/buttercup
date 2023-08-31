<template>
<div class="container mx-auto font-base">
    <Navbar />
    <Notification />
    <hr>
    <div class="hidden lg:flex ">
        <div class="font-base w-2/3 text-white text-2xl flex flex-col justify-center mx-6 rounded-md mt-5" :style="{
         height: '300px',
         backgroundPosition: 'center center',
         backgroundSize: 'cover',
         backgroundImage: `url(${require('@/assets/' + 'hero7.jpg')})` }">
            <div class="ml-4 flex flex-col gap-2 justify-center mt-20 text-4xl">
                <h3>Free delivery</h3>
                <h3>For Next 3 Orders</h3>
                <h3 class="text-yellow-400 inline-flex gap-1 items-center uppercase">order now
                    <IconArrowRight />
                </h3>
            </div>

        </div>
        <div class="font-base w-1/3 text-white text-2xl flex flex-col justify-center mx-6 rounded-md mt-5" :style="{
         height: '300px',
         backgroundPosition: 'center center',
         backgroundSize: 'cover',
         backgroundImage: `url(${require('@/assets/' + 'hero10.jpg')})` }">
            

        </div>
    </div>
    <div class="mx-6 flex justify-between mt-10 font-base">
        <h3 class="hidden lg:block text-4xl font-bold">Featured Flowers</h3>
        <div class="relative w-3/5">
            <input v-model="text" type="text" class="bg-white py-2 px-6 pl-10 lg:w-96 w-72 rounded-md focus:ring-0 focus:outline-none" placeholder="Search flowers">
            <IconSearch class="absolute top-2 text-gray-400 left-3" />
        </div>
        <span class="px-2 py-2 bg-white rounded-md">

            <IconAdjustmentsHorizontal />
        </span>
    </div>
    <div class="font-base lg:hidden text-white text-2xl flex flex-col justify-center mx-6 rounded-md mt-5" :style="{
         height: '170px',
         backgroundPosition: 'center center',
         backgroundSize: 'cover',
         backgroundImage: `url(${require('@/assets/' + 'hero7.jpg')})` }">
        <div class="ml-4 flex flex-col gap-2 justify-center">
            <h3>Free delivery</h3>
            <h3>For Next 3 Orders</h3>
            <h3 class="text-yellow-400 inline-flex gap-1 items-center uppercase">order now
                <IconArrowRight />
            </h3>
        </div>
    </div>
    <ul class="mx-6 relative lg:hidden grid grid-cols-5 mt-5 font-base">
        <li class="underline font-bold">All</li>
        <li>Tulips</li>
        <li>Bulbs</li>
        <li>Crocus</li>
        <li>Daffodils</li>
    </ul>
    <div class="grid grid-cols-2 lg:grid-cols-5 gap-5 gap-y-5 mt-10 mx-6 font-base">
        <div v-for="flower in flowers" class="rounded-b-md pb-3 bg-white">
            <img @click="goToFlowerPage(flower.id)" class="cursor-pointer rounded-t-md w-full object-cover" :src="baseURL+flower.image" alt="">
            <div class="flex ml-2 mr-2 flex-col justify-between">
                <h3 @click="goToFlowerPage(flower.id)" class=" mt-2 cursor-pointer font-bold truncate">{{ flower.name }}</h3>

                <div class="flex justify-between">
                    <div>
                        <span class="text-gray-300 text-xs">{{ flower.category.name }}</span>
                        <p class="text-xl text-emerald-500">$ {{flower.price}}</p>
                    </div>

                    <span @click="addToCart(flower)" class="px-1 cursor-pointer py-1 h-8 mt-4 bg-[#101014] text-white rounded">
                        <IconPlus />
                    </span>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Notification from '@/components/Notification.vue';
import {
    IconSearch
} from '@tabler/icons-vue';
import {
    IconPlus
} from '@tabler/icons-vue';
import {
    IconArrowRight
} from '@tabler/icons-vue';
import {
    IconShoppingBag
} from '@tabler/icons-vue';
import {
    IconAdjustmentsHorizontal
} from '@tabler/icons-vue';
import {
    Icon123
} from '@tabler/icons-vue';
import {
    mapActions,
    mapGetters
} from 'vuex';
export default {
    name: 'Flowers',
    components: {
        Navbar,
        Notification,
        Icon123,
        IconAdjustmentsHorizontal,
        IconSearch,
        IconShoppingBag,
        IconPlus,
        IconArrowRight
    },
    data() {
        return {
            text: "",
            baseURL: process.env.VUE_APP_BASE_URL,
        }
    },
    computed: {
        ...mapGetters({
            storedFlowers: 'getStoredFlowers'
        }),
        flowers() {
            return this.storedFlowers.filter((flower) => {
                return flower.name.toLowerCase().includes(this.text.toLowerCase())
            })
        }
    },
    methods: {
        ...mapActions({
            getAllFlowers: 'getAllFlowers',
            addCartItem: 'addCartItem'
        }),
        init() {
            this.getAllFlowers({
                cb: () => {}
            })
        },
        goToFlowerPage(uuid) {
            this.$router.push({
                "name": "flower",
                "params": {
                    "id": uuid
                }
            })
        },
        addToCart(flower) {
            let payload = {
                "product": flower,
                "quantity": 1
            }
            this.addCartItem({
                payload: payload,
                cb: (() => {
                    this.emitter.emit("showNotification", "added")
                    this.emitter.emit("updateCart", "added")
                })
            })
        }
    },
    mounted() {
        this.init()
    }
}
</script>


<style>
html {
    background-color: #f1f3f1;
}
</style>