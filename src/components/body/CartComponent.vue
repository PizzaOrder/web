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
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref } from 'vue'
import type { PropType } from 'vue'
import { globalState } from '@/views/HomeComponent.vue'

export default defineComponent({
  name: 'OrdersComponent',
  computed: {
    orders() {
      return globalState.orders
    }
  },
  props: {
    promes: {
      type: Array as PropType<{ id: number; code: string }[]>,
      required: true
    }
  },
  setup(props) {
    const promoCode = ref('')
    const promoCodeValid = ref<boolean | null>(null);

    const checkPromoCode = () => {

      if (promoCode.value === '') {
        promoCodeValid.value = null; // Сбросить состояние, если поле пустое
        return;
      }

      let flag = false
      promoCodeValid.value = flag
      for (const prom of props.promes) {
        if (promoCode.value === prom.code) {
          flag = true
          break;
        }
      }
      promoCodeValid.value = flag
    }

    return {
      promoCode,
      promoCodeValid,
      checkPromoCode
    }
  }
})
</script>
