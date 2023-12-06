// composables/useCities.ts
import { onMounted, ref } from 'vue';
import { useCitiesStore } from '@/Pinia/citiesStore'

export function useCities() {
  const cities = ref<{ city: string; id: number }[]>([]);
  const store = useCitiesStore();

  onMounted(async () => {
    try {
      const response = await fetch('http://localhost:8000/cities');
      if (!response.ok) {
        throw new Error('Error fetching cities');
      }
      cities.value = await response.json();
    } catch (error) {
      console.error(error);
    }
  });

  return {
    cities,
  };
}
