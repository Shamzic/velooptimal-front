<script setup lang="ts">
import ProductCard from '../components/cards/product-card.vue';
import type { Product  } from '@/types/products.js';

const products: Product[] = [
  { id: 0, brand: 'Riverside', model: '500', price: 449.99, url: 'https://www.decathlon.fr/p/velo-tout-chemin-riverside-500/_/R-p-300777?mc=8405155', imgSrc: 'https://contents.mediadecathlon.com/p2153847/k$f0f5096c7c7d73a6c77bc6c1e8f8c8e7/sq/velo-tout-chemin-riverside-500.jpg?format=auto&f=800x800'},
  { id: 1, brand: 'Riverside', model: '900', price: 999.99, url: 'https://www.decathlon.fr/p/velo-tout-chemin-riverside-900/_/R-p-306292?mc=8549637', imgSrc: 'https://contents.mediadecathlon.com/p2153843/k$a8b9e909d5ac0b7f73b50e9a92a1ade7/sq/velo-tout-chemin-riverside-900.jpg?format=auto&f=800x800'},
  { id: 2, brand: 'Trek', model: 'Dual Sport 2', price: 749.99, url: 'https://www.trekbikes.com/fr/fr_FR/v%C3%A9los/v%C3%A9los-hybrides/v%C3%A9los-fitness/dual-sport/dual-sport-2/p/35027/', imgSrc: 'https://trek.scene7.com/is/image/TrekBicycle/DualSport2_23_35027_A_Primary?$responsive-pjpg$&cache=on,on&wid=1920&hei=1440'},
];
</script>

<template>
  <div class="overflow-x-auto">
    <h1 class="text-2xl font-bold m-4">Vélos tout chemin (VTC)</h1>
    <div class="p-4 flex flex-row space-x-4">
      <product-card v-for="product in products" :key="product.id" :product="product" />
    </div>
  </div>
</template> 