<template>
  <div class="basement">ПиццанПацан © 2023-2077 ООО «Абоба»</div>
</template>

<script>
export default {}
</script>

<style>
body {
  margin: 0;
}

.basement {
  position: fixed;
  bottom: 0;
  text-align: center;
  background-color: #333;
  color: white;
  padding: 15px 20px; /* Добавим отступы вместо фиксированной высоты */
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem; /* Используем относительные единицы измерения для размера шрифта */
}

/* Медиа-запрос для меньших экранов */
@media (max-width: 600px) {
  .basement {
    font-size: 0.9rem; /* Уменьшим размер шрифта для мобильных устройств */
    padding: 10px 15px; /* Уменьшим отступы для мобильных устройств */
  }
}

</style>
