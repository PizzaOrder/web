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
  text-align: center;
  background-color: #333;
  color: white;
  padding: 15px 0px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: relative;
  top: 100%;
}

@media (max-width: 600px) {
  .basement {
    font-size: 0.9rem;
  }
}

</style>
