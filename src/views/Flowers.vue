<template>
<div class="container mx-auto font-base">
    <Navbar />
    <div class="grid grid-cols-2 lg:grid-cols-3 gap-2 gap-y-2 mt-5 mx-6 lg:mx-6 font-base">
        <div v-for="flower in flowers">
            <img class="rounded lg:h-80 object-cover w-full" :src="baseURL+flower.image" alt="">
           <div class="flex flex-col lg:flex-row justify-between lg:items-center">
            <h3 class="text-lg lg:text-2xl mt-2 font-bold truncate">{{ flower.name }}</h3>
            <p class="text-xl">$ {{flower.price}}/ea</p>
           </div>
           <button class="border border-[#101014] mt-4 hidden lg:block  px-6 py-1.5 w-full rounded-lg">Add to basket</button>
        </div>
        
    </div>
</div>
</template>
<script>
import Navbar from '@/components/Navbar.vue';
import {
    mapActions,
    mapGetters
} from 'vuex';
export default {
    name: 'Flowers',
    components: {
       Navbar
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
                return flower.name.toLowerCase().includes(this.text.toLowerCase()) || flower.category.name.toLowerCase().includes(this.text.toLowerCase())
            }) 
        }
    },
    methods: {
        ...mapActions({
            getAllFlowers: 'getAllFlowers'
        }),
        init() {
            this.getAllFlowers({
                cb: () => {}
            })
        },
    },
    mounted() {
        this.init()
    }
}
</script>