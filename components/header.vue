
<template>
    <div>
        <ul>
            <li><NuxtLink to="/">Optimal Gear</NuxtLink></li>
            <li><NuxtLink to="/camper">Camping</NuxtLink></li>
            <li><NuxtLink to="/trail">Trail</NuxtLink></li>
        </ul>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const title = ref('Optimal Gear');
</script>
