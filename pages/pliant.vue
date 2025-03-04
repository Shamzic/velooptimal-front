<script setup lang="ts">
import ProductCard from '../components/cards/product-card.vue';
import type { Product  } from '@/types/products.js';

const products: Product[] = [
  { id: 0, brand: 'B\'Twin', model: 'Tilt 500', price: 399.99, url: 'https://www.decathlon.fr/p/velo-pliant-tilt-500/_/R-p-120064?mc=8500807', imgSrc: 'https://contents.mediadecathlon.com/p2154890/k$2b4bb17d08ce974348d3ba3f3e017a8f/sq/velo-pliant-tilt-500.jpg?format=auto&f=800x800'},
  { id: 1, brand: 'Brompton', model: 'C Line', price: 1590, url: 'https://www.brompton.com/bikes/c-line', imgSrc: 'https://brompton.imgix.net/assets/Bikes/C-Line/C-Line-Explore/C-Line-Explore-House-Red.png?auto=format&fit=max&h=1080&ixlib=php-3.3.1&w=1920&s=e7ca8e5d77c3857c6b49c2bae06f7427'},
  { id: 2, brand: 'Tern', model: 'Link C8', price: 899, url: 'https://www.ternbicycles.com/bikes/471/link-c8', imgSrc: 'https://www.ternbicycles.com/sites/default/files/images/bikes/2021/21-tern-link-c8-gy.jpg'},
];
</script>

<template>
  <div class="overflow-x-auto">
    <h1 class="text-2xl font-bold m-4">Vélos pliants</h1>
    <div class="p-4 flex flex-row space-x-4">
      <product-card v-for="product in products" :key="product.id" :product="product" />
    </div>
  </div>
</template> 