<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { onMounted } from 'vue';
import { useAuthStore } from '@/Pinia/authStore'
export default defineComponent({
  name: 'App',
  components: {},
  setup() {
    return {}
  }
})

onMounted(async () => {
  const authStore = useAuthStore();
  await authStore.validateToken();
});
</script>
