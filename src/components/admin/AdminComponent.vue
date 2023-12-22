<template>
  <div>
    <h2>All Orders</h2>
    <div v-if="loading">Loading orders...</div>
    <div v-else>
      <div v-for="(orders, userId) in ordersByUser" :key="userId">
        <h3>User ID: {{ userId }}</h3>
        <ul>
          <li v-for="(order, index) in orders" :key="index">
            <div :class="statusClass(order.newStatus)">
              <p :class="statusClass(order.newStatus)">Order ID: {{ order.id }}</p>
              <p :class="statusClass(order.newStatus)">User ID: {{ order.user_id }}</p>
              <p :class="statusClass(order.newStatus)">Promo ID: {{ order.promo_id }}</p>
              <p :class="statusClass(order.newStatus)">Total Cost: {{ order.total_cost }}</p>
              <p :class="statusClass(order.newStatus)">Order Date: {{ order.order_date }}</p>
              <p :class="statusClass(order.newStatus)">Order Status: {{ order.order_status }}</p>
              <p :class="statusClass(order.newStatus)">Order Items: {{ JSON.stringify(order.order_items, null, 2) }}</p>
            </div>
            <div>
              <label :for="'status-select-' + order.id">Change Status:</label>
              <select :id="'status-select-' + order.id" v-model="order.newStatus" @change="saveStatusToLocal(order.id, order.newStatus)">
                <option value="Принят">Принят</option>
                <option value="Готовится">Готовится</option>
                <option value="Готов">Готов</option>
                <option value="Выдан">Выдан</option>
              </select>
              <button @click="updateStatus(order.id, order.newStatus)">Update Status</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<!-- Оставьте остальной код без изменений -->
<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { useAdminStore } from '@/Pinia/orderAllStore';

export default defineComponent({
  setup() {
    const saveStatusToLocal = (orderId, newStatus) => {
      localStorage.setItem(`order_status_${orderId}`, newStatus);
    };

    const loadStatusFromLocal = (orderId) => {
      return localStorage.getItem(`order_status_${orderId}`) || '';
    };

    const adminStore = useAdminStore();
    const ordersByUser = ref({});
    const loading = ref(true);

    const fetchOrders = async () => {
      try {
        const data = await adminStore.fetchAllOrders();
        ordersByUser.value = groupOrdersByUser(data);
      } catch (error) {
        console.error('Failed to fetch orders:', error);
      } finally {
        loading.value = false;
      }
    };

    const groupOrdersByUser = (orders) => {
      return orders.reduce((acc, order) => {
        if (!acc[order.user_id]) {
          acc[order.user_id] = [];
        }
        // Load newStatus from local storage or use order.status
        const newStatus = loadStatusFromLocal(order.id) || order.status;
        acc[order.user_id].push({ ...order, newStatus });
        return acc;
      }, {});
    };

    const updateStatus = async (orderId, newStatus) => {
      try {
        await adminStore.updateOrderStatus(orderId, newStatus);
        saveStatusToLocal(orderId, newStatus); // Save newStatus to local storage
        await fetchOrders(); // Refetch orders to update the list
      } catch (error) {
        console.error('Failed to update order status:', error);
      }
    };

    const statusClass = (newStatus) => {
      switch (newStatus) {
        case 'Принят':
          return 'status-accepted';
        case 'Готовится':
          return 'status-preparing';
        case 'Готов':
          return 'status-ready';
        case 'Выдан':
          return 'status-delivered';
        default:
          return ''; // По умолчанию не добавляем класс
      }
    };

    onMounted(() => {
      fetchOrders();
    });

    return { ordersByUser, loading, updateStatus, saveStatusToLocal, statusClass };
  },
});
</script>



<style>
.status-accepted {
  color: green;
}

.status-preparing {
  color: orange;
}

.status-ready {
  color: blue;
}

.status-delivered {
  color: purple;
}
</style>