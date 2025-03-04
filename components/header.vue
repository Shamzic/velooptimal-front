<script setup>
import { ref } from 'vue';

const title = ref('Optimal Gear');
const pages = [
  { id: 0, name: 'SIMULATEUR', url: '/simulateur' },
  { id: 1, name: 'VTC', url: '/vtc' },
  { id: 2, name: 'GRAVEL', url: '/gravel' },
  { id: 3, name: 'VTT', url: '/vtt' },
  { id: 4, name: 'ROUTE', url: '/route' },
  { id: 5, name: 'PLIANT', url: '/pliant' },
];

</script>
<template>
  <div class="navbar bg-base-200 fixed top-0 left-0 right-0 z-50">
  <div class="navbar-start">
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52" id="menu">
        <li><NuxtLink to="/">ACCUEIL</NuxtLink></li>
        <li v-for="page in pages" :key="page.id"><NuxtLink :to="page.url">{{ page.name }}</NuxtLink></li>
      </ul>
    </div>
    <NuxtLink to="/" class="ml-4 text-xl font-bold tracking-widest inline-block mr-4 py-2 whitespace-nowrap uppercase">VELOOPTIMAL</NuxtLink>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1 space-x-2">
      <NuxtLink to="/" class="btn text-xl">ACCUEIL</NuxtLink>
      <NuxtLink v-for="page in pages" :key="page.id" class="btn text-xl" :to="page.url">{{ page.name }}</NuxtLink>
    </ul>
  </div>
</div>
</template>

