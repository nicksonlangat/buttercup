<template>
<div class="container mx-auto font-base">
    <Navbar />
    <div class="grid grid-cols-2 lg:grid-cols-3 gap-2 gap-y-8 mt-5 mx-6 lg:mx-6 font-base">
        <div>
            <img class="rounded lg:h-80 object-cover w-full" src="../assets/tulip.jpeg" alt="">
           <div class="flex flex-col lg:flex-row justify-between lg:items-center">
            <h3 class="text-lg lg:text-2xl mt-2 font-bold">Brown Double Tulip</h3>
            <p class="text-xl">$ 1.99/ea</p>
           </div>
           <button class="border border-[#101014] mt-4 hidden lg:block  px-6 py-1.5 w-full rounded-lg">Add to basket</button>
        </div>
        <div>
            <img class="rounded" src="../assets/dafo.jpeg" alt="">
            <h3 class="text-lg lg:text-2xl mt-2 font-bold">Dutch  Daffodil</h3>
            <p class="text-xl">$ 1.99/ea</p>
        </div>
        <div>
            <img class="rounded" src="../assets/bel.jpeg" alt="">
            <h3 class="text-lg lg:text-2xl mt-2 font-bold">Belamcanda Chine</h3>
            <p class="text-xl">$ 1.99/ea</p>
        </div>
        <div>
            <img class="rounded" src="../assets/iris.jpeg" alt="">
            <h3 class="text-lg lg:text-2xl mt-2 font-bold">Iris Reticulata</h3>
            <p class="text-xl">$ 1.99/ea</p>
        </div>
        <div>
            <img class="rounded" src="../assets/fern.jpeg" alt="">
            <h3 class="text-lg lg:text-2xl mt-2 font-bold">Fern Athyrium</h3>
            <p class="text-xl">$ 1.99/ea</p>
        </div>
        <div>
            <img class="rounded" src="../assets/daisy.jpg" alt="">
            <h3 class="text-lg lg:text-2xl mt-2 font-bold">Daisy</h3>
            <p class="text-xl">$ 1.99/ea</p>
        </div>
        <div>
            <img class="rounded" src="../assets/canna.jpeg" alt="">
            <h3 class="text-lg lg:text-2xl mt-2 font-bold">Canna Pink</h3>
            <p class="text-xl">$ 1.99/ea</p>
        </div>
        <div>
            <img class="rounded" src="../assets/gera.jpeg" alt="">
            <h3 class="text-lg lg:text-2xl mt-2 font-bold">Gera Maculatum</h3>
            <p class="text-xl">$ 1.99/ea</p>
        </div>
    </div>
</div>
</template>
<script>
import Navbar from '@/components/Navbar.vue';
export default {
    name: 'Flowers',
    components: {
        Navbar
    },
    data() {
        return {

        }
    },
    methods: {},
    mounted() {

    }
}
</script>
<style>
</style>

