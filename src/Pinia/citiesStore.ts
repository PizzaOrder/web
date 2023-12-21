// store/cities.ts
import { defineStore } from 'pinia';
import axios from 'axios';

interface City {
  id: number;
  city: string;
}

export const useCitiesStore = defineStore('cities', {
  state: () => ({
    cities: [] as City[],
    selectedCityId: localStorage.getItem('selectedCityId') ? parseInt(localStorage.getItem('selectedCityId')!) : 1,
  }),
  actions: {
    async fetchCities() {
      try {
        const response = await axios.get('https://opulent-space-winner-jgjgxrp5pjqhqqp9-8000.app.github.dev/cities');
        this.cities = response.data;
        if (!this.cities.find(city => city.id === this.selectedCityId)) {
          this.setSelectedCity(1); // Установите город с ID 1, если текущий выбранный город отсутствует в списке
        }
      } catch (error) {
        console.error('Ошибка при получении городов:', error);
      }
    },
    setSelectedCity(id: number) {
      this.selectedCityId = id;
      localStorage.setItem('selectedCityId', id.toString());
    }
  }
});
