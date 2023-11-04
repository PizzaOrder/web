<template>
  <div>
    <h1>Current Orders</h1>
    <ul>
      <li v-for="(order, index) in orders" :key="index">{{ order.name }} - ${{ order.price }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { globalState } from '@/views/HomeComponent.vue';

export default defineComponent({
  name: 'OrdersComponent',
  computed: {
    orders() {
      return globalState.orders;
    }
  }
});
</script>
