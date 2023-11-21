<template>
  <div class="city-panel gray-background">
    <header class="header">
      <div class="hamburger-menu">
        <input id="menu__toggle" type="checkbox" />
        <label class="menu__btn" for="menu__toggle">
          <span></span>
        </label>
        <ul class="menu__box">
          <span class="cart">
          <router-link to="/cart">
            <img src="../../../assets/img/cart.svg" class="cart-icon" />
          </router-link>
          <span
            v-if="totalPizzasInOrder > 0 && totalPizzasInOrder < 100"
            class="count"
            :class="{ 'large-font': totalPizzasInOrder < 10, 'small-font': totalPizzasInOrder > 9 }"
          >{{ totalPizzasInOrder }}</span
          >
          <span v-if="totalPizzasInOrder > 99" class="count very-small-font">99+ </span>
          <div class="cart-indicator" v-if="showCartIndicator || hasItemsInCart"></div>
        </span>
          <router-link to="/" class="actions style-head style-head router-link-exact-active"
          >Меню
          </router-link>
          <router-link to="/discount" class="actions style-head router-link-exact-active"
          >Акции
          </router-link>
          <router-link to="/contact" class="contacts style-head router-link-exact-active"
          >О компании</router-link
          >

        </ul>
      </div>
      <div class="header-content">
        <div class="container">
          <img class="gps" src="../../../assets/img/gps.svg" />
          <select v-model="cityName" @change="changeCity" class="city-select">
            <option v-for="city in cities" :key="city">{{ city }}</option>
          </select>
        </div>
        <div class="container phonenum">
          <img class="time" src="../../../assets/img/time.svg" />
          с {{ openingTime }} до {{ closingTime }}
        </div>
        <div class="container phonenum">
          <img class="phone" src="../../../assets/img/phone.svg" />
          <a :href="'tel:' + number" class="phone-link">{{ number }}</a>
        </div>
      </div>
      <div class='small'>

      <div class="menu-actions white-backgorund">
        <router-link to="/" class="menu style-head style-head router-link-exact-active"
          >Меню
        </router-link>
        <router-link to="/discount" class="actions style-head router-link-exact-active"
          >Акции
        </router-link>
        <router-link to="/contact" class="contacts style-head router-link-exact-active"
          >О компании</router-link
        >

        <span class="cart">
          <router-link to="/cart">
            <img src="../../../assets/img/cart.svg" class="cart-icon" />
          </router-link>
          <span
            v-if="totalPizzasInOrder > 0 && totalPizzasInOrder < 100"
            class="count"
            :class="{ 'large-font': totalPizzasInOrder < 10, 'small-font': totalPizzasInOrder > 9 }"
            >{{ totalPizzasInOrder }}</span
          >
          <span v-if="totalPizzasInOrder > 99" class="count very-small-font">99+ </span>
          <div class="cart-indicator" v-if="showCartIndicator || hasItemsInCart"></div>
          <router-link to="/cart" class="style-head router-link-exact-active">Корзина </router-link>
        </span>
      </div>
      </div>
    </header>
  </div>
</template>

<script lang="ts">
import { ref, onMounted, computed } from 'vue'
import emitter from '@/funcs/eventBus'
import { globalState } from '@/views/HomeComponent.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const cityName = ref('Ярославль')
    const openingTime = ref('9:00')
    const closingTime = ref('23:00')
    const number = ref('8 (800) 555-35-35')
    const email = ref('oleg@bebra.com')
    const showContacts = ref(false)
    const vkProfileUrl = ref('https://vk.com/id389649410')
    const cities = ref(['Ярославль', 'Москва', 'Санкт-Петербург', 'Казань'])
    const showCartIndicator = ref(false)
    const changeCity = (event: Event) => {
      const target = event.target as HTMLSelectElement
      cityName.value = target.value
      localStorage.setItem('selectedCity', cityName.value)
    }

    const hasItemsInCart = computed(() => {
      return globalState.orders.length > 0
    })

    const toggleContacts = () => {
      showContacts.value = !showContacts.value
    }

    emitter.on('button-clicked', () => {
      showCartIndicator.value = true
    })
    const totalPizzasInOrder = computed(() => {
      return globalState.orders.reduce((total, pizza) => total + (pizza.quantity || 0), 0)
    })

    onMounted(() => {
      const savedCity = localStorage.getItem('selectedCity')
      if (savedCity && cities.value.includes(savedCity)) {
        cityName.value = savedCity
      }
    })

    return {
      cityName,
      openingTime,
      closingTime,
      number,
      email,
      showContacts,
      cities,
      changeCity,
      toggleContacts,
      vkProfileUrl,
      showCartIndicator,
      hasItemsInCart,
      totalPizzasInOrder
    }
  }
})
</script>

