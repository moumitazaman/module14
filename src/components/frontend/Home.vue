<script setup>
import { ref, reactive, onBeforeMount } from 'vue'
import axios from 'axios'
import { cart } from '../../stores/cart'

const products = ref([])
function getSlug(title) {
    return title.toLowerCase().replace(/\s+/g, '-')
}
onBeforeMount(() => {
    axios.get('http://localhost:8000/api/products')
        .then(res => {
            products.value = res.data
        })

})
</script>
<template>
    <!-- new arrival -->
    <div class="container pb-16">
        <h2 class="text-2xl font-medium text-gray-800 uppercase mb-6">top new arrival</h2>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6">

            <div class="bg-white shadow rounded overflow-hidden group" v-for="product in products" :key="product.id">
                    <div class="relative">
                        <img :src="product.image" alt="product 1" class="w-full shopimage">
                        <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center 
                        justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                            <a href="#"
                                class="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                                title="view product">
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </a>
                            <a href="#"
                                class="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                                title="add to wishlist">
                                <i class="fa-solid fa-heart"></i>
                            </a>
                        </div>
                    </div>
                    <div class="pt-4 pb-3 px-4">
                                    
                            <h4 class="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                                {{ product.title }}
                                
                            </h4>
                     
                        <div class="flex items-baseline mb-1 space-x-2">
                            <p class="text-xl text-primary font-semibold">${{ product.price }}</p>
                        </div>
                        <div class="flex items-center">
                            <div class="flex gap-1 text-sm text-yellow-400">
                                <span><i class="fa-solid fa-star"></i></span>
                                <span><i class="fa-solid fa-star"></i></span>
                                <span><i class="fa-solid fa-star"></i></span>
                                <span><i class="fa-solid fa-star"></i></span>
                                <span><i class="fa-solid fa-star"></i></span>
                            </div>
                            <div class="text-xs text-gray-500 ml-3">(150)</div>
                        </div>
                    </div>
                    <a  @click="cart.addItem(product)" href="javascript:void(0)"
                        class="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">Add
                        to cart</a>
                </div>

                

          
        </div>
    </div>
    <!-- ./new arrival -->

    <!-- ads -->
    <div class="container pb-16">
        <a href="#">
            <img src="assets/images/offer.jpg" alt="ads" class="w-full">
        </a>
    </div>
    <!-- ./ads -->

    
</template>
<style>
.shopimage{
    height: 360px !important;
}
</style>