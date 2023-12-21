import { defineStore } from 'pinia';
import axios from 'axios';

export const usePromoCodeStore = defineStore('promoCode', {
  state: () => ({
    id: null,
    promoCode: '',
    discount: 0,
    isValid: false,
    isLoading: false,
    errorMessage: '',
  }),

  actions: {
    async validatePromoCode(code) {
      this.isLoading = true;
      try {
        const storedPromoCode = localStorage.getItem('promoCode');
        if (storedPromoCode) {
          const response = await axios.get(`https://opulent-space-winner-jgjgxrp5pjqhqqp9-8000.app.github.dev/promo_codes/validate/${storedPromoCode}`);
          if (response.data && response.data.discount_percentage) {
            this.id = response.data.id;
            this.promoCode = storedPromoCode; // Используем promoCode из localStorage
            this.discount = response.data.discount_percentage;
            console.log(this.discount)
            this.isValid = true;
            this.errorMessage = '';
          } else {
            this.errorMessage = 'Invalid promo code.';
            this.isValid = false;
          }
        } else {
          this.errorMessage = 'No promo code found in localStorage.';
          this.isValid = false;
        }
      } catch (error) {
        this.errorMessage = error.response.data.message || 'Error validating promo code.';
        this.isValid = false;
      } finally {
        this.isLoading = false;
      }
    },
  },
});