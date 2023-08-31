<template>
<TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="toggleModal" class="relative z-10">
        

        <div class="fixed inset-0 overflow-y-auto">
            <div class="flex  h-36 items-center justify-center p-4 text-center">
                <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95" enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100" leave-to="opacity-0 scale-95">
                    <DialogPanel class="w-full max-w-sm h-10 font-base transform overflow-hidden rounded-md bg-green-400 text-white text-left align-middle shadow-xl transition-all">
                       <div class="flex justify-between items-center ml-4 mr-4 mt-2">
                       <div class="flex gap-4">
                        <IconCheck/>
                       <h3>Item added to cart</h3>
                       </div>
                       <IconX/>
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
        }
    },
    mounted() {
        this.emitter.on("showNotification", value => {
            this.toggleModal()
            setTimeout(() =>  this.toggleModal(), 1000)
        })
    }
}
</script>
