<template>
  <div class="city-panel">
    <header class="header">
      <div class="header-content">
        <div class="city-time">
          <div class="container">
            <img class="gps" src="../../assets/img/gps.svg" />
            <select v-model="cityName" @change="changeCity(cityName)" class="city-select">
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
  background-color: #f0f0f0;
  padding: 10px;
}

.header-content {
  margin-left: 200px;
  font-family: Arial, sans-serif;
  font-size: 18px;
  align-items: center;
}

.city-time {
  display: flex;
  align-items: center;
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

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      cityName: 'Ярославль',
      openingTime: '9:00',
      closingTime: '23:00',
      number: '8 (800) 555-35-35',
      cities: ['Ярославль', 'Москва', 'Санкт-Петербург', 'Казань']
    }
  },
  methods: {
    changeCity(newCity: string) {
      this.cityName = newCity
    }
  }
})
</script>
