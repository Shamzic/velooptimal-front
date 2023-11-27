
<script setup>
import { ref } from 'vue';

const products = ref([
  { id: 1, name: 'Produit 1', price: 10, url: 'https://example.com/produit1' },
  { id: 2, name: 'Produit 2', price: 20, url: 'https://example.com/produit2' },
  { id: 3, name: 'Produit 3', price: 30, url: 'https://example.com/produit3' },
]);
</script>

<template>
  <div class="overflow-x-auto">
    <h1 class="text-2xl font-bold m-4">Matériel de camping et bivouac</h1>
    <table class="table table-zebra">
      <thead>
        <tr>
          <th>Nom du produit</th>
          <th>Prix</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.name }}</td>
          <td>{{ product.price }}</td>
          <td><a :href="product.url" target="_blank">{{ product.url }}</a></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
