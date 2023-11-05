<template>
  <div>
    <div v-for='(order, index) in orders' :key='index'>
      <img :src='order.image' alt='' />
      {{ order.name }} - ${{ order.price }} кол: {{ order.quantity }}
    </div>
    <input v-model='promoCode' placeholder='ввод промокода' />
    <button @click='checkPromoCode'>Проверить промокод</button>
    <p v-if='promoCodeValid !== null'>
      <span v-if='promoCodeValid'>Промокод действителен. Скидка применена.</span>
      <span v-else>Промокод недействителен. Попробуйте другой промокод.</span>
    </p>
    <p>Общая сумма: ${{ totalPrice }}</p> <!-- Вывод общей суммы -->
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref, computed } from 'vue'
import type { PropType } from 'vue'
import { globalState } from '@/views/HomeComponent.vue'

export default defineComponent({
  name: 'OrdersComponent',
  props: {
    promes: {
      type: Array as PropType<{ id: number; code: string }[]>,
      required: true
    }
  },
  setup(props) {
    const promoCode = ref('')
    const promoCodeValid = ref<boolean | null>(null)

    const orders = computed(() => globalState.orders)

    const totalPrice = computed(() => {
      // Вычисление общей суммы заказов с учетом количества
      const sum = orders.value.reduce((total, order) => {
        // Проверяем, определено ли количество, если нет, то считаем его как 1
        const quantity = order.quantity ?? 1;
        return total + order.price * quantity;
      }, 0)
      // Применение скидки, если промокод действителен
      return promoCodeValid.value ? sum * 0.9 : sum // предполагаем скидку в 10%
    })

    const checkPromoCode = () => {
      if (promoCode.value === '') {
        promoCodeValid.value = null // Сбросить состояние, если поле пустое
        return
      }

      let flag = false
      for (const prom of props.promes) {
        if (promoCode.value === prom.code) {
          flag = true
          break
        }
      }
      promoCodeValid.value = flag
    }

    return {
      promoCode,
      promoCodeValid,
      checkPromoCode,
      totalPrice, // Теперь totalPrice доступен для использования в шаблоне
      orders
    }
  }
})
</script>

