<template>
  <div class="Discount">Акции</div>
  <div class="DiscountMenu">
    <div class="discount-item" v-for="(discount, index) in discountes" :key="index">
      <img :src="discount.image" alt="Скидка" class="discount-image" />
      <p class="discount-description">{{ discount.description }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
export default defineComponent({
  name: 'DiscountMenuComponent',
  props: {
    discountes: {
      type: Array as PropType<{ image: string; description: string }[]>,
      required: true
    }
  }
})
</script>

<style scoped>
@media (max-width: 800px) {
  .Discount {
    font-size: 40px;
    font-weight: bold;
    margin-bottom: 20px;
    text-align: left;
    margin-top: 150px;
  }
}
@media (min-width: 800px) {
  .Discount {
    font-size: 40px;
    font-weight: bold;
    margin-bottom: 20px;
    text-align: left;
  }
}

.DiscountMenu {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}

.discount-item {
  width: 30%;
  box-sizing: border-box;
  margin: 0 1% 10px 1%;
}

.discount-image {
  width: 106%;
  height: 200px;
  display: block;
  object-fit: cover;
  border-radius: 10px;
}

.discount-description {
  margin-top: 10px;
  padding: 8px 16px;
  max-width: 50%;
  margin-left: auto;
  margin-right: auto;
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
</style>
