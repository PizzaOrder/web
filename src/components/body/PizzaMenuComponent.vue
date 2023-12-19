<script setup>
import { onMounted } from 'vue';
import { usePizzaStore } from '@/Pinia/pizzaStore'
const pizzaStore = usePizzaStore();

onMounted(() => {
  pizzaStore.fetchPizzas();
});
</script>

<template>
  <div>
    <h1>Pizzas</h1>
    <div v-if="pizzaStore.errorMessage">{{ pizzaStore.errorMessage }}</div>
    <ul v-else>
      <li v-for="pizza in pizzaStore.pizzas" :key="pizza.id">
        {{ pizza.name }} - ${{ pizza.price }}
        <img :src="pizza.img_source" :alt="pizza.name" />
      </li>
    </ul>
  </div>
</template>
