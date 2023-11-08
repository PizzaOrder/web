<template>
  <div>
    <div v-for='(order, index) in orders' :key='order.id'>
      <img :src='order.image' alt='' />
      {{ order.name }} - ${{ order.price }} кол: {{ order.quantity }}
      <button @click='deletePizza(index)'>Удалить пиццу</button>
    </div>
    <div>Доставка в город {{ city }}</div>
    <div>
      <button class="style-head text-center">Забрать самому</button>
      <button class="style-head" @click="toggleHome">Доставка на дом</button>
      <div v-if='showHome'>
        <p><input type='text' id='street' placeholder='Например: улица Бебр, 1'></p>
        <p>
          <span><input type='number' id='kvartira' placeholder='№ квартиры'></span>
          <span><input type='number' id='podezd' placeholder='Подъезд'></span>
          <span><input type='number' id='stage' placeholder='Этаж'></span>
        </p>
        <p>
          <span><input type='number' id='num' placeholder='88005553535'></span>
          <span><input type='text' id='name' placeholder='Введите ваше имя'></span>
        </p>
      </div>
    </div>
    <input v-model='promoCode' placeholder='ввод промокода' />
    <button @click='checkPromoCode'>Проверить промокод</button>
    <p class="text-center" v-if="discount">
      Промокод действителен. Скидка {{ discount }}% применена.
    </p>
    <p class="text-center" v-else-if="promoCodeValid === false">Промокод недействителен. Попробуйте другой промокод.</p>
    <p class="text-center">Общая сумма: ${{ totalPrice }}</p>
    <div><button>Оплатить</button></div>
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
    const showHome = ref(false)
    const promoCode = ref('')
    const promoCodeValid = ref<boolean | null>(null)
    const discount = ref<number | null>(null)

    const orders = computed(() => globalState.orders)

    const totalPrice = computed(() => {
      let sum = orders.value.reduce((total, order) => {
        const quantity = order.quantity ?? 1
        return total + order.price * quantity
      }, 0)
      if (discount.value) {
        sum -= sum * (discount.value / 100)
      }
      return sum
    })
    const toggleHome = () => {
      showHome.value = !showHome.value
    }
    const deletePizza = (index: number) => {
      globalState.orders.splice(index, 1)

    }

    const checkPromoCode = () => {
      promoCodeValid.value = false
      discount.value = null

      if (promoCode.value === '') {
        return
      }

      const foundPromo = props.promes.find(prom => promoCode.value === prom.code)
      if (foundPromo) {
        promoCodeValid.value = true
        discount.value = foundPromo.discountOnPresent
      }
    }
    const city = computed(() => {
      return localStorage.getItem('selectedCity')
    })


    return {
      promoCode,
      promoCodeValid,
      discount,
      checkPromoCode,
      totalPrice,
      orders,
      deletePizza,
      city,
      toggleHome,
      showHome
    }
  }
})
</script>
<style scoped>
button,
.style-head {
  display: inline-block;
  margin: 10px;
  padding: 8px 16px;
  border: none;
  background-color: #ff5733;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
  border-radius: 5px;
  font-weight: bold;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  text-align: center;
}

div {
  margin-bottom: 10px;
  text-align: center;
}

div[v-for] {
  background-color: #f9f9f9;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

div[v-for] img {
  width: 50px;
  margin-right: 10px;
}

input[type='text'],
input[type='number'] {
  padding: 5px;
  margin: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  text-align: center;
}

input[type='text']::placeholder,
input[type='number']::placeholder {
  color: #aaa;
}

input[type='text']:focus,
input[type='number']:focus {
  border-color: #90cdf4;
  outline: none;
}

p {
  color: #333;
  margin: 5px 0;
}

p {
  font-weight: bold;
  text-align: center;
}

.text-center {
  text-align: center;
}


</style>
