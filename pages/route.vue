<script setup lang="ts">
import type { Product } from '@/types/products.js';
import BikesList from '../components/pages/bikes-list.vue';
import { routeBikes } from '../data/route';
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-base-200/50 via-base-100 to-base-200/50">
    <!-- Hero section -->
    <section class="py-16 bg-base-200">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-5xl font-bold mb-6">
            Les meilleurs vélos de route
          </h1>
          <p class="text-xl text-base-content/70 mb-8">
            Découvrez notre sélection des vélos de route offrant le meilleur rapport qualité-prix pour vos sorties sportives.
          </p>
          <div class="flex justify-center gap-8 text-center">
            <div>
              <div class="text-4xl font-bold text-primary mb-2">3+</div>
              <div class="text-sm text-base-content/70">Modèles testés</div>
            </div>
            <div>
              <div class="text-4xl font-bold text-primary mb-2">1500€+</div>
              <div class="text-sm text-base-content/70">Prix moyen</div>
            </div>
            <div>
              <div class="text-4xl font-bold text-primary mb-2">4.6/5</div>
              <div class="text-sm text-base-content/70">Note moyenne</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Guide d'achat -->
    <section class="py-12 bg-base-100">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold mb-8">Guide d'achat vélo de route</h2>
          <div class="grid md:grid-cols-2 gap-8">
            <div class="card bg-base-200">
              <div class="card-body">
                <h3 class="card-title">Pourquoi choisir un vélo de route ?</h3>
                <ul class="list-disc list-inside space-y-2">
                  <li>Performance pure sur route</li>
                  <li>Légèreté et aérodynamisme</li>
                  <li>Position sportive et efficace</li>
                  <li>Idéal pour longues distances</li>
                </ul>
              </div>
            </div>
            <div class="card bg-base-200">
              <div class="card-body">
                <h3 class="card-title">Points clés à vérifier</h3>
                <ul class="list-disc list-inside space-y-2">
                  <li>Matériau du cadre</li>
                  <li>Groupe (transmission)</li>
                  <li>Type de freinage</li>
                  <li>Géométrie du cadre</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Liste des vélos -->
    <bikes-list
      title="Notre sélection de vélos de route"
      :products="routeBikes"
    />
  </div>
</template>

<style scoped>
.grid {
  scroll-padding: 1rem;
}
</style> 