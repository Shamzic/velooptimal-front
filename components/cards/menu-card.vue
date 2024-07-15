
<script setup lang="ts">
import { defineProps } from 'vue'


const props = defineProps({
    imgSrc: String,
    title: String,
    description: String,
    buttonLabel: String
})
</script>

<template>
<div class="card bg-base-300 w-96 shadow-xl">
  <figure>
    <img
      :src="imgSrc"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">{{title}}</h2>
    <p>{{description}}</p>
    <div class="card-actions justify-end">
      <button class="btn">{{ buttonLabel }}</button>
    </div>
  </div>
</div>
</template>