<template>
  <div class="city-panel">
    <header class="header">
      <div class="header-content ">
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
      <div class="menu-actions">
        <span class="menu style-head">Меню</span>
        <span class="actions style-head">Акции</span>
        <span class="contacts style-head">Контакты</span>
        <span class="cart style-head">
          <img src="../../assets/img/cart.svg" class="cart-icon" />
          Корзина
        </span>
      </div>
    </header>
  </div>
</template>

<style scoped>
.city-panel {
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
  border: 2px solid #333;
  border-radius: 30px;
  padding: 10px;
  text-align: center;
  width: 250px;
  position: relative;
  line-height: 1;


}

.cart {
  padding-left: 450px;
  border: none;
  display: flex;
  align-items: center;
  margin-left: 20px; /* Adjust the margin for cart text alignment */
  font-size: 25px; /* Увеличьте размер шрифта для меню */
  font-weight: bold; /* Установите жирное начертание для меню */
}

.cart-icon {
  height: 30px;
  width:30px;
  margin-right: 5px;
}

.menu-actions {
  display: flex; /* Create a flex container for the menu, actions, and contacts */
  align-items: center;

}
.menu {
  margin-left: 200px;
  margin-right: 20px;
  font-size: 16px; /* Увеличьте размер шрифта для меню */
  font-weight: bold; /* Установите жирное начертание для меню */
}

.actions {
  margin-left: 20px;
  margin-right: 20px;
  font-size: 16px; /* Увеличьте размер шрифта для действий */
  font-weight: bold; /* Установите жирное начертание для действий */
}

.contacts {
  margin-left: 20px;
  margin-right: 0;
  font-size: 16px; /* Увеличьте размер шрифта для контактов */
  font-weight: bold; /* Установите жирное начертание для контактов */
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

