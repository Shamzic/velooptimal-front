<script setup lang="ts">
import ProductCard from '../components/cards/product-card.vue';
import type { Product  } from '@/types/products.js';

const products: Product[] = [
  { 
    id: 0, 
    brand: 'B\'Twin', 
    model: 'Fold 500', 
    price: 499.99, 
    url: 'https://www.decathlon.fr/p/velo-pliant-fold-500-bleu-fonce/_/R-p-343354?mc=8771462', 
    imgSrc: 'https://contents.mediadecathlon.com/p2488503/k$1d54ba6226f42ca27c15d11eae0689c9/sq/velo-pliant-fold-500-bleu-fonce.jpg?format=auto&f=969x969'
  },
  { 
    id: 1, 
    brand: 'Brompton', 
    model: 'C Line Explore', 
    price: 1699, 
    url: 'https://fr.brompton.com/p/903/fr-c-line-explore', 
    imgSrc: 'https://cdn11.bigcommerce.com/s-y6rxtt0m81/products/903/images/44178/M6L033BB6B00R000B0050125333300FR_2__31225.1738834812.1280.1280.jpg?c=1'
  },
  { 
    id: 2, 
    brand: 'Tern', 
    model: 'Link D8', 
    price: 999, 
    url: 'https://www.cyclable.com/13493-velo-pliant-tern-link-d8.html', 
    imgSrc: 'https://www.cyclable.com/47408-thickbox/velo-pliant-tern-link-d8.jpg'
  },
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