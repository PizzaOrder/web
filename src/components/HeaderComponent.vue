<template>
  <div class="city-panel gray-background">
    <header class="header">
      <div class="header-content">
        <div class="container">
          <img class="gps" src="../../assets/img/gps.svg" />
          <select v-model="cityName" @change="changeCity" class="city-select">
            <option v-for="city in cities" :key="city">{{ city }}</option>
          </select>
        </div>
        <div class="container">
          <img class="time" src="../../assets/img/time.svg" />
          с {{ openingTime }} до {{ closingTime }}
        </div>
        <div class="container">
          <img class="phone" src="../../assets/img/phone.svg" />
          {{ number }}
        </div>
      </div>
      <div class="menu-actions white-backgorund">
        <router-link to="/" class="menu style-head style-head router-link-exact-active">Меню</router-link >
        <router-link to="/discount" class="actions style-head router-link-exact-active">Акции</router-link>
        <span class="contacts style-head">Контакты</span>
        <span class="cart style-head">
          <img src="../../assets/img/cart.svg" class="cart-icon" />Корзина
        </span>
      </div>
    </header>
  </div>
</template>

<style scoped>
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
}

.cart-icon {
  height: 30px;
  width: 30px;
  margin-right: 5px;
}

.menu-actions {
  display: flex;
  align-items: center;
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
}

.actions {
  margin-left: 20px;
  margin-right: 20px;
  font-size: 16px;
  font-weight: bold;
  width: 120px;
  text-align: center;
}

.contacts {
  margin-left: 20px;
  margin-right: 0;
  font-size: 16px;
  font-weight: bold;
  width: 120px;
  text-align: center;
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
</style>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const cityName = ref('Ярославль')
    const openingTime = ref('9:00')
    const closingTime = ref('23:00')
    const number = ref('8 (800) 555-35-35')
    const cities = ['Ярославль', 'Москва', 'Санкт-Петербург', 'Казань']

    const changeCity = (event) => {
      cityName.value = event.target.value
    }

    return {
      cityName,
      openingTime,
      closingTime,
      number,
      cities,
      changeCity
    }
  }
}
</script>
