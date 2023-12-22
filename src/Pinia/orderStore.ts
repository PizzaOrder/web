import { defineStore } from 'pinia';
import axios from 'axios';

export const useOrderStore = defineStore('order', {
  actions: {
    async sendOrder() {
      try {
        // Извлекаем токен и заказы из localStorage
        const token = localStorage.getItem('access_token');
        const storedOrders = JSON.parse(localStorage.getItem('orders'));
        const promoCode = localStorage.getItem('promoCode');

        // Формируем тело запроса
        const orderData = {
          order_items: storedOrders.map(order => ({
            pizza_id: order.id,
            quantity: order.quantity
          })),
          promo_code: promoCode
        };
        console.log(orderData);
        // Конфигурация запроса
        const config = {
          headers: {
            token: token,
          },
        };

        // Отправляем POST запрос
        const response = await axios.post('https://potential-broccoli-wxg6w4x4jgr259w5-8000.preview.app.github.dev/order/new/', orderData, config);
        localStorage.removeItem('orders');
        // Обработка ответа
      } catch (error) {

        console.error('Error sending order:', error);
      }
    }
  }
});
