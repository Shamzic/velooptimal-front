<script setup>
import Step from '../components/simulation/step.vue'

const situation = ref({})

const steps = ref([
  { question: "Quelle serait votre utilisation principale de votre vélo ?", multipleOptions: [ "Transport", "Sport et loisir"] },
  { question: "Sur quel types de route préférez-vous rouler ? ", multipleOptions: [ "Route en ville", "Routes de campagne et chemins", "Pistes cyclables", "Sentiers en forêts et montagnes" ]},
  { question: "Parmi ces critères, lesqules sont les plus importants pour vous ?", multipleOptions: [ "Performance", "Versatilité", "Confort"]}
])
</script>

<template>
  <div class="p-8">
    <h1 class="text-3xl text-primary font-bold">Simulateur</h1>
    <div className="divider divider-primary"></div>
    <h2 class="text-lg font-semibold">Déterminez le type de vélo optimal pour votre pratique</h2>
    <div class="mt-12 flex flex-col items-center space-y-4 card bg-green-600 bg-opacity-5 shadow-2xl rounded-box p-12">
      <Step :step="steps[0]"/>
      <progress className="progress progress-primary w-64" value="33" max="100"></progress>
    </div>
    <div className="flex w-full flex-col border-opacity-50">
</div>
  </div>
</template>