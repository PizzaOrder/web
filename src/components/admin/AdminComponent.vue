<template>
  <div>
    <router-link to='/'>
      <button>вернуться в меню</button>
    </router-link>
    <h2 class="text-2xl font-bold mb-4">All Orders</h2>
    <div v-if="loading" class="text-gray-500">Loading orders...</div>
    <div v-else>
      <ul>
        <li v-for="(order, index) in ordersByDate" :key="index">
          <div>
            <p>Order ID: {{ order.id }}</p>
            <p>User ID: {{ order.user_id }}</p>
            <p>Promo ID: {{ order.promo_id }}</p>
            <p>Total Cost: {{ order.total_cost }}</p>
            <p>Order Date: {{ formatDate(order.order_date) }}</p>
            <p :class="'order-status-' + order.order_status">Order Status: {{ order.order_status }}</p>
            <p>Order Items: {{ JSON.stringify(order.order_items, null, 2) }}</p>
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
</template>

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
    const ordersByDate = ref([]);
    const loading = ref(true);

    const fetchOrders = async () => {
      try {
        const data = await adminStore.fetchAllOrders();

        const sortedOrders = data.sort((a, b) => new Date(b.order_date) - new Date(a.order_date));

        ordersByDate.value = sortedOrders.map(order => ({
          ...order,
          newStatus: loadStatusFromLocal(order.id) || order.status
        }));
      } catch (error) {
        console.error('Failed to fetch orders:', error);
      } finally {
        loading.value = false;
      }
    };

    const updateStatus = async (orderId, newStatus) => {
      try {
        await adminStore.updateOrderStatus(orderId, newStatus);
        saveStatusToLocal(orderId, newStatus);
        await fetchOrders();
      } catch (error) {
        console.error('Failed to update order status:', error);
      }
    };

    const formatDate = (dateString) => {
      const date = new Date(dateString);
      return date.toLocaleDateString('ru-RU', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    };

    onMounted(() => {
      fetchOrders();
    });

    return { ordersByDate, loading, updateStatus, saveStatusToLocal, formatDate };
  },
});
</script>

<style scoped>
.order-status-Принят {
  color: red;
}

.order-status-Готовится {
  color: green;
}

.order-status-Готов {
  color: blue;
}

.order-status-Выдан {
  color: orange;
}
</style>
