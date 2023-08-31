<template>
<TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="toggleModal" class="relative z-10">
        <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100" leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
            <div class="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>
        <Success/>
        <div class="fixed inset-0 overflow-y-auto font-base">
            <div class="flex mt-16 items-center justify-center p-4 text-center">
                <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95" enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100" leave-to="opacity-0 scale-95">
                    <DialogPanel class="w-full max-w-md transform overflow-hidden rounded-lg bg-[#f1f3f1] p-6 text-left align-middle shadow-xl transition-all">

                        <div class="flex justify-between items-center">
                            <h1 class="text-4xl font-extrabold">Checkout</h1>

                            <IconX class="cursor-pointer" size="32" @click="toggleModal" />
                        </div>

                        <form class="flex mt-8 flex-col font-base gap-5">
                            <div class="flex flex-col gap-3">
                                <label for="address">Shipping details</label>
                               
                                <input v-model="customer_details.address" type="text" class="py-2.5 focus:outline-none focus:ring-0 rounded-lg pl-5 text-sm placeholder:text-sm placeholder:text-gray-400" placeholder="Delivery address">
                            <div class="grid grid-cols-2 gap-5">
                                <input v-model="customer_details.full_name" type="text" class="py-2.5 focus:outline-none focus:ring-0 rounded-lg pl-5 text-sm placeholder:text-sm placeholder:text-gray-400" placeholder="Contact name">
                                <input v-model="customer_details.phone_number" type="text" class="py-2.5 focus:outline-none focus:ring-0 rounded-lg pl-5 text-sm placeholder:text-sm placeholder:text-gray-400" placeholder="Contact number">
                            </div>
                            </div>
                            <div class="flex flex-col gap-3">
                                <label for="address">Payment details</label>
                                <input v-model="customer_details.card_number" type="text" class="py-2.5 focus:outline-none focus:ring-0 rounded-lg pl-5 text-sm placeholder:text-sm placeholder:text-gray-400" placeholder="Card number">
                                <div class="grid grid-cols-2 gap-5">
                                    <input v-model="customer_details.card_expiry" type="text" class="py-2.5 focus:outline-none focus:ring-0 rounded-lg pl-5 text-sm placeholder:text-sm placeholder:text-gray-400" placeholder="MM/YY">
                                    <input v-model="customer_details.card_cvc" type="text" class="py-2.5 focus:outline-none focus:ring-0 rounded-lg pl-5 text-sm placeholder:text-sm placeholder:text-gray-400" placeholder="CVC">
                                </div>
                            </div>
                            <div class="flex flex-col gap-2">
                                <h3>Delivery method</h3>
                                <div class="py-2.5 text-pink-500 flex gap-2 items-center rounded-lg pl-5 text-sm bg-white">
                                    <IconMotorbike class="text-pink-500" />
                                    <p>MotorBike</p>
                                    <p class="text-[#101014]">Fast(30 min)</p>
                                </div>
                            </div>
                        </form>

                        <div class="mt-5">
                            <ul class="flex flex-col gap-2 w-full">
                                <li class="flex justify-between">
                                    <p>Order</p>
                                    $ {{ cartTotal }}
                                </li>
                                <li class="flex w-full justify-between">
                                    <p> Delivery</p>
                                    $ {{ deliveryFee }}
                                </li>
                                <li class="flex w-full justify-between">
                                    <p> Total</p>
                                    $ {{ grandTotal }}
                                </li>

                            </ul>
                            <button @click.prevent="placeOrder" class="bg-[#101015] mt-2 text-white px-6 py-1.5 rounded-lg w-full">Place Order</button>
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

import { IconMotorbike } from '@tabler/icons-vue';
import {
    IconX,
} from '@tabler/icons-vue';
import {
    mapGetters,
    mapActions
} from 'vuex';
import Success from './Success.vue'
export default {
    components: {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
    IconX,
    IconMotorbike,
    Success
},
    data() {
        return {
            isOpen: false,
            deliveryFee: 3.00,
            customer_details: {
                full_name: "Nick Langat",
                phone_number: "0713754946",
                address: "Chebown center, Kericho",
                card_number: "4456765412347654",
                card_expiry: "04/26",
                card_cvc: "428",
            }
        }
    },
    computed: {
        ...mapGetters({
            storedCartTotal: 'storedCartTotal'
        }),
        cartTotal() {
            return this.storedCartTotal
        },
        grandTotal() {
            return parseFloat(this.cartTotal) + parseFloat(this.deliveryFee)
        }
    },
    methods: {
        ...mapActions({
            getCartItems: 'getCartItems',
            createOrder: 'createOrder'
        }),
        init() {
            this.getCartItems({
                cb: () => {}
            })
        },
        
        toggleModal() {
            this.isOpen = !this.isOpen
        },
        placeOrder() {
            this.createOrder({
                payload: this.customer_details,
                cb: (() => {
                   this.emitter.emit("showSuccess")
                   this.emitter.emit("updateCart")
                })
            })
        },
        
    },
    mounted() {
        this.init()
        this.emitter.on("showCheckout", value => {
            this.toggleModal()
        })

    }
}
</script>
