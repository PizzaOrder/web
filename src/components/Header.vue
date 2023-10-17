<template>
  <header class="header">
    <div class="header-content">
      <div class="city-time">
        <div class="container">
          <img class="gpspng" src="assets/img/gps.png">
          {{ cityName }}
        </div>
        <div class="container">
          <img class="timepng" src="assets/img/time.png">
          с {{ openingTime }} до {{ closingTime }}
        </div>
        <div class="container">
          <img class="phonepng" src="assets/img/phone.png">
          {{ number }}
        </div>
      </div>
    </div>
  </header>
</template>




<style scoped>
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

.timepng {
  height: 20px;
  width: 20px;
  margin-right: 5px;
}

.gpspng {
  height: 20px;
  width: 20px;
  margin-right: 5px;
}
.phonepng {
  height: 20px;
  width: 20px;
  margin-right: 5px;
}
.header{
  background-color: #f0f0f0;
}
</style>


<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  data() {
    return {
      cityName: "Ярославль ",
      openingTime: "9:00",
      closingTime: "23:00",
      number: "8 (800) 555-35-35"
    };
  },
});
</script>