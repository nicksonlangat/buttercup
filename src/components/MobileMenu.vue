<template>
<TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="toggleModal" class="relative z-10">
        <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100" leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
            <div class="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <div class="fixed inset-0 overflow-y-auto font-base">
            <div class="flex h-full items-center justify-center text-center">
                <TransitionChild as="template" enter='transform transition ease-in-out duration-500 sm:duration-700' enterFrom='translate-x-full' enterTo='translate-x-0' leave='transform transition ease-in-out duration-500 sm:duration-700' leaveFrom='translate-x-0' leaveTo='translate-x-full'>
                    <DialogPanel class="w-full max-w-full h-full transform overflow-hidden bg-[#f1f3f1] p-6 text-left align-middle transition-all">
                        <div class="lg:hidden flex justify-between items-center">
                            <button @click="toggleModal" class="text-[#101014]">
                                <IconX size="36" />
                            </button>
                            <a href="/flowers" class="text-5xl font-extrabold">Buttercup</a>
                            <button class="text-[#101014]">
                                <IconShoppingCart size="36" />
                            </button>
                        </div>
                        <div class="lg:hidden mt-16 flex text-3xl font-extrabold flex-col gap-5 items-center text-[#101014]">
                            <a href="/flowers">Shop</a>
                            <a href="/blog">Blog</a>
                            <a href="/about">About us</a>
                            <a href="/account">My profile</a>
                            <a class="text-2xl font-normal" href="">Events</a>
                            <a class="text-2xl font-normal" href="">Help and support</a>
                            <a class="text-2xl font-normal" href="">FAQs</a>
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
    IconMenu2,
    IconShoppingCart
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
        IconMenu2,
        IconShoppingCart,
        IconX
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
        this.emitter.on("showMenu", value => {
            this.toggleModal()
        })
    }
}
</script>
