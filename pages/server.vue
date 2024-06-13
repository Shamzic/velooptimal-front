<script setup>
import { ref } from 'vue'

const body = ref('')

async function submit() {
  body.value = await $fetch('/api/submit', {
    method: 'post',
    body: { test: 123 }
  })
}

</script>

<template>
    <div>
        <button @click="submit">Submit</button>
    </div>
  <div>
    {{ body }}
  </div>
</template>
