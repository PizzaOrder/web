<template>
  <div class="pizza-container">
    <div class="pizza-card" v-for="(pizza, index) in pizzas" :key="index">
      <div class="pizza-image-wrapper">
        <img :src="pizza.image" :alt="pizza.name" class="pizza-image" />
      </div>
      <h2>{{ pizza.name }}</h2>
      <p v-if="pizza.price">${{ pizza.price.toFixed(2) }}</p>
      <button v-if="pizza.buttonText" @click="addToOrder(pizza)">{{ pizza.buttonText }}</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import { addToGlobalOrder } from '@/views/HomeComponent.vue'
import emitter from '@/funcs/eventBus'

export default defineComponent({
  name: 'PizzaMenuComponent',
  props: {
    pizzas: {
      type: Array as PropType<{ image: string; name: string; price: number; buttonText: string }[]>,
      required: true
    }
  },
  methods: {
    addToOrder(pizza: { image: string; name: string; price: number; buttonText: string }) {
      emitter.emit('button-clicked')
      addToGlobalOrder(pizza)
    }
  }
})
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
