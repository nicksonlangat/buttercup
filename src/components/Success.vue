<template>
<TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="toggleModal" class="relative z-10">
        <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100" leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
            <div class="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <div class="fixed inset-0 overflow-y-auto">
            <div class="flex min-h-full items-center justify-center p-4 text-center">
                <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95" enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100" leave-to="opacity-0 scale-95">
                    <DialogPanel class="w-full font-base max-w-md transform overflow-hidden rounded-lg bg-[#f1f3f1] p-6 text-left align-middle shadow-xl transition-all">

                        <div class="mt-2 flex flex-col gap-5 justify-center items-center">
                            <span class="px-2 py-2 bg-[#101014] text-white rounded-full">
                                <IconCheck />
                            </span>
                            <h3 class="text-2xl">Thanks for your order</h3>
                            <p class="text-center">
                                Your payment was successful, and your order is complete. We’ve sent you
                                an email with all of the details of your order.
                            </p>
                            <button @click="closeModal" class="bg-[#101015] mt-2 text-white px-6 py-1.5 rounded-lg w-full">Close</button>

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
export default {
    components: {
        TransitionRoot,
        TransitionChild,
        Dialog,
        DialogPanel,
        DialogTitle,
        IconCheck,
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
        },
        closeModal() {
            this.toggleModal()
            this.emitter.emit("showBasket")
            this.emitter.emit("showCheckout")
        }
    },
    mounted() {
        this.emitter.on("showSuccess", value => {
            this.toggleModal()
        })
    }
}
</script>
