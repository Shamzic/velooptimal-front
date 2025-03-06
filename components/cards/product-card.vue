<script setup lang="ts">
import type { Product } from '../../types/products.js';

const props = defineProps({
    product: {
        type: Object as PropType<Product>,
        required: true
    }
});

const title = computed(() => `${props.product.brand} - ${props.product.model}`);

const formatPrice = (price: number | string): string => {
    const numericPrice = typeof price === 'string' ? parseFloat(price) : price;
    return new Intl.NumberFormat('fr-FR', {
        style: 'currency',
        currency: 'EUR',
    }).format(numericPrice);
};

const showDetails = ref(false);
</script>

<template>
<div 
  class="card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden"
  @mouseenter="showDetails = true"
  @mouseleave="showDetails = false"
>
  <figure class="relative h-64 overflow-hidden">
    <img
      :src="product.imgSrc"
      :alt="title"
      class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
    />
  </figure>

  <div class="card-body p-6">
    <div class="flex flex-col gap-3">
      <div class="flex items-start justify-between">
        <h2 class="card-title text-lg font-bold group-hover:text-primary transition-colors">
          {{title}}
        </h2>
        <div class="badge badge-primary badge-lg font-bold">
          {{ formatPrice(product.price) }}
        </div>
      </div>

      <div 
        class="flex flex-col items-center mt-4 transform transition-all duration-300"
        :class="showDetails ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'"
      >
        <a 
          :href="product.url" 
          target="_blank"
          class="relative flex items-center justify-center w-full px-6 py-3 text-sm font-medium transition-all duration-300 rounded-lg bg-base-200 hover:bg-base-300 group/btn"
        >
          <span class="relative flex items-center gap-2">
            Voir le vélo
            <Icon
              name="material-symbols:arrow-right-alt-rounded" 
              class="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1" 
            />
          </span>
          <div class="absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover/btn:w-full" />
        </a>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>
.card {
  backdrop-filter: blur(10px);
  transform: translateZ(0);
}
</style>