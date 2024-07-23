
<script setup>
import { ref } from 'vue';

const title = ref('Optimal Gear');
const pages = [
  { id: 0, name: 'SIMULATEUR', url: '/simulator' },
  { id: 1, name: 'GRAVEL', url: '/gravel' },
  { id: 2, name: 'VTT', url: '/mtb' },
  { id: 3, name: 'ROUTE', url: '/road' },
];

</script>
<template>
  <div class="navbar bg-base-200">
  <div class="navbar-start">
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52" id="menu">
        <li v-for="page in pages"><NuxtLink :to="page.url">{{ page.name }}</NuxtLink></li>
      </ul>
    </div>
    <NuxtLink to="/" class="ml-4 text-xl font-bold tracking-widest inline-block mr-4 py-2 whitespace-nowrap uppercase text-white ">VELOOPTIMAL</NuxtLink>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1 space-x-2">
        <NuxtLink v-for="page in pages" class="btn text-xl" :to="page.url">{{ page.name }}</NuxtLink>
    </ul>
  </div>
</div>
</template>

