<script setup>
import { cart } from '../../stores/cart'

</script>
 
<template>
    <div class="bg-white">
        <div class="mx-auto px-12 py-8 ">
            <h2 class="text-2xl font-bold tracking-tight text-gray-900">Cart</h2>
            <p class="my-10">
                <!-- {{ cart }} -->
            </p>
            <div>
                <div class="flex items-center my-5" v-for="item in cart.items">
                    <p class="w-2/3">
                        <router-link :to="{ name: 'singleProduct', params: { id: item.product.id } }">
                            {{ item.product.title }}
                        </router-link>
                    </p>
                    <p class="w-[100px]">
                        {{ item.product.price }}
                    </p>
                    <p>
                        <input type="number" v-model="item.quantity">
                    </p>
                    <p>
                        <button @click="cart.removeFromCart(item.product)" class="ml-5 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                   -
                </button>

                    </p>

                </div>
                <div class="flex items-center my-5">
                    <p class="w-2/3">
                        Total
                    </p>
                    <p class="w-[100px]">

                    </p>
                    <p>
                        <span v-if="cart.discountApplied" class="mr-5">
                            <del>{{ cart.originalPrice }}</del>
                        </span>
                        <strong>{{ cart.totalPrice }} </strong>
                        <span v-if="cart.discountApplied"> ( {{ cart.discountInPercentage }}%)</span>
                    </p>
                </div>
               
               
                <button @click="cart.saveCartInLocalStorage()" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Update Cart
                </button>

                <button @click="cart.emptyCart()" class="ml-5 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                    Empty Cart
                </button>

                <button @click="cart.checkout()" class="ml-5 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                    Place Order
                </button>
            </div>
        </div>
    </div>
</template>
 
<style scoped></style>