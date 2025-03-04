<script setup lang="ts">
import MenuCard from '../components/cards/menu-card.vue'
</script>

<template>
  <div class="bg-gradient-to-b from-base-200 to-base-300">
    <!-- Hero Section -->
    <div class="hero min-h-[70vh] relative">
      <div class="hero-content text-center">
        <div class="max-w-3xl">
          <h1 class="text-5xl font-bold mb-8 leading-tight">
            Trouvez le vélo parfait pour <span class="text-primary">VOTRE</span> aventure
          </h1>
          <p class="text-xl mb-12 opacity-90">
            Notre simulateur intelligent analyse vos besoins pour vous recommander le vélo idéal, 
            en tenant compte de votre pratique et de votre budget.
          </p>
          <NuxtLink to="/simulator" class="btn btn-primary btn-lg animate-bounce">
            Démarrer la simulation
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Features Section -->
    <div class="max-w-7xl mx-auto px-4 py-16">
      <h2 class="text-3xl font-bold text-center mb-16">Comment trouver votre vélo idéal ?</h2>
      
      <div class="grid md:grid-cols-2 gap-8 items-stretch">
        <!-- Simulateur Card -->
        <div class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
          <figure class="px-6 pt-6">
            <img src="/img/simulator-card.png" alt="Simulateur" class="rounded-xl h-64 w-full object-cover" />
          </figure>
          <div class="card-body">
            <h3 class="card-title text-2xl mb-4">1. Utilisez notre simulateur</h3>
            <p class="text-lg mb-6">
              En quelques clics, notre simulateur analyse vos besoins et votre pratique pour vous recommander le vélo parfaitement adapté.
            </p>
            <div class="card-actions justify-end">
              <NuxtLink to="/simulator" class="btn btn-primary">
                Lancer le simulateur
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Comparateur Card -->
        <div class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
          <figure class="px-6 pt-6">
            <img src="/img/best-bike-card.jpeg" alt="Comparateur" class="rounded-xl h-64 w-full object-cover" />
          </figure>
          <div class="card-body">
            <h3 class="card-title text-2xl mb-4">2. Explorez le comparateur</h3>
            <p class="text-lg mb-6">
              Découvrez notre sélection des meilleurs vélos classés par rapport qualité/prix, filtrés selon vos critères.
            </p>
            <div class="card-actions justify-end">
              <NuxtLink to="/gravel" class="btn btn-secondary">
                Voir les comparatifs
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
