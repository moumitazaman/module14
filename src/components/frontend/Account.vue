<script setup>
import { authStore } from "../../stores/authStore";
  import {onMounted} from 'vue'
</script>
<template>
        <!-- account wrapper -->
<div class="container grid grid-cols-12 items-start gap-6 pt-4 pb-16">

<!-- sidebar -->
 <div class="col-span-3">
    <div class="px-4 py-3 shadow flex items-center gap-4">
        <div class="flex-shrink-0">
            <img src="/src/assets/images/avatar.png" alt="profile"
                class="rounded-full w-14 h-14 border border-gray-200 p-1 object-cover">
        </div>
        <div class="flex-grow">
            <p class="text-gray-600">Hello,</p>
            <h4 class="text-gray-800 font-medium">{{authStore.user.name}}</h4>
        </div>
    </div>


        <div class="space-y-1 pl-8 pt-4">
            <a href="/orders" class="relative hover:text-primary block font-medium capitalize transition">
                <span class="absolute -left-8 top-0 text-base">
                    <i class="fa-solid fa-box-archive"></i>
                </span>
                My orders
            </a>
           
        </div>

      <!--  <div class="space-y-1 pl-8 pt-4">
            <a href="#" class="relative hover:text-primary block font-medium capitalize transition">
                <span class="absolute -left-8 top-0 text-base">
                    <i class="fa-regular fa-credit-card"></i>
                </span>
                Payment methods
            </a>
            <a href="#" class="relative hover:text-primary block capitalize transition">
                voucher
            </a>
        </div>

        <div class="space-y-1 pl-8 pt-4">
            <a href="#" class="relative hover:text-primary block font-medium capitalize transition">
                <span class="absolute -left-8 top-0 text-base">
                    <i class="fa-regular fa-heart"></i>
                </span>
                My wishlist
            </a>
        </div>-->

        <div class="space-y-1 pl-8 pt-4">
            <a href="javascript:void(0)" class="relative hover:text-primary block font-medium capitalize transition">
                <span class="absolute -left-8 top-0 text-base">
                    <i class="fa-regular fa-arrow-right-from-bracket"></i>
                </span>
                <button v-if="authStore.isAuthenticated" @click="authStore.logout()" class="inline-block text-sm px-4 py-2 leading-none border rounded text-black border-white hover:border-transparent hover:text-pink-500 hover:bg-white mt-4 lg:mt-0">
        Logout
      </button>
            </a>
        </div>

    </div>

<!-- ./sidebar -->

<!-- info -->
<div class="col-span-9 grid grid-cols-3 gap-4">

    <div class="shadow rounded bg-white px-4 pt-6 pb-8">
        <div class="flex items-center justify-between mb-4">
            <h3 class="font-medium text-gray-800 text-lg">Welcome {{ authStore.user.name }}</h3>
            <a href="#" class="text-primary">Edit</a>
        </div>
        <div class="space-y-1">
            <h4 class="text-gray-700 font-medium">{{ authStore.user.name }}</h4>
            <p class="text-gray-800">{{ authStore.user.email }}</p>
        </div>
    </div>

   

 

</div>
<!-- ./info -->
</div>
<!-- ./account wrapper -->

</template>
<style>
</style>