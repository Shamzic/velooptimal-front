
<script setup lang="ts">
defineProps({
    imgSrc: String,
    title: String,
    description: String,
    buttonLabel: String,
    buttonRedirect: String
})
</script>

<template>
<div class="card bg-base-300 w-96 shadow-xl">
  <figure>
    <img
      :src="imgSrc"
      :alt="title" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">{{title}}</h2>
    <p>{{description}}</p>
    <div class="card-actions justify-end">
      <a :href="buttonRedirect" class="btn">{{ buttonLabel }}</a>
    </div>
  </div>
</div>
</template>