<template>
<div class="container mx-auto font-base bg-yellow-100">
    <Navbar />
    <div class="grid grid-cols-1 lg:grid-cols-1 gap-2 pb-10 gap-y-8 lg:mt-16 mt-6 mx-6 font-base">

        <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-16">
            <img class="rounded-lg" src="../assets/dafo.jpeg" alt="">
            <div>
                <div class="flex justify-between items-center">
                    <h3 class="text-3xl mt-5 lg:mt-0 font-bold">Dutch Daffodil</h3>
                    <IconCircleCaretDown />
                </div>
                <p class="text-xl mt-5">$ 1.99/ea</p>
                <p class="mt-2">
                    This bright yellow upfacing daffodil introduced in 1938 is nearly as well-known as King Alfred and is renowned for its strength and longevity. Its long trumpet flares at the end, completed by a rolled, deeply notched rim. Highly recommended for perennializing and forcing.
                </p>
                <div class="flex justify-between mt-5">
                    <div class="border border-[#101014] px-6 py-1.5 flex gap-5 rounded-lg">
                        <IconMinus />
                        <p>1</p>
                        <IconPlus />
                    </div>
                    <button class="bg-[#101014] lg:w-2/3 text-white px-6 py-1.5 rounded-lg">Add to basket</button>
                </div>
                <h3 class="mt-20 text-3xl">You may also like</h3>
                <div class="grid grid-cols-2 lg:grid-cols-3 gap-2 gap-y-2 mt-2 font-base">
                    <div>
                        <img class="rounded-xl object-cover w-full" src="../assets/tulip.jpeg" alt="">
                        <div class="flex flex-col lg:flex-row justify-between lg:items-center">
                            <h3 class="text-sm mt-2 font-bold">Brown Double Tulip</h3>
                            <p class="text-xs mt-1.5">$ 1.99/ea</p>
                        </div>

                    </div>
                    <div>
                        <img class="rounded-xl object-cover w-full" src="../assets/tulip.jpeg" alt="">
                        <div class="flex flex-col lg:flex-row justify-between lg:items-center">
                            <h3 class="text-sm mt-2 font-bold">Brown Double Tulip</h3>
                            <p class="text-xs mt-1.5">$ 1.99/ea</p>
                        </div>

                    </div>
                    <div>
                        <img class="rounded-xl object-cover w-full" src="../assets/tulip.jpeg" alt="">
                        <div class="flex flex-col lg:flex-row justify-between lg:items-center">
                            <h3 class="text-sm mt-2 font-bold">Brown Double Tulip</h3>
                            <p class="text-xs mt-1.5">$ 1.99/ea</p>
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
export default {
    name: 'Flower',
    components: {
        Navbar,
        IconCircleCaretDown,
        IconMinus,
        IconPlus
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
