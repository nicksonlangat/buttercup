<template>
<TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="toggleModal" class="relative z-10">
        <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100" leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
            <div class="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <div class="fixed inset-0 overflow-y-auto font-base">
            <div class="flex mt-16 items-center justify-center p-4 text-center">
                <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95" enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100" leave-to="opacity-0 scale-95">
                    <DialogPanel class="w-full max-w-md lg:max-w-lg transform overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all">

                        <div class="flex justify-between items-center">
                            <h1 class="text-4xl font-extrabold">My basket</h1>
                            <IconX size="32" @click="toggleModal" />
                        </div>
                        <div class="flex mt-8 flex-col gap-5">

                            <div class="grid grid-cols-2 gap-5 ">
                                <img class="rounded-xl lg:h-40 w-full object-cover" src="../assets/tulip.jpeg" alt="">
                                <div class="flex flex-col gap-6">
                                    <div>
                                        <h3 class="text-lg font-bold">Brown Double Tulip</h3>
                                        <p class="text-sm">$ 1.99/ea</p>
                                    </div>
                                    <div class="border border-[#101014] px-6 py-1.5 flex justify-between rounded-lg">
                                        <IconMinus />
                                        <p>1</p>
                                        <IconPlus />
                                    </div>
                                </div>
                            </div>
                            <div class="grid grid-cols-2 gap-5">
                                <img class="rounded" src="../assets/tulip.jpeg" alt="">
                                <div class="flex flex-col gap-6">
                                    <div>
                                        <h3 class="text-lg font-bold">Brown Double Tulip</h3>
                                        <p class="text-sm">$ 1.99/ea</p>
                                    </div>
                                    <div class="border border-[#101014] px-6 py-1.5 flex justify-between rounded-lg">
                                        <IconMinus />
                                        <p>1</p>
                                        <IconPlus />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mt-5">
                            <div class="flex mt-2 justify-between">
                                <p>Subtotal</p>
                                <p>$ 29.99</p>
                            </div>
                            <button class="bg-[#101015] mt-2 text-white px-6 py-1.5 rounded-lg w-full">Submit order</button>
                        </div>
                    </DialogPanel>
                </TransitionChild>
            </div>
        </div>
    </Dialog>
</TransitionRoot>
</template>

<script>
import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
} from '@headlessui/vue'
import {
    IconCheck,
    IconX
} from '@tabler/icons-vue';
import {
    IconBell,
    IconMinus,
    IconPlus
} from '@tabler/icons-vue';
export default {
    components: {
        TransitionRoot,
        TransitionChild,
        Dialog,
        DialogPanel,
        DialogTitle,
        IconBell,
        IconCheck,
        IconX,
        IconMinus,
        IconPlus
    },
    data() {
        return {
            isOpen: false
        }
    },
    methods: {
        toggleModal() {
            this.isOpen = !this.isOpen
        }
    },
    mounted() {
        this.emitter.on("showBasket", value => {
            this.toggleModal()
        })
    }
}
</script>
