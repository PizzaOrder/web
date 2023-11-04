<template>
  <div>
      <div v-for="(order, index) in orders" :key="index">
        <img :src="order.image" alt="" />
        {{ order.name }} - ${{ order.price }} кол: {{order.quantity}}
      </div>
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
