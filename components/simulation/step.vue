
<script setup>
defineProps({
  step: {
    type: Object,
    required: true,
  },
})

const answer = ref([])
</script>

<template>
  <div class="flex flex-col items-center">
    <h1 class="text-2xl text-primary font-bold">{{ step.question }}</h1>
    <ul class="card bg-green-900 w-72 shadow-white p-4 mt-4">
      <li v-for="option in step.multipleOptions">
        <label class="flex flex-row items-center">
          <input type="checkbox" :value="option" v-model="answer" :checked="answer.includes(option)" class="checkbox checkbox-primary m-2" multiple>
          <div class="font-semibold">{{ option }}</div>
        </label>
      </li>
    </ul>
  </div>
</template>

