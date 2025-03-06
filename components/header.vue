<script setup>
import { ref, computed } from 'vue';

const title = ref('Optimal Gear');
const mobileMenuOpen = ref(false);

const pages = [
  { id: 0, name: 'SIMULATEUR', url: '/simulateur', type: 'simulator' },
  { id: 1, name: 'GRAVEL', url: '/gravel', type: 'comparator' },
  { id: 2, name: 'ROUTE', url: '/route', type: 'comparator' },
  { id: 3, name: 'VTT', url: '/vtt', type: 'comparator' },
  { id: 4, name: 'VTC', url: '/vtc', type: 'comparator' },
  { id: 5, name: 'PLIANT', url: '/pliant', type: 'comparator' },
];

const comparatorPages = computed(() => pages.filter(page => page.type === 'comparator'));
const simulatorPage = computed(() => pages.find(page => page.type === 'simulator'));

const closeMenus = () => {
  // Ferme le menu mobile
  mobileMenuOpen.value = false;
  
  // Ferme le menu "Les meilleurs vélos" en mobile
  const details = document.querySelector('details');
  if (details) details.removeAttribute('open');
  
  // Ferme le dropdown desktop
  const dropdownCheckbox = document.querySelector('.dropdown-content');
  if (dropdownCheckbox) dropdownCheckbox.blur();
};

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

</script>
<template>
  <div class="navbar bg-base-200 fixed top-0 left-0 right-0 z-50">
    <div class="navbar-start">
      <div class="dropdown">
        <div 
          tabindex="0" 
          role="button" 
          class="btn btn-ghost lg:hidden"
          @click="toggleMobileMenu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </div>
        <ul 
          class="menu dropdown-content mt-3 z-[1] shadow-xl bg-base-100 rounded-xl w-72"
          :class="{ 'hidden': !mobileMenuOpen }"
        >
          <li><NuxtLink to="/" @click="closeMenus">ACCUEIL</NuxtLink></li>
          <li class="mt-2">
            <NuxtLink :to="simulatorPage.url" class="bg-primary/10 text-primary font-medium" @click="closeMenus">
              {{ simulatorPage.name }}
            </NuxtLink>
          </li>
          <li>
            <details>
              <summary class="font-medium">Les meilleurs vélos</summary>
              <ul>
                <li v-for="page in comparatorPages" :key="page.id">
                  <NuxtLink :to="page.url" @click="closeMenus">{{ page.name }}</NuxtLink>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <NuxtLink to="/" class="ml-4 text-xl font-bold tracking-widest inline-block mr-4 py-2 whitespace-nowrap uppercase">VELOOPTIMAL</NuxtLink>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1 items-center gap-2">
        <NuxtLink to="/" class="btn btn-ghost text-lg">ACCUEIL</NuxtLink>
        <div class="h-8 w-px bg-base-300"></div>
        <NuxtLink 
          :to="simulatorPage.url" 
          class="btn btn-ghost text-lg hover:bg-primary/10 hover:text-primary"
        >
          {{ simulatorPage.name }}
        </NuxtLink>
        <div class="h-8 w-px bg-base-300"></div>
        <div class="dropdown dropdown-hover">
          <div tabindex="0" role="button" class="btn btn-ghost text-lg m-1">
            LES MEILLEURS VÉLOS
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 opacity-60" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </div>
          <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow-lg bg-base-100 rounded-box w-full min-w-[200px]">
            <li v-for="page in comparatorPages" :key="page.id">
              <NuxtLink :to="page.url" class="text-base whitespace-nowrap" @click="closeMenus">{{ page.name }}</NuxtLink>
            </li>
          </ul>
        </div>
      </ul>
    </div>
  </div>
</template>

