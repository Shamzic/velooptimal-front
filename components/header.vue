
<template>
    <div class="navbar bg-base-200">
  <div class="navbar-start">
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52" id="menu">
        <li><NuxtLink to="/gravel">Gravel</NuxtLink></li>
        <li><NuxtLink to="/mtb">VTT</NuxtLink></li>
        <li><NuxtLink to="/road">Route</NuxtLink></li>
      </ul>
    </div>
    <NuxtLink to="/" class="btn btn-success glass text-xl">Optimal Bikes</NuxtLink>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1 space-x-2">
        <NuxtLink class="btn btn-success glass" to="/gravel">Gravel</NuxtLink>
        <NuxtLink class="btn btn-success glass" to="/mtb">VTT</NuxtLink>
        <NuxtLink class="btn btn-success glass" to="/road">Route</NuxtLink>
    </ul>
  </div>
</div>
</template>

<script setup>
import { ref } from 'vue';

const title = ref('Optimal Gear');

</script>
