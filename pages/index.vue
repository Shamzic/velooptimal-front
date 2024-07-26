<script setup lang="ts">
import MenuCard from '../components/cards/menu-card.vue'

</script>

<template>
  <div>
    <div class="text-center text-3xl flex justify-center items-center space-x-4  my-6">
      <div class="text-4xl rotate-180 mt-4 ">&#x2934;</div>
      <h2 class="m-16 leading-10">Déterminez le vélo adapté à <b>VOTRE</b> pratique et à votre <b>BUDGET</b></h2>
      <div class="text-4xl mt-3">&#x2935;</div>
    </div>
    
    <div class="flex justify-center space-x-12">
      <menu-card 
        imgSrc="/img/simulator-card.png"
        title="Simulateur"
        description="Déterminez en quelques secondes le vélo optimal pour vous et votre pratique ?"
        buttonLabel="Faire une simulation"
        buttonRedirect="/simulator"
      />
      <menu-card
        imgSrc="/img/best-bike-card.jpeg"
        title="Comparateur"
        description="Classement des meilleurs vélos en fonction de votre budget"
        buttonLabel="Voir les vélos"
        buttonRedirect="/gravel"
      />
    </div>
  </div>
</template>
