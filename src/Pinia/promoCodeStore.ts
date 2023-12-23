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
        const response = await axios.get(`https://potential-broccoli-wxg6w4x4jgr259w5-8000.preview.app.github.dev/promo_codes/validate/${code}`);
        if (response.data && response.data.discount_percentage) {
          this.id = response.data.id;
          this.promoCode = storedPromoCode;
          this.discount = response.data.discount_percentage;
          console.log(this.discount)
          console.log(this.promoCode)

          this.isValid = true;
          this.errorMessage = '';
        } else {
          this.errorMessage = 'Invalid promo code.';
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
