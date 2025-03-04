<script setup lang="ts">
import ProductCard from '../components/cards/product-card.vue';
import type { Product  } from '@/types/products.js';

const products: Product[] = [
  { 
    id: 0, 
    brand: 'B\'Twin', 
    model: 'Riverside 500', 
    price: 399.99, 
    url: 'https://www.decathlon.fr/p/velo-tout-chemin-riverside-500-bleu-nuit/_/R-p-300777?mc=8577925', 
    imgSrc: 'https://contents.mediadecathlon.com/p2131458/k$6185b3e6d76770102bf16f96173e5a53/sq/velo-tout-chemin-riverside-500-bleu-nuit.jpg?format=auto&f=1200x1200'
  },
  { 
    id: 1, 
    brand: 'B\'Twin', 
    model: 'Riverside 120', 
    price: 299.99, 
    url: 'https://www.decathlon.fr/p/velo-tout-chemin-riverside-120-gris/_/R-p-300806?mc=8771010&c=gris', 
    imgSrc: 'https://contents.mediadecathlon.com/p2191810/k$7a0f0bb0f0a2cfa13886b19146b4b90f/sq/velo-tout-chemin-riverside-120-gris.jpg?format=auto&f=1200x1200'
  },
  { 
    id: 2, 
    brand: 'Nakamura', 
    model: 'Crossland', 
    price: 399.99, 
    url: 'https://www.intersport.fr/vtc_adulte_crossland_b-nakamura-p-YF60Z1~1PV/', 
    imgSrc: 'https://meilleur-velo-electrique.com/wp-content/uploads/2024/09/Nakamura-Crossland.png'
  }
];
</script>

<template>
  <div class="overflow-x-auto">
    <h1 class="text-2xl font-bold m-4">Vélos Tout Chemin</h1>
    <div class="p-4 flex flex-row space-x-4">
      <product-card v-for="product in products" :key="product.id" :product="product" />
    </div>
  </div>
</template> 