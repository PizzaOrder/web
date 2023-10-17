<script setup lang="ts">
import { ref } from 'vue';
import Header from '@/components/Header.vue';

const msg = ref('PizzaOrder');
</script>

<template>
  <div>
    <Header />
    <p>Hello, {{ msg }}</p>
  </div>
</template>