<style scoped>
@media (min-width: 801px) {
  .hamburger-menu {
    display: none;
  }
  .cart-indicator {
    z-index: 1000;
    width: 18px;
    height: 18px;
    background-color: red;
    border-radius: 50%;
    position: absolute;
    top: 41px;
    right: 146.8px;
  }
  .count {
    color: #fff;
    z-index: 1001;
    margin-bottom: 35px;
    font-size: 15px;
  }
  .small-font {
    font-size: 10px;
    position: relative;
    left: 0.9px;
    bottom: 0.9px;
  }
  .very-small-font {
    font-size: 10px;
    position: relative;
    left: 5px;
  }


}
@media (max-width: 800px) {

  #menu__toggle {
    opacity: 0;
  }

  #menu__toggle:checked ~ .menu__btn > span {
    transform: rotate(45deg);
  }
  #menu__toggle:checked ~ .menu__btn > span::before {
    top: 0;
    transform: rotate(0);
  }
  #menu__toggle:checked ~ .menu__btn > span::after {
    top: 0;
    transform: rotate(90deg);
  }
  #menu__toggle:checked ~ .menu__box {
    visibility: visible;
    left: 0;
  }

  .menu__btn {
    display: flex;
    align-items: center;
    position: fixed;
    top: 20px;
    left: 20px;

    width: 26px;
    height: 26px;

    cursor: pointer;
    z-index: 1;
  }

  .menu__btn > span,
  .menu__btn > span::before,
  .menu__btn > span::after {
    display: block;
    position: absolute;

    width: 100%;
    height: 2px;

    background-color: #616161;

    transition-duration: .25s;
  }
  .menu__btn > span::before {
    content: '';
    top: -8px;
  }
  .menu__btn > span::after {
    content: '';
    top: 8px;
  }

  .menu__box {
    display: block;
    position: fixed;
    visibility: hidden;
    top: 0;
    left: -100%;

    width: 300px;
    height: 100%;

    margin: 0;
    padding: 80px 0;

    list-style: none;

    background-color: #ECEFF1;
    box-shadow: 1px 0px 6px rgba(0, 0, 0, .2);

    transition-duration: .25s;
  }


  .small{
    display: none;
  }
  .header-content {
    flex-direction: column;
    margin-left: 0;
  }

  .container {
    margin-left: 0;
    margin-bottom: 10px;
  }

  .phonenum {
    display: flex;
    align-items: center;
  }

  .gps,
  .phone,
  .time {
    height: 15px;
    width: 15px;
    margin-right: 5px;
  }

  .city-select {
    width: 100%;
  }


  .cart {
    border: none;
    display: flex;
    align-items: center;
    font-size: 25px;
    font-weight: bold;
    margin-left: auto;
    user-select: none;
    position: absolute; /* Размещаем элемент абсолютно */
    top: 0;
    right: 0;
  }
  .cart-indicator {
    border: none;

    width: 18px;
    height: 18px;
    background-color: red;
    border-radius: 50%;
    position: absolute;
    top: 0; /* Перемещаем точку в самый верх */
    right: 0; /* Перемещаем точку в самый правый угол */
  }
  .count {
    color: #fff;
    z-index: 1001;
    margin-bottom: 100%;
    font-size: 15px;
    position: absolute;
    top: 0;
    right: 5px;
  }
  .small-font {
    font-size: 10px;
    position: absolute;
    right: 5px;
    top: 2.5px;


  }
  .very-small-font {
    font-size: 10px;
    position: absolute;
    right: 1px;
    top: 2.5px;
  }




}

.phone-link {
  text-decoration: none;
  color: #000;
  transition: color 0.3s;
}

.phone-link:hover {
  color: #ff5733;
}



.city-panel {
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 10px;
  background-color: #f0f0f0;
}




.header-content {
  font-family: Arial, sans-serif;
  font-size: 18px;
  display: flex;
  align-items: center;
  margin-left: 200px;
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
}

.style-head:hover {
  background-color: #ff6f4d;
  transform: translateY(-2px);
}

.style-head:active {
  transform: translateY(0);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}


.cart {
  border: none;
  display: flex;
  align-items: center;
  font-size: 25px;
  font-weight: bold;
  margin-left: auto;
  user-select: none;
}

.cart-icon {
  height: 40px;
  width: 40px;
  margin-right: 5px;
}

.menu-actions {
  display: flex;
  align-items: center;
  user-select: none;
}

.gray-background {
  background-color: rgb(220, 220, 220);
  padding: 5px;
}

.white-backgorund {
  background-color: #f0f0f0;
}

.menu {
  margin-left: 200px;
  margin-right: 20px;
  font-size: 16px;
  font-weight: bold;
  width: 120px;
  text-align: center;
  user-select: none;
}

.mail {
  width: 25px;
  height: 25px;
}

.actions {
  margin-left: 20px;
  margin-right: 20px;
  font-size: 16px;
  font-weight: bold;
  width: 120px;
  text-align: center;
  user-select: none;
}

.contacts {
  margin-left: 20px;
  margin-right: 0;
  font-size: 16px;
  font-weight: bold;
  width: 120px;
  text-align: center;
  user-select: none;
}

.container {
  display: flex;
  align-items: center;
  margin-left: 30px;
}

.time {
  height: 20px;
  width: 20px;
  margin-right: 5px;
}

.gps {
  height: 20px;
  width: 20px;
  margin-right: 5px;
}

.phone {
  height: 20px;
  width: 20px;
  margin-right: 5px;
  user-select: none;
}
.phonenum {
  user-select: none;
}

.city-select {
  border: 1px solid #ccc;
  padding: 5px;
  font-size: 16px;
  border-radius: 5px;
}

.city-select option {
  background-color: #fff;
  color: #333;
}

.router-link-exact-active {
  text-decoration: none;
}

.contacts-popover {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: #ff5733;
  color: #fff;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  user-select: none;
}
</style>
