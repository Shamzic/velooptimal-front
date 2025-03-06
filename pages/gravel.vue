<script setup lang="ts">
import BikesList from '../components/pages/bikes-list.vue';
import { gravelBikes } from '../data/gravel';

</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-base-200/50 via-base-100 to-base-200/50">
    <!-- Hero section plus compact -->
    <section class="py-8 bg-base-200">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl sm:text-5xl font-bold mb-3">
            Les meilleurs vélos gravel
          </h1>
          <p class="text-base sm:text-lg text-base-content/70 mb-4">
            Découvrez notre sélection des vélos gravel offrant le meilleur rapport qualité-prix pour vos aventures sur tous les terrains.
          </p>
          <div class="flex justify-center gap-6 text-center text-sm">
            <div>
              <div class="text-2xl sm:text-3xl font-bold text-primary mb-1">3+</div>
              <div class="text-xs sm:text-sm text-base-content/70">Modèles testés</div>
            </div>
            <div>
              <div class="text-2xl sm:text-3xl font-bold text-primary mb-1">800€+</div>
              <div class="text-xs sm:text-sm text-base-content/70">Prix moyen</div>
            </div>
            <div>
              <div class="text-2xl sm:text-3xl font-bold text-primary mb-1">4.5/5</div>
              <div class="text-xs sm:text-sm text-base-content/70">Note moyenne</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Guide d'achat en dropdown -->
    <section class="py-4 bg-base-100">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <div class="collapse collapse-arrow bg-base-200 shadow-sm">
            <input type="checkbox" /> 
            <div class="collapse-title text-xl font-medium flex items-center gap-2">
              <Icon name="ph:book-open" class="w-5 h-5" />
              Guide d'achat vélo gravel
            </div>
            <div class="collapse-content backdrop-blur-sm">
              <div class="pt-4">
                <div class="flex flex-wrap gap-4">
                  <div class="flex-1 min-w-[300px] card bg-base-100">
                    <div class="card-body p-4">
                      <h3 class="card-title text-lg mb-2">Pourquoi choisir un gravel ?</h3>
                      <ul class="list-disc list-inside text-sm space-y-1">
                        <li>Polyvalence route et chemins</li>
                        <li>Position confortable</li>
                        <li>Capacité à porter des bagages</li>
                        <li>Pneus plus larges et confortables</li>
                      </ul>
                    </div>
                  </div>
                  <div class="flex-1 min-w-[300px] card bg-base-100">
                    <div class="card-body p-4">
                      <h3 class="card-title text-lg mb-2">Points clés à vérifier</h3>
                      <ul class="list-disc list-inside text-sm space-y-1">
                        <li>Qualité du cadre</li>
                        <li>Type de freins</li>
                        <li>Transmission adaptée</li>
                        <li>Largeur max des pneus</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Liste des vélos -->
    <bikes-list
      title="Notre sélection de vélos gravel"
      :products="gravelBikes"
      class="mt-4"
    />
  </div>
</template>

<style scoped>
.grid {
  scroll-padding: 1rem;
}
</style>
