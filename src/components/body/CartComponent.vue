<script lang="ts">
import { defineComponent, ref, computed, toRefs, onMounted } from 'vue'
import type { PropType } from 'vue'
import { globalState } from '@/views/HomeComponent.vue'
import { vMaska } from 'maska'
import { useCitiesStore } from '@/Pinia/citiesStore'
import { usePromoCodeStore } from '@/Pinia/promoCodeStore'

export default defineComponent({
  name: 'OrdersComponent',

  directives: { maska: vMaska },
  setup() {
    const showHome = ref(false)
    const discount = ref<number | null>(null)
    const promoCode = ref('');
    const store = usePromoCodeStore();
    const { isValid, promoCodeData } = toRefs(store);
    const applyPromoCode = async () => {
      await store.validatePromoCode(promoCode.value);
    };
    const discountPercentage = computed(() => promoCodeData.value?.discount_percentage);
    function loadOrdersFromLocalStorage() {
      const savedOrders = localStorage.getItem('orders');
      if (savedOrders) {
        const orders = JSON.parse(savedOrders);
        // Update global state with loaded orders
        globalState.orders.splice(0, globalState.orders.length, ...orders);
      }
    }

    // Load orders from local storage when component is mounted
    onMounted(() => {
      loadOrdersFromLocalStorage();
    });

    const orders = computed(() => globalState.orders)

    const totalPrice = computed(() => {
      const baseSum = orders.value.reduce((total, order) => {
        const quantity = order.quantity ?? 1;
        return total + order.price * quantity;
      }, 0);

      // Проверка, определен ли discountPercentage и является ли он числом больше 0
      const discountFactor = (discountPercentage.value !== undefined && discountPercentage.value > 0)
        ? (1 - discountPercentage.value / 100)
        : 1;

      return baseSum * discountFactor;
    });
    const incrementQuantity = (index: number) => {
      if (globalState.orders[index]) {
        globalState.orders[index].quantity = (globalState.orders[index].quantity || 0) + 1
      }
    }
    const decrementQuantity = (index: number) => {
      const order = globalState.orders[index]
      if (order && order.quantity) {
        order.quantity -= 1
        if (order.quantity === 0) {
          globalState.orders.splice(index, 1)
        }
      }
    }

    const toggleHome = () => {
      showHome.value = !showHome.value
    }
    const deletePizza = (index: number) => {
      globalState.orders.splice(index, 1)
    }


    const citiesStore = useCitiesStore();
    const selectedCityName = computed(() => {
      const selectedCity = citiesStore.cities.find(city => city.id === citiesStore.selectedCityId);
      return selectedCity ? selectedCity.city : 'Не выбран';
    });


    return {
      promoCode, applyPromoCode, isValid, discountPercentage,
      discount,
      totalPrice,
      orders,
      deletePizza,
      selectedCityName,
      toggleHome,
      showHome,
      incrementQuantity,
      decrementQuantity
    }
  }
})
</script>
<template>
  <div class="cart-container">
    <p class="cart-name"><strong>Корзина</strong></p>
    <div class="order-item" v-for="(order, index) in orders" :key="order.id">
      <div class="order-details">
        <img :src="order.img_source" alt="" />
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
            <td>
              {{ order.quantity }}
              <button class="increment-button" @click="incrementQuantity(index)">+</button>
              <button class="decrement-button" @click="decrementQuantity(index)">-</button>
            </td>
          </tr>
        </table>
        <button class="button-buy" @click="deletePizza(index)">Удалить позицию</button>
      </div>
    </div>
    <div class="text">
      <div>
        Доставка: <strong class="city">{{ selectedCityName }}</strong>
      </div>
    </div>
    <div class="cent">
      <div class="cent-buttons">
        <button class="style-head">Забрать самому</button>
        <button class="style-head" @click="toggleHome">Доставка на дом</button>
      </div>

      <div v-if="showHome" class="rounded-frame">
        <p><input type="text" id="street" placeholder="Например: улица Бебр, 1" /></p>
        <p>
          <span><input type="number" id="kvartira" class="raz" placeholder="№ квартиры" /></span>
          <span><input type="number" id="podezd" class="raz" placeholder="Подъезд" /></span>
          <span><input type="number" id="stage" class="raz" placeholder="Этаж" /></span>
        </p>
        <p>
          <span
            ><input
              class="num"
              v-maska
              data-maska="+7 (###) ###-##-##"
              placeholder="+7 (800) 555-35-35"
          /></span>
          <span><input type="text" id="name" placeholder="Введите ваше имя" /></span>
        </p>
      </div>
    </div>

    <div class="promo-code" style="text-align: center">
      <div class="promo-input">
        <input
          type="text"
          v-model="promoCode"
          placeholder="Введите промокод"
          style="margin: 5px auto; display: block"
        />
        <button class="button-buy" @click="applyPromoCode" style="margin: 5px auto; display: block">
          Применить
        </button>
      </div>
      <p>
        <span v-if="isValid === true">Скидка: {{ discountPercentage }}% </span>
        <span v-if="isValid === false">Промоdкод неверный</span>
      </p>
    </div>

    <div class="total-price">Общая сумма: ${{ totalPrice }}</div>
    <div class="checkout">
      <button class="button-buy">Оплатить</button>
    </div>
  </div>
