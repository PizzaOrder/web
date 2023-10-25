<script setup lang="ts">
import HeaderComponent from '@/components/HeaderComponent.vue'
import BasementComponent from '@/components/basement/BasementComponent.vue'
import SlideComponent from '@/components/body/SlideComponent.vue'
import PizzaMenuComponent from '@/components/body/PizzaMenuComponent.vue'

const slidesData = [
  { image: 'assets/discounts/pudge1.jpg', alt: 'Описание 1' },
  { image: 'assets/discounts/pudge2.jpeg', alt: 'Описание 2' },
  { image: 'assets/discounts/pudge3.jpeg', alt: 'Описание 3' },
  { image: 'assets/discounts/pudge3.jpeg', alt: 'Описание 3' },
  { image: 'assets/discounts/pudge3.jpeg', alt: 'Описание 3' },
  { image: 'assets/discounts/pudge3.jpeg', alt: 'Описание 3' },


]
const pizzasData = [
  { image: 'assets/discounts/pizza1.jpeg', name: 'Грибная', price: 245, buttonText: 'ДОБАВИТЬ В КОРЗИНУ' },
  { image: 'assets/discounts/pizza2.jpeg', name: 'Грибная', price: 245, buttonText: 'ДОБАВИТЬ В КОРЗИНУ' },
  { image: 'assets/discounts/pizza2.jpeg', name: 'Не грибная', price: 19, buttonText: 'ДОБАВИТЬ В КОРЗИНУ' },
  { image: 'assets/discounts/pizza2.jpeg', name: 'Не грибная', price: 19, buttonText: 'ДОБАВИТЬ В КОРЗИНУ' },
  { image: 'assets/discounts/pizza2.jpeg', name: 'Не грибная', price: 19, buttonText: 'ДОБАВИТЬ В КОРЗИНУ' },
  { image: 'assets/discounts/pizza2.jpeg', name: 'Не грибная', price: 19, buttonText: 'ДОБАВИТЬ В КОРЗИНУ' },
  { image: 'assets/discounts/pizza2.jpeg', name: 'Не грибная', price: 19, buttonText: 'ДОБАВИТЬ В КОРЗИНУ' },
  { image: 'assets/discounts/pizza2.jpeg', name: 'Не грибная', price: 19, buttonText: 'ДОБАВИТЬ В КОРЗИНУ' },


]
</script>

<template>
  <div>
    <HeaderComponent />
    <SlideComponent :slides="slidesData" />
    <PizzaMenuComponent :pizzas="pizzasData"/>
    <basement-component/>
  </div>
</template>
