
<script setup lang="ts">
import type { Product } from '../../types/products.js';

const props = defineProps({
    product: {
        type: Object as PropType<Product>,
        required: true
    }
})

const title = computed(() => `${props.product.brand} - ${props.product.model}`)


</script>

<template>
<div class="card bg-base-300 w-96 h-96 shadow-xl">
  <figure>
    <img
      :src="product.imgSrc"
      :alt="title" />
  </figure>
  <div class="card-body">
    <div class="flex flex-row items-center justify-around">
        <h2 class="card-title">{{title}}</h2>
        <div class="ml-4 font-extrabold text-primary">${{product.price}}</div>
    </div>
    <div class="card-actions justify-end">
      <a class="btn" :href="product.url" target="_blank">Voir le vélo</a>
    </div>
  </div>
</div>
</template>