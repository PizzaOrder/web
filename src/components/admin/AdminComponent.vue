<template>
  <div class="admin-menu">
    <div>
      <router-link to='/'>Главное меню</router-link>
    </div>
    <h1>Админ меню</h1>
    <div class="order-item" v-for="(order, orderIndex) in orders" :key="orderIndex">
      <div><strong>Заказ номер {{ order.id }}</strong></div>
      <div>
        <button @click="markOrderAsReady(orderIndex)" v-if="!isOrderReady(order)">
          Пометить как готовый
        </button>
      </div>
      <div :class="{ 'ready': isOrderReady(order), 'not-ready': !isOrderReady(order) }">
        {{ getOrderStatus(order) }}
      </div>
      <div class="order-info" v-for="(item, itemIndex) in order.items" :key="itemIndex">
        <table>
          <tr>
            <td>Название</td>
            <td>{{ item.name }}</td>
          </tr>
          <tr>
            <td>Цена</td>
            <td>${{ item.price }}</td>
          </tr>
          <tr>
            <td>Количество</td>
            <td>{{ item.quantity }}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {  ref, Ref } from 'vue'

interface Order {
  id: number;
  items: { name: string; price: number; quantity: number }[];
  RON: Ref<string>;
}

const orders: Order[] = [
  {
    id: 1,
    items: [
      {
        name: 'Пицца',
        price: 20,
        quantity: 3,
      },
      {
        name: 'Не пицца ',
        price: 40,
        quantity: 2,
      }
    ],
    RON: 'Готово'
  },
  {
    id: 2,
    items: [
      {
        name: 'Абоба',
        price: 800,
        quantity: 1,
      },
    ],
    RON: ' Не Готово'
  },
].map(order => ({
  ...order,
  RON: ref(order.RON)
}));

const isOrderReady = (order: Order): boolean => {
  return order.RON.value === 'Готово';
};

const markOrderAsReady = (orderIndex: number) => {
  orders[orderIndex].RON.value = 'Готово';
};

const getOrderStatus = (order: Order): string => {
  return isOrderReady(order) ? 'Готово' : 'Не Готово';
};
</script>

<style scoped>
.ready {
  color: green;
}

.not-ready {
  color: red;
}

.order-item {
  margin: 30px;
  font-size: 18px;
}

button {
  margin-top: 5px;
  padding: 5px 10px;
}
</style>



