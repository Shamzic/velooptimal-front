<script setup lang="ts">
import ProductCard from '../components/cards/product-card.vue';
import type { Product  } from '@/types/products.js';

const products: Product[] = [
  { id: 0, brand: 'Nakamura', model: 'Allroad 250', price: 1199.99, url: 'https://www.intersport.fr/velo_gravel_adulte_allroad_250-nakamura-p-YF60H6~8QQ/', imgSrc: 'https://www.transitionvelo.com/content/uploads/2024/04/Nakamura-Allroad-250.jpg'},
  { id: 1, brand: 'Triban', model: 'GRVL 120', price: 800, url: 'https://www.decathlon.fr/p/velo-gravel-triban-grvl-120/_/R-p-312397?mc=8575940&c=vert', imgSrc: 'https://contents.mediadecathlon.com/p1956473/k$16ac0a30a404e2ecf763d5d98f8dec80/sq/velo-gravel-triban-grvl-520-homme-subcompact.jpg?format=auto&f=1200x1200'},
  { id: 2, brand: 'Triban', model: 'GRVL 520', price: 1200, url: 'https://www.decathlon.fr/p/velo-gravel-triban-grvl-520-homme-subcompact/_/R-p-313015?mc=8587697', imgSrc:'https://contents.mediadecathlon.com/p2579595/k$a4d99da7969620f9715ba2c7ad39b833/sq/velo-gravel-triban-grvl-120.jpg?format=auto&f=1200x1200' },
];
</script>

<template>
  <div class="overflow-x-auto">
    <h1 class="text-2xl font-bold m-4">Vélos de route</h1>
     <div class="p-4 flex flex-row space-x-4">
      <product-card v-for="product in products" :key="product.id" :product="product" />
    </div>
  </div>
</template> 