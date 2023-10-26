<template>
  <div>
    <HeaderComponent />
    <!-- здесь могут быть и другие компоненты -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HeaderComponent from '@/components/HeaderComponent.vue'

export default defineComponent({
  name: "DiscountComponent", // Замените на имя вашего компонента, если оно есть.
  components: {
    HeaderComponent
  },
  setup() {
    // Если у вас будут реактивные свойства или функции, добавьте их здесь.

    return {
      // Здесь верните любые реактивные свойства или функции, чтобы использовать их в шаблоне.
    }
  }
})
</script>
