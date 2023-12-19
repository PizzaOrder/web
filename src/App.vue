<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import { onMounted, defineComponent } from 'vue'
import { useAuthStore } from '@/Pinia/authStore'
export default defineComponent({
  name: 'App',
  setup() {
    const authStore = useAuthStore();

    onMounted(async () => {
      await authStore.validateToken();
    });

    return {}
  }
})
</script>
