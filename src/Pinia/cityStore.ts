import { defineStore } from 'pinia';

export const useCityStore = defineStore({
  id: 'city',
  state: () => ({
    city: '',
  }),
  actions: {
    setCity(newCity: string) {
      this.city = newCity;
    },
  },
});
