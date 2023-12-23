// store/pizzaStore.ts
import { defineStore } from 'pinia';
import axios from 'axios';

interface Pizza {
  name: string;
  price: number;
  img_source: string;
  id: number;
}

export const usePizzaStore = defineStore('pizza', {
  state: () => ({
    pizzas: [] as Pizza[],
    errorMessage: '',
  }),

  actions: {
    async fetchPizzas() {
      try {
        this.errorMessage = '';

        const response = await axios.get('https://potential-broccoli-wxg6w4x4jgr259w5-8000.preview.app.github.dev/pizzas');

        this.pizzas = response.data;
      } catch (error) {
        this.errorMessage = 'Failed to fetch pizzas.';
        if (axios.isAxiosError(error) && error.response) {
          this.errorMessage = error.response.data.message || this.errorMessage;
        }
      }
    }
  },
});
