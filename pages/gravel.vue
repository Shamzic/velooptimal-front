<script setup lang="ts">
import BikesList from '../components/pages/bikes-list.vue';
import { gravelBikes } from '../data/gravel';

interface EnrichedProduct extends Product {
  rating?: { positive: number; negative: number };
  features?: string[];
  pros?: string[];
  cons?: string[];
}

const products: EnrichedProduct[] = [
  { 
    id: 0, 
    brand: 'Nakamura', 
    model: 'Allroad 250', 
    price: 1199.99, 
    url: 'https://www.intersport.fr/velo_gravel_adulte_allroad_250-nakamura-p-YF60H6~8QQ/', 
    imgSrc: 'https://www.transitionvelo.com/content/uploads/2024/04/Nakamura-Allroad-250.jpg',
    rating: { positive: 4.5, negative: 0.5 },
    features: [
      'Cadre aluminium',
      'Freins à disque hydrauliques',
      'Transmission Shimano 2x9 vitesses'
    ],
    pros: [
      'Excellent rapport qualité/prix',
      'Polyvalent route et chemins',
      'Confortable sur longues distances'
    ],
    cons: [
      'Poids moyen (11.2kg)',
      'Pneus d\'origine basiques'
    ]
  },
  { 
    id: 1, 
    brand: 'Triban', 
    model: 'GRVL 120', 
    price: 800, 
    url: 'https://www.decathlon.fr/p/velo-gravel-triban-grvl-120/_/R-p-312397?mc=8575940&c=vert', 
    imgSrc: 'https://contents.mediadecathlon.com/p1956473/k$16ac0a30a404e2ecf763d5d98f8dec80/sq/velo-gravel-triban-grvl-520-homme-subcompact.jpg?format=auto&f=1200x1200',
    rating: { positive: 4.2, negative: 0.8 },
    features: [
      'Cadre aluminium 6061',
      'Freins mécaniques',
      'Transmission Microshift 1x10 vitesses'
    ],
    pros: [
      'Prix très accessible',
      'Idéal pour débuter',
      'Robuste et fiable'
    ],
    cons: [
      'Freins mécaniques moins performants',
      'Composants d\'entrée de gamme'
    ]
  },
  { 
    id: 2, 
    brand: 'Triban', 
    model: 'GRVL 520', 
    price: 1200, 
    url: 'https://www.decathlon.fr/p/velo-gravel-triban-grvl-520-homme-subcompact/_/R-p-313015?mc=8587697', 
    imgSrc:'https://contents.mediadecathlon.com/p2579595/k$a4d99da7969620f9715ba2c7ad39b833/sq/velo-gravel-triban-grvl-120.jpg?format=auto&f=1200x1200',
    rating: { positive: 4.7, negative: 0.3 },
    features: [
      'Cadre aluminium hydroformé',
      'Freins à disque hydrauliques',
      'Transmission Shimano GRX'
    ],
    pros: [
      'Excellent équipement',
      'Très polyvalent',
      'Finitions soignées'
    ],
    cons: [
      'Stock limité',
      'Délais de livraison variables'
    ]
  }
];
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-base-200/50 via-base-100 to-base-200/50">
    <!-- Hero section -->
    <section class="py-16 bg-base-200">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-5xl font-bold mb-6">
            Les meilleurs vélos gravel
          </h1>
          <p class="text-xl text-base-content/70 mb-8">
            Découvrez notre sélection des vélos gravel offrant le meilleur rapport qualité-prix pour vos aventures sur tous les terrains.
          </p>
          <div class="flex justify-center gap-8 text-center">
            <div>
              <div class="text-4xl font-bold text-primary mb-2">3+</div>
              <div class="text-sm text-base-content/70">Modèles testés</div>
            </div>
            <div>
              <div class="text-4xl font-bold text-primary mb-2">800€+</div>
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
          <h2 class="text-3xl font-bold mb-8">Guide d'achat vélo gravel</h2>
          <div class="grid md:grid-cols-2 gap-8">
            <div class="card bg-base-200">
              <div class="card-body">
                <h3 class="card-title">Pourquoi choisir un gravel ?</h3>
                <ul class="list-disc list-inside space-y-2">
                  <li>Polyvalence route et chemins</li>
                  <li>Position confortable</li>
                  <li>Capacité à porter des bagages</li>
                  <li>Pneus plus larges et confortables</li>
                </ul>
              </div>
            </div>
            <div class="card bg-base-200">
              <div class="card-body">
                <h3 class="card-title">Points clés à vérifier</h3>
                <ul class="list-disc list-inside space-y-2">
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
    </section>

    <!-- Liste des vélos -->
    <bikes-list
      title="Notre sélection de vélos gravel"
      :products="gravelBikes"
    />
  </div>
</template>

<style scoped>
.grid {
  scroll-padding: 1rem;
}
</style>
