<template>
  <div class="basement">ПиццанПацан © 2023-2077 ООО «Абоба»</div>
</template>

<script>
export default {}
</script>

<style>
body {
  margin: 0; /* без нее остается белый угол */
}

.basement {
  position: fixed; /* Сделаем элемент прикрепленным */
  bottom: 0; /* Разместим его внизу страницы */
  text-align: center;
  background-color: #333;
  color: white;
  height: 100px; /* Уберем фиксированную высоту, чтобы элемент мог растягиваться по содержимому */
  width: 100%; /* Растянем элемент на всю ширину страницы */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 17px;
}
</style>
