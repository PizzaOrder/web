import { defineStore } from 'pinia';
import axios from 'axios';

export const useAdminStore = defineStore('admin', {
  actions: {
    async fetchAllOrders() {
      const token = localStorage.getItem('access_token');
      const config = {
        headers: {
          token: token,
        },
      };
      try {
        const response = await axios.get('https://potential-broccoli-wxg6w4x4jgr259w5-8000.preview.app.github.dev/admin/order/', config);
        console.log('Fetched all orders:', response.data);
        return response.data;
      } catch (error) {
        console.error('Error fetching orders:', error);
        throw error;
      }
    },

    async updateOrderStatus(orderId: number) {
      const token = localStorage.getItem('access_token');
      const newStatus = localStorage.getItem(`order_status_${orderId}`); // Извлекаем new_status из localStorage
      // Проверяем, действительно ли newStatus был сохранен и является одним из допустимых значений
      if (!newStatus || !['Принят', 'Готовится', 'Готов', 'Выдан'].includes(newStatus)) {
        throw new Error('Invalid or missing status in localStorage');
      }
      console.log('Order status updated:', newStatus);

      const config = {
        headers: {
          token: token,
        },
      };
      const body = {
        order_id: orderId,
        new_status: newStatus,
      };
      try {
        const response = await axios.put(`https://potential-broccoli-wxg6w4x4jgr259w5-8000.preview.app.github.dev/admin/order/${orderId}/`, body, config);
        console.log('Order status updated:', response.data);
        return response.data;
      } catch (error) {
        console.error('Error updating order status:', error);
        console.log('Order status updated:', newStatus , orderId);
        throw error;
      }
    },

  },
});
