// store/orderStore.ts
import { defineStore } from 'pinia';
import axios from 'axios';
import { usePromoCodeStore } from '@/Pinia/promoCodeStore'

export const useOrderStore = defineStore('order', {
  state: () => ({
  }),

  actions: {
    async submitOrder() {
      // Fetch order items from local storage
      const storedOrders = JSON.parse(localStorage.getItem('orders') || '[]');

      const promoCodeStore = usePromoCodeStore();
      const promoCode = promoCodeStore.promoCodeData?.code || '';

      const orderItems = storedOrders.map(order => ({
        pizza_id: order.id,
        quantity: order.quantity,
      }));

      const payload = {
        order_items: orderItems,
        promo_code: promoCode,
      };

      try {
        // Retrieve the access token from local storage or your authentication store
        const accessToken = localStorage.getItem('access_token');

        // Check if the access token exists
        if (!accessToken) {
          throw new Error('Access token not found. User is not authenticated.');
        }

        const response = await axios.post('https://opulent-space-winner-jgjgxrp5pjqhqqp9-8000.app.github.dev/', payload, {
          headers: {
            'Authorization': `Bearer ${accessToken}`
          }
        });

        console.log('Order response:', response.data);
        // Additional logic after successful submission
      } catch (error) {
        console.error('Error submitting order:', error);
        // Error handling logic
      }
    }
  },
});
