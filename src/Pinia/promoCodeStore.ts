// В файле promoCodeStore.ts

import { defineStore } from 'pinia';
import axios from 'axios';

interface PromoCode {
  start_date: string;
  end_date: string;
  code: string;
  id: number;
  discount_percentage: number;
}

interface PromoCodeState {
  promoCodeData: PromoCode | null;
  isValid: boolean | null;
}

export const usePromoCodeStore = defineStore('promoCode', {
  state: (): PromoCodeState => ({
    promoCodeData: null,
    isValid: null,
  }),

  actions: {
    async validatePromoCode(code: string) {
      try {
        const response = await axios.get(`https://improved-cod-55x6w959xw924jvp-8000.app.github.dev/promo_codes/validate/${code}`);
        if (response.data && this.isPromoCodeValid(response.data)) {
          this.promoCodeData = response.data;
          this.isValid = true;
        } else {
          // Сброс данных промокода, если он недействителен
          this.promoCodeData = null;
          this.isValid = false;
        }
      } catch (error) {
        console.error('Error validating promo code:', error);
        // Сброс данных промокода в случае ошибки
        this.promoCodeData = null;
        this.isValid = false;
      }
    },

    isPromoCodeValid(data: PromoCode) {
      const now = new Date();
      const startDate = new Date(data.start_date);
      const endDate = new Date(data.end_date);
      return now >= startDate && now <= endDate;
    },
  },
});
