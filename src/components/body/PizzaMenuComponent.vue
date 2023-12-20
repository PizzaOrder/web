<template>
  <div class="pizza-container">
    <div class="pizza-card" v-for="(pizza, index) in pizzas" :key="index">
      <div class="pizza-image-wrapper">
        <img :src="pizza.img_source" :alt="pizza.name" class="pizza-image" />
      </div>
        <h2>{{ pizza.name }}</h2>
        <p>{{ pizza.price.toFixed(2) }}$</p>
      <button @click="addToOrder(pizza)" >Добавить в корзину</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { usePizzaStore } from '@/Pinia/pizzaStore'
import emitter from '@/funcs/eventBus'
import { addToGlobalOrder } from '@/views/HomeComponent.vue'
const pizzaStore = usePizzaStore();
const pizzas = ref([]);

const addToOrder = (pizza) => {
  emitter.emit('button-clicked');
  addToGlobalOrder(pizza);
};
onMounted(async () => {
  await pizzaStore.fetchPizzas();
  pizzas.value = pizzaStore.pizzas;
});
</script>

<style scoped>
.pizza-container {
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  justify-content: center;
}

.pizza-card {
  margin: 15px;
  width: 90%;
  max-width: 400px;
  height: auto;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transform: translateY(0);
  transition: transform 0.3s;
  position: relative;
}

.pizza-card:hover {
  transform: translateY(-5px);
}

.pizza-image-wrapper {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
}

.pizza-image {
  max-width: 100%;
  max-height: 100%;
}

button {
  margin-top: 10px;
  padding: 10px 20px;
  border: none;
  background-color: #ff6348;
  color: #fff;
  cursor: pointer;
  transition:
    background-color 0.3s,
    transform 0.3s,
    box-shadow 0.3s;
  border-radius: 5px;
  font-weight: bold;
  box-shadow: 0 4px 8px rgba(255, 99, 71, 0.3);
}

button:hover {
  background-color: #ff7d66;
  transform: translateY(-4px);
}

button:active {
  transform: translateY(0);
  box-shadow: 0 2px 4px rgba(255, 99, 71, 0.3);
  transform: scale(0.95);
}

button:focus {
  outline: none;
}

.pizza-card::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border: 2px solid transparent;
  border-radius: 15px;
  transition: border-color 0.3s;
  pointer-events: none;
  box-sizing: border-box;
}

.pizza-card:hover::before {
  border-color: #ff5733;
}

@media (min-width: 768px) {
  .pizza-card {
    width: 45%;
  }
}

@media (min-width: 1024px) {
  .pizza-card {
    width: 30%;
  }
}
</style>