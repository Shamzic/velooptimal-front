<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue';

interface Props {
  minPrice: number;
  maxPrice: number;
  modelValue: [number, number];
}

const props = defineProps<Props>();
const emit = defineEmits<{
  (e: 'update:modelValue', value: [number, number]): void;
}>();

// Initialisation du range local
const localRange = ref<[number, number]>([
  Math.max(props.minPrice, props.modelValue[0]),
  Math.min(props.maxPrice, props.modelValue[1])
]);

// Formatte les prix en euros
const formattedRange = computed(() => ({
  min: new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(localRange.value[0]),
  max: new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(localRange.value[1])
}));

// Calcule la position de la barre de progression
const progressStyle = computed(() => {
  const range = props.maxPrice - props.minPrice;
  const left = ((localRange.value[0] - props.minPrice) / range) * 100;
  const width = ((localRange.value[1] - localRange.value[0]) / range) * 100;
  
  return {
    left: `${Math.max(0, Math.min(100, left))}%`,
    width: `${Math.max(0, Math.min(100, width))}%`
  };
});

// Met à jour le range quand les props changent
watch([() => props.minPrice, () => props.maxPrice, () => props.modelValue], () => {
  localRange.value = [
    Math.max(props.minPrice, props.modelValue[0]),
    Math.min(props.maxPrice, props.modelValue[1])
  ];
}, { immediate: true });

// Émet les changements vers le parent
watch(localRange, (newValue) => {
  if (newValue[0] !== props.modelValue[0] || newValue[1] !== props.modelValue[1]) {
    emit('update:modelValue', newValue);
  }
}, { deep: true });

// Met à jour le range en fonction de l'input
const updateRange = (index: number, value: number) => {
  value = Number(value);
  const newRange = [...localRange.value] as [number, number];
  
  if (index === 0) {
    // Mise à jour du minimum
    newRange[0] = Math.max(props.minPrice, Math.min(newRange[1], value));
  } else {
    // Mise à jour du maximum
    newRange[1] = Math.min(props.maxPrice, Math.max(newRange[0], value));
  }
  
  localRange.value = newRange;
};

// Initialisation au montage
onMounted(() => {
  localRange.value = [props.minPrice, props.maxPrice];
});
</script>

<template>
  <div class="w-full">
    <div class="flex justify-between text-sm mb-2">
      <span class="text-base-content/70">{{ formattedRange.min }}</span>
      <span class="text-base-content/70">{{ formattedRange.max }}</span>
    </div>
    <div class="relative pt-2 h-8">
      <!-- Barre de fond -->
      <div class="absolute w-full h-2 bg-base-300 rounded-full"></div>
      
      <!-- Barre de progression -->
      <div 
        class="absolute h-2 bg-primary rounded-full"
        :style="progressStyle"
      ></div>
      
      <!-- Curseurs -->
      <input 
        type="range" 
        :value="localRange[0]" 
        @input="(e) => updateRange(0, Number((e.target as HTMLInputElement).value))"
        :min="props.minPrice" 
        :max="props.maxPrice"
        :step="50"
        class="range-slider absolute w-full pointer-events-none appearance-none bg-transparent outline-none h-2" 
      />
      <input 
        type="range" 
        :value="localRange[1]" 
        @input="(e) => updateRange(1, Number((e.target as HTMLInputElement).value))"
        :min="props.minPrice" 
        :max="props.maxPrice"
        :step="50"
        class="range-slider absolute w-full pointer-events-none appearance-none bg-transparent outline-none h-2" 
      />
    </div>
  </div>
</template>

<style scoped>
.range-slider::-webkit-slider-thumb {
  @apply pointer-events-auto appearance-none w-4 h-4 bg-primary rounded-full cursor-pointer shadow-md border-2 border-white;
}

.range-slider::-moz-range-thumb {
  @apply pointer-events-auto appearance-none w-4 h-4 bg-primary rounded-full cursor-pointer shadow-md border-2 border-white;
}

.range-slider:focus::-webkit-slider-thumb {
  @apply ring-2 ring-primary ring-offset-2;
}

.range-slider:focus::-moz-range-thumb {
  @apply ring-2 ring-primary ring-offset-2;
}
</style> 