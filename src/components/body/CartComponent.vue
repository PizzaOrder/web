<template>
  <div>
    <div v-for='(order, index) in orders' :key='index'>
      <img :src='order.image' alt='' />
      {{ order.name }} - ${{ order.price }} кол: {{ order.quantity }}
    </div>
    <input v-model='promoCode' placeholder='ввод промокода' />
    <button @click='checkPromoCode(promoCode)'>Проверить промокод</button>
    <p v-if='promoCodeValid'>Промокод действителен. Скидка применена.</p>
    <p v-else>Промокод недействителен. Попробуйте другой промокод.</p>
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
    const promoCodeValid = ref(false)

    const checkPromoCode = (enteredPromoCode: string) => {
      let flag = false
      for (const prom of props.promes) {
        if (enteredPromoCode === prom.code) {
          flag = true
          break;
        }
      }
      promoCodeValid.value = flag
      console.log(promoCodeValid.value); // Добавьте эту строку для отладки
    }


    return {
      promoCode,
      promoCodeValid,
      checkPromoCode
    }
  }
})
</script>
