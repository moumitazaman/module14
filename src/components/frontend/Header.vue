<script setup>
 import { authStore} from '../../stores/authStore';
 import { cart } from "../../stores/cart";

  import {onMounted} from 'vue'
</script>
<template>
    <!-- header -->
    <header class="py-4 shadow-sm bg-white">
        <div class="container flex items-center justify-between">
            <a href="/">
                <img src="/src/assets/images/logo.svg" alt="Logo" class="w-32">
            </a>

            <div class="w-full max-w-xl relative flex">
                <span class="absolute left-4 top-3 text-lg text-gray-400">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </span>
                <input type="text" name="search" id="search"
                    class="w-full border border-primary border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none hidden md:flex"
                    placeholder="search">
                <button
                    class="bg-primary border border-primary text-white px-8 rounded-r-md hover:bg-transparent hover:text-primary transition hidden md:flex">Search</button>
            </div>

            <div class="flex items-center space-x-4">
               
                <RouterLink to="/cart" class="text-center text-gray-700 hover:text-primary transition relative">
                    <div class="text-2xl">
                        <i class="fa-regular fa-shopping-cart"></i>
                    </div>
                    <div class="text-xs leading-3">Cart</div>
                    <div
                        class="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
                        {{ cart.totalCartItems }}</div>
                </RouterLink>
              
            </div>
        </div>
    </header>
    <!-- ./header -->

    <!-- navbar -->
    <nav class="bg-gray-800">
        <div class="container flex">
            <div class="px-8 py-4 bg-primary md:flex items-center cursor-pointer relative group hidden">
                <span class="text-white">
                    <i class="fa-solid fa-bars"></i>
                </span>

              
                    
            </div>

            <div class="flex items-center justify-between flex-grow md:pl-12 py-5">
                <div class="flex items-center space-x-6 capitalize">
                    <RouterLink to="/" class="text-gray-200 hover:text-white transition">Home</RouterLink>
                    <RouterLink to="/shop" class="text-gray-200 hover:text-white transition">Shop</RouterLink>
                    <RouterLink to="/about" class="text-gray-200 hover:text-white transition">About Us</RouterLink>
                    <RouterLink to="/contactus" class="text-gray-200 hover:text-white transition">Contact Us</RouterLink>

                </div>
                    <RouterLink v-if="!authStore.isAuthenticated" to="/login" class="text-gray-200 hover:text-white transition">Login/Register</RouterLink>
                    <RouterLink v-if="authStore.isAuthenticated" to="/dashboard" class="text-gray-200 hover:text-white transition">Dashboard</RouterLink>

            </div>
        </div>
    </nav>
    <!-- ./navbar -->
    </template>