<template>
  <div class=''>
    <p class='cart-name'><strong>Корзина</strong></p>
    <div class="order-item right-pos" v-for="(order, index) in orders" :key="order.id">
      <div class="order-details">
        <img :src="order.image" alt="" />
      </div>
      <div class="order-info">
        <table>
          <tr>
            <td>Название</td>
            <td>{{ order.name }}</td>
          </tr>
          <tr>
            <td>Цена</td>
            <td>${{ order.price }}</td>
          </tr>
          <tr>
            <td>Количество</td>
            <td>{{ order.quantity }}</td>
            <button class='increment-button' @click="incrementQuantity(index)">+</button>
            <button class='decrement-button' @click="decrementQuantity(index)">-</button>

          </tr>
        </table>
        <button class='button-buy' @click="deletePizza(index)">Удалить пиццу</button>
      </div>
    </div>
    <div class="total-price">Общая сумма: ${{ totalPrice }}</div>
    <div class="checkout">
      <button class='button-buy' >Оплатить</button>
    </div>
  </div>
</template>


<script lang="ts">
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
    const incrementQuantity = (index: number) => {
      if (globalState.orders[index]) {
        globalState.orders[index].quantity = (globalState.orders[index].quantity || 0) + 1;
      }
    };
    const decrementQuantity = (index: number) => {
      const order = globalState.orders[index];
      if (order && order.quantity) {
        order.quantity -= 1;
        if (order.quantity === 0) {
          globalState.orders.splice(index, 1);
        }
      }
    };


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

      const foundPromo = props.promes.find((prom) => promoCode.value === prom.code)
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
      showHome,
      incrementQuantity,
      decrementQuantity
    }
  }
})
</script>

<style scoped>
.increment-button {
  display: inline-block;
  width: 30px;
  height: 30px;
  border: none;
  background-color: #ff5733;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
  margin-right: 5px;
}

.increment-button:hover {
  background-color: #ff634f;
}

.decrement-button {
  display: inline-block;
  width: 30px;
  height: 30px;
  border: none;
  background-color: #ff8c7a; /* Легкое отличие по цвету от кнопки "+" */
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
}

.decrement-button:hover {
  background-color: #ff634f;
}
.order-item {
  display: flex;
  padding: 10px;
  border-radius: 5px;
  margin-left: 30%;
  margin-bottom: 10px;

}


.order-details img {
  width: 100px;
  margin-right: 10px;

}


.order-info {
  border: 1px solid #ccc;
  border-radius: 5px;
}



.order-info table td {
  padding: 5px;
}

/* Стили для общей суммы и кнопки оплаты */
.total-price {
  font-weight: bold;
  text-align: center;
  margin-top: 20px;
}

.checkout {
  text-align: center;
  margin-top: 20px;
}
.button-buy {
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

button:hover {
  background-color: #ff3c00;
}

/* Стили для input */
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
.cart-name {
  margin-top: 150px;
  font-size: 40px;
  margin-left: 30%;

}



</style>
