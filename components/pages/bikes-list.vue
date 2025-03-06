<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import ProductCard from '../cards/product-card.vue';
import PriceRangeSlider from '../filters/price-range-slider.vue';
import type { Product } from '@/types/products.js';

interface Props {
  title: string;
  products: Product[];
}

const props = defineProps<Props>();

// Filtres
const priceRange = ref<[number, number]>([0, 5000]);
const searchQuery = ref('');
const selectedBrands = ref<string[]>([]);

// Computed properties pour les filtres
const availableBrands = computed(() => {
  return [...new Set(props.products.map(p => p.brand))];
});

const minPrice = computed(() => Math.floor(Math.min(...props.products.map(p => Number(p.price)))));
const maxPrice = computed(() => Math.ceil(Math.max(...props.products.map(p => Number(p.price)))));

// Initialise les prix au montage du composant
onMounted(() => {
  // Debug de l'initialisation
  console.log('Prix disponibles:', props.products.map(p => p.price));
  console.log('Min calculé:', minPrice.value);
  console.log('Max calculé:', maxPrice.value);

  priceRange.value = [minPrice.value, maxPrice.value];
});

const formattedPriceRange = computed(() => ({
  min: new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(priceRange.value[0]),
  max: new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(priceRange.value[1])
}));

const filteredProducts = computed(() => {
  // Créer un Set des IDs pour éviter les doublons
  const seenIds = new Set();
  
  return props.products
    // Filtrer les doublons
    .filter(product => {
      if (seenIds.has(product.id)) return false;
      seenIds.add(product.id);
      return true;
    })
    // Appliquer les filtres
    .filter(product => {
      const matchesSearch = searchQuery.value === '' || 
        product.brand.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        product.model.toLowerCase().includes(searchQuery.value.toLowerCase());
      
      const matchesBrand = selectedBrands.value.length === 0 || 
        selectedBrands.value.includes(product.brand);
      
      const productPrice = Number(product.price);
      const matchesPrice = productPrice >= priceRange.value[0] && productPrice <= priceRange.value[1];

      // Debug des comparaisons de prix
      console.log({
        product: `${product.brand} ${product.model}`,
        price: productPrice,
        min: priceRange.value[0],
        max: priceRange.value[1],
        matches: matchesPrice
      });

      return matchesSearch && matchesBrand && matchesPrice;
    })
    // Trier par prix
    .sort((a, b) => Number(a.price) - Number(b.price));
});
</script>

<template>
  <div class="container mx-auto px-4 py-12">
    <div class="text-center mb-12">
      <h1 class="text-4xl font-bold mb-4">{{ props.title }}</h1>
      <p class="text-base-content/70 text-lg max-w-2xl mx-auto">
        Découvrez notre sélection des meilleurs vélos au meilleur rapport qualité-prix
      </p>
    </div>

    <!-- Filtres -->
    <div class="bg-base-200 rounded-box p-6 mb-8">
      <div class="flex flex-col md:flex-row gap-6">
        <!-- Recherche -->
        <div class="flex-1">
          <div class="form-control">
            <div class="input-group">
              <input 
                v-model="searchQuery"
                type="text" 
                placeholder="Rechercher un vélo..." 
                class="input input-bordered w-full" 
              />
              <button class="btn btn-square">
                <Icon name="material-symbols:search" class="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        <!-- Filtres par marque -->
        <div class="flex-1">
          <div class="flex flex-wrap gap-2">
            <button 
              v-for="brand in availableBrands"
              :key="brand"
              class="btn btn-sm"
              :class="selectedBrands.includes(brand) ? 'btn-primary' : 'btn-ghost'"
              @click="selectedBrands.includes(brand) 
                ? selectedBrands = selectedBrands.filter(b => b !== brand)
                : selectedBrands.push(brand)"
            >
              {{ brand }}
            </button>
          </div>
        </div>

        <!-- Filtre par prix -->
        <div class="flex-1">
          <price-range-slider
            v-model="priceRange"
            :min-price="minPrice"
            :max-price="maxPrice"
          />
        </div>
      </div>
    </div>

    <!-- Résultats -->
    <TransitionGroup
      name="product"
      tag="div"
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative"
    >
      <product-card 
        v-for="product in filteredProducts" 
        :key="product.id"
        :product="product"
        class="h-full"
      />
    </TransitionGroup>

    <!-- Message si aucun résultat -->
    <div 
      v-if="filteredProducts.length === 0"
      class="text-center py-12"
    >
      <Icon 
        name="material-symbols:search-off" 
        class="w-16 h-16 mx-auto mb-4 text-base-content/30"
      />
      <p class="text-lg text-base-content/70">
        Aucun vélo ne correspond à vos critères
      </p>
    </div>
  </div>
</template>

<style scoped>
.product-move,
.product-enter-active,
.product-leave-active {
  transition: all 0.5s ease;
}

.product-enter-from,
.product-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.product-leave-active {
  position: absolute;
}

.grid {
  scroll-padding: 1rem;
  position: relative;
}

.range {
  @apply w-full;
}

/* Style pour superposer les sliders */
.range::-webkit-slider-thumb {
  @apply relative z-10;
}

.range::-moz-range-thumb {
  @apply relative z-10;
}
</style> 