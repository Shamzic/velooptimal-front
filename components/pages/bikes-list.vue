<script setup lang="ts">
import ProductCard from '../cards/product-card.vue';
import type { Product } from '@/types/products.js';

interface Props {
  title: string;
  products: Product[];
}

defineProps<Props>();
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-8 text-center">{{ title }}</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <product-card 
        v-for="product in products" 
        :key="product.id" 
        :product="product"
        class="w-full"
      />
    </div>
  </div>
</template>

<style scoped>
.grid {
  scroll-padding: 1rem;
}
</style> 