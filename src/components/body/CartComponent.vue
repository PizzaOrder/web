<template>
  <div>
    <div v-for='(order, index) in orders' :key='index'>
      <img :src='order.image' alt='' />
      {{ order.name }} - ${{ order.price }} кол: {{ order.quantity }}
    </div>
    <input v-model='promoCode' placeholder='ввод промокода' />
    <button @click='checkPromoCode'>Проверить промокод</button>
    <p v-if='discount'>
      Промокод действителен. Скидка {{ discount }}% применена.
    </p>
    <p v-else-if='promoCodeValid === false'>Промокод недействителен. Попробуйте другой промокод.</p>
    <p>Общая сумма: ${{ totalPrice }}</p>
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
      type: Array as PropType<{ id: number; code: string; discountOnPresent: number }[]>,
      required: true
    }
  },
  setup(props) {
    const promoCode = ref('')
    const promoCodeValid = ref<boolean | null>(null)
    const discount = ref<number | null>(null)

    const orders = computed(() => globalState.orders)

    const totalPrice = computed(() => {
      let sum = orders.value.reduce((total, order) => {
        const quantity = order.quantity ?? 1;
        return total + order.price * quantity;
      }, 0)
      if (discount.value) {
        sum -= sum * (discount.value / 100);
      }
      return sum;
    })

    const checkPromoCode = () => {
      promoCodeValid.value = false
      discount.value = null

      if (promoCode.value === '') {
        return
      }

      const foundPromo = props.promes.find(prom => promoCode.value === prom.code);
      if (foundPromo) {
        promoCodeValid.value = true
        discount.value = foundPromo.discountOnPresent
      }
    }

    return {
      promoCode,
      promoCodeValid,
      discount,
      checkPromoCode,
      totalPrice,
      orders
    }
  }
})
</script>
