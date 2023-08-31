<template>
<div class="container mx-auto font-base">
    <Navbar />
    <Notification />
    <hr>
    <div class="grid grid-cols-1 lg:grid-cols-1 gap-2 pb-10 gap-y-8 lg:mt-16 mt-6 mx-6 font-base">

        <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-16">
            <img class="rounded-lg" :src="baseURL+flower?.image" alt="">
            <div>
                <div class="flex justify-between items-center">
                    <h3 class="text-3xl mt-5 lg:mt-0 font-bold">{{ flower?.name }}</h3>
                    
                </div>
                <p class="text-xl mt-5 text-emerald-500">$ {{flower?.price}}</p>
                <p class="mt-2">
                    {{ flower?.description }}
                </p>
                <div class="flex justify-between items-center mt-5">
                    <div class="flex w-36">
                       
                            <span @click="quantity--" class="px-2 cursor-pointer py-2 mt-4 border border-[#101014] rounded-lg">
                                <IconMinus class="cursor-pointer" />
                            </span>

                            <input disabled type="text" class="focus:outline-none w-full ml-6 py-2 focus:ring-0 mt-4 bg-inherit" v-model="quantity">
                            <span @click="quantity++" class="px-2 cursor-pointer py-2 mt-4 border border-[#101014] rounded-lg">
                                <IconPlus class="cursor-pointer" />
                            </span>
                        
                    </div>
                    <button @click="addToCart(flower)" class="bg-[#101014] lg:w-2/3 text-white px-6 py-2.5 mt-2 rounded-lg">Add to basket</button>
                </div>
                <div class="flex justify-between items-center">
                    <h3 class="mt-12 text-3xl">You may also like</h3>
                    <a class="mt-12" href="/flowers">View all</a>
                </div>
                <div class="grid grid-cols-2 lg:grid-cols-3 gap-2 gap-y-2 mt-4 font-base">
                    <div class="cursor-pointer" @click="goToFlowerPage(flower.id)" v-for="flower in flowers.slice(-3)">
                        <img class="rounded-xl object-cover w-full" :src="baseURL+flower.image" alt="">
                        <div class="flex flex-col lg:flex-row justify-between lg:items-center">
                            <h3 class="text-sm mt-2 font-bold">{{ flower.name }}</h3>
                            <p class="text-xs text-emerald-500 mt-1.5">$ {{ flower.price }}</p>
                        </div>

                    </div>

                </div>
            </div>
        </div>

    </div>
</div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import {
    IconPlus
} from '@tabler/icons-vue';
import {
    IconMinus
} from '@tabler/icons-vue';
import {
    IconCircleCaretDown
} from '@tabler/icons-vue';
import {
    mapActions,
    mapGetters
} from 'vuex';
import Notification from '@/components/Notification.vue';
export default {
    name: 'Flower',
    components: {
        Navbar,
        IconCircleCaretDown,
        IconMinus,
        IconPlus,
        Notification
    },
    data() {
        return {
            baseURL: process.env.VUE_APP_BASE_URL,
            flowerId: null,
            quantity: 1
        }
    },
    computed: {
        ...mapGetters({
            storedFlowers: 'getStoredFlowers',
        }),
        flower() {
            return this.storedFlowers.find((flower) => {
                return flower.id == this.flowerId
            })
        },
        flowers() {
            return this.storedFlowers.filter((flower) => {
                return flower.id !== this.flowerId
            })
        }
    },
    methods: {
        ...mapActions({
            addCartItem: 'addCartItem',
            getAllFlowers: 'getAllFlowers'
        }),
        addToCart(flower) {
            let payload = {
                "product": flower,
                "quantity": this.quantity
            }
            this.addCartItem({
                payload: payload,
                cb: (() => {
                    this.emitter.emit("showNotification", "added")
                    this.emitter.emit("updateCart", "added")
                })
            })
        },
        goToFlowerPage(uuid) {
            this.$router.push({
                "name": "flower",
                "params": {
                    "id": uuid
                }
            })
            this.flowerId = uuid
        },
        init() {
            this.getAllFlowers({
                cb: () => {}
            })

        },
    },
    mounted() {
        this.flowerId = this.$route.params['id']
        this.init()
    }
}
</script>

<style>
html {
    background-color: #f1f3f1;
}
</style>