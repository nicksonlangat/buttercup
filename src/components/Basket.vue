<template>
<TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="toggleModal" class="relative z-10">
        <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100" leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
            <div class="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>
        <Checkout/>
        <div class="fixed inset-0 overflow-y-auto font-base">
            <div class="flex mt-16 items-center justify-center p-4 text-center">
                <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95" enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100" leave-to="opacity-0 scale-95">
                    <DialogPanel class="w-full max-w-md transform overflow-hidden rounded-lg bg-[#f1f3f1] p-6 text-left align-middle shadow-xl transition-all">

                        <div class="flex justify-between items-center">
                            <h1 class="text-4xl font-extrabold">My basket</h1>
                            <button v-if="cartTotal" @click="clearCart" class="text-red-500">Clear cart</button>
                            <IconX class="cursor-pointer" size="32" @click="toggleModal" />
                        </div>
                        <div class="flex mt-8 flex-col gap-5">

                            <div v-for="(item, index) in cartItems" :key="index" class="flex w-full gap-10">
                                <img class="rounded-lg h-28  lg:40 object-cover" :src="baseURL+item.product.image" alt="">
                                <div class="flex flex-col w-full">
                                    <div>
                                        <h3 class="text-lg font-bold">{{ item.product.name }}</h3>
                                        <p class="text-gray-400 text-xs">{{ item.product.category.name }}</p>
                                        <p class="text-sm">$ {{item.price}}</p>
                                        
                                    </div>
                                    <div class="flex justify-between items-center">
                                        <div class="flex gap-4">
                                            <span @click="editProductQuantity('remove', item)" class="px-1 cursor-pointer py-1 h-8 mt-4 border border-[#101014] rounded-lg">
                                            <IconMinus class="cursor-pointer"  />
                                        </span>
                                       
                                        <p class="mt-5">{{ item.quantity }}</p>
                                        <span  @click="editProductQuantity('add', item)"  class="px-1 cursor-pointer py-1 h-8 mt-4 border border-[#101014] rounded-lg">
                                        <IconPlus class="cursor-pointer"/>
                                        </span>
                                        </div>
                                        <IconX @click="removeItem(item)" class="cursor-pointer mt-4 text-gray-500"/>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div v-if="cartTotal" class="mt-5">
                            <div class="flex mt-2 justify-between">
                                <p>Subtotal</p>
                                <p>$ {{ cartTotal }}</p>
                            </div>
                            <button @click="proceedToCheckout" class="bg-[#101015] mt-2 text-white px-6 py-1.5 rounded-lg w-full">Submit order</button>
                        </div>
                        <div v-else class="mt-5">
                            <h3>Your cart is empty</h3>
                            <button @click="toggleModal" class="bg-[#101015] mt-2 text-white px-6 py-1.5 rounded-lg w-full">Continue shopping</button>
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
    IconX,
    IconMinus,
    IconPlus
} from '@tabler/icons-vue';
import { mapGetters, mapActions } from 'vuex';
import Checkout from './Checkout.vue';
export default {
    components: {
        TransitionRoot,
        TransitionChild,
        Dialog,
        DialogPanel,
        DialogTitle,
        IconX,
        IconMinus,
        IconPlus,
        Checkout
    },
    data() {
        return {
            isOpen: false,
            baseURL: process.env.VUE_APP_BASE_URL,
            responses: []
        }
    },
    computed: {
        ...mapGetters({
            storedCartItems: 'storedCartItems',
            storedCartTotal: 'storedCartTotal'
        }),
        cartItems() {
            return this.storedCartItems
        },
        cartTotal(){
            return this.storedCartTotal
        }
    },
    methods: {
        ...mapActions({
            getCartItems: 'getCartItems',
            addCartItem: 'addCartItem',
            removeCartItem: 'removeCartItem',
            removeAllCartItems: 'removeAllCartItems'
        }),
        init() {
            this.getCartItems({
                cb: () => {}
            })
        },
        removeItem(product) {
            let payload = {
                "product": product.product,
                "remove": true,
            }
            this.removeCartItem({
                payload: payload,
                cb: (() => {
                   this.init()
                })
            })
        },
        clearCart() {
            let payload = {
                "clear": true,
            }
            this.removeAllCartItems({
                payload: payload,
                cb: (() => {
                   this.init()
                })
            })
        },
        toggleModal() {
            this.isOpen = !this.isOpen
        },
        editProductQuantity(operation, product) {
            if(operation==='add') {
                product.quantity++
                this.addToCart(product.product, product.quantity)
            }
            if(operation==='remove') {
                product.quantity--
                this.addToCart(product.product, product.quantity)
            }
        },
        addToCart(flower, quantity) {
            let payload = {
                "product": flower,
                "quantity": quantity,
                "overide_quantity": true,
            }
            this.addCartItem({
                payload: payload,
                cb: (() => {
                   this.init()
                })
            })
        },
        proceedToCheckout() {
            this.emitter.emit("showCheckout")
        }
    },
    mounted() {
        this.init()
        this.emitter.on("showBasket", value => {
            this.toggleModal()
        })
        this.emitter.on("updateCart", value => {
            this.init()
        })
    }
}
</script>
