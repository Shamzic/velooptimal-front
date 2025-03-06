<script setup lang="ts">
import BikesList from '../components/pages/bikes-list.vue';
import { pliantProducts } from '@/data/pliant';
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-base-200/50 via-base-100 to-base-200/50">
    <!-- Hero section -->
    <section class="py-16 bg-base-200">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-5xl font-bold mb-6">
            Les meilleurs vélos pliants
          </h1>
          <p class="text-xl text-base-content/70 mb-8">
            Découvrez notre sélection des vélos pliants offrant le meilleur rapport qualité-prix pour vos déplacements multimodaux.
          </p>
          <div class="flex justify-center gap-8 text-center">
            <div>
              <div class="text-4xl font-bold text-primary mb-2">3+</div>
              <div class="text-sm text-base-content/70">Modèles testés</div>
            </div>
            <div>
              <div class="text-4xl font-bold text-primary mb-2">1000€+</div>
              <div class="text-sm text-base-content/70">Prix moyen</div>
            </div>
            <div>
              <div class="text-4xl font-bold text-primary mb-2">4.5/5</div>
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
          <h2 class="text-3xl font-bold mb-8">Guide d'achat vélo pliant</h2>
          <div class="grid md:grid-cols-2 gap-8">
            <div class="card bg-base-200">
              <div class="card-body">
                <h3 class="card-title">Pourquoi choisir un pliant ?</h3>
                <ul class="list-disc list-inside space-y-2">
                  <li>Idéal pour les transports</li>
                  <li>Rangement facile</li>
                  <li>Multimodalité</li>
                  <li>Pratique en ville</li>
                </ul>
              </div>
            </div>
            <div class="card bg-base-200">
              <div class="card-body">
                <h3 class="card-title">Points clés à vérifier</h3>
                <ul class="list-disc list-inside space-y-2">
                  <li>Système de pliage</li>
                  <li>Taille pliée</li>
                  <li>Poids total</li>
                  <li>Stabilité</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Liste des vélos -->
    <bikes-list
      title="Notre sélection de vélos pliants"
      :products="pliantProducts"
    />
  </div>
</template>

<style scoped>
.grid {
  scroll-padding: 1rem;
}
</style> 