</template>
<style scoped>
@media (min-width: 800px) {
  .order-item {
    display: flex;
    padding: 10px;
    border-radius: 5px;
    margin-left: 30%;
    margin-bottom: 10px;
  }
  .cart-name {
    margin-top: 150px;
    font-size: 40px;
    margin-left: 30%;
  }
  .text {
    margin-left: 30%;
    font-size: 30px;
  }
}
@media (max-width: 800px) {
  .order-item {
    display: flex;
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 10px;
  }
  .cart-name {
    margin-top: 150px;
    font-size: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .text {
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.cent {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 20px;
}

.cent-buttons {
  display: flex;
  justify-content: center;
}

.style-head {
  display: inline-block;
  margin: 10px;
  padding: 8px 16px;
  border: none;
  background-color: #ff5733;
  color: #fff;
  cursor: pointer;
  transition:
    background-color 0.3s,
    transform 0.3s;
  border-radius: 5px;
  font-weight: bold;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  text-align: center;
}
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
  transition:
    background-color 0.3s,
    transform 0.3s;
  margin-right: 5px;
}
.rounded-frame {
  border: 2px solid #ff5733;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  width: fit-content;
  margin: 0 auto;
}

.increment-button:hover {
  background-color: #ff634f;
}

.decrement-button {
  display: inline-block;
  width: 30px;
  height: 30px;
  border: none;
  background-color: #ff5733;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition:
    background-color 0.3s,
    transform 0.3s;
}

.decrement-button:hover {
  background-color: #ff634f;
}

.order-details img {
  width: 100px;
  margin-right: 10px;
}

.order-info table {
  border-collapse: separate;
  border-spacing: 0;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  border: 2px solid #ff5733;
}
.city {
  margin-left: 5px;
}
.num {
  padding: 5px;
  margin: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  text-align: center;
}
.order-info table td {
  padding: 10px;
  border-bottom: 1px solid #eee;
}

.order-info table tr:last-child td {
  border-bottom: none;
}

.order-info table tr:first-child td {
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

.order-info table tr:last-child td:first-child {
  border-bottom-left-radius: 8px;
}

.order-info table tr:last-child td:last-child {
  border-bottom-right-radius: 8px;
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
.raz {
  -moz-appearance: textfield;
}
.raz::-webkit-inner-spin-button {
  display: none;
}
.button-buy {
  display: inline-block;
  margin: 10px;
  padding: 8px 16px;
  border: none;
  background-color: #ff5733;
  color: #fff;
  cursor: pointer;
  transition:
    background-color 0.3s,
    transform 0.3s;
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
</style>
