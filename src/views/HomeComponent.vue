<template>
  <div>
    <HeaderComponent />
    <SlideComponent :slides="slidesData" />
    <PizzaMenuComponent :pizzas="pizzasData" />
    <BasementComponent />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import HeaderComponent from '@/components/HeaderComponent.vue'
import BasementComponent from '@/components/basement/BasementComponent.vue'
import PizzaMenuComponent from '@/components/body/PizzaMenuComponent.vue'
import SlideComponent from '@/components/body/SlideComponent.vue'

interface Slide {
  image: string
  alt: string
}

interface Pizza {
  image: string
  name: string
  price: number
  buttonText: string
}

export default defineComponent({
  name: 'MainComponent', // Замените на имя вашего компонента, если оно есть.
  components: {
    HeaderComponent,
    BasementComponent,
    PizzaMenuComponent,
    SlideComponent
  },
  setup() {
    const slidesData = ref<Slide[]>([
      { image: '/assets/discounts/pudge1.jpg', alt: 'Описание 1' },
      { image: '/assets/discounts/pudge2.jpeg', alt: 'Описание 2' },
      { image: '/assets/discounts/pudge3.jpeg', alt: 'Описание 3' },
      { image: '/assets/discounts/pudge3.jpeg', alt: 'Описание 3' },
      { image: '/assets/discounts/pudge3.jpeg', alt: 'Описание 3' },
      { image: '/assets/discounts/pudge3.jpeg', alt: 'Описание 3' }

      // ... другие элементы
    ])

    const pizzasData = ref<Pizza[]>([
      {
        image: '/assets/discounts/pizza1.jpeg',
        name: 'Грибная',
        price: 245,
        buttonText: 'ДОБАВИТЬ В КОРЗИНУ'
      },
      {
        image: '/assets/discounts/pizza2.jpeg',
        name: 'Грибная',
        price: 245,
        buttonText: 'ДОБАВИТЬ В КОРЗИНУ'
      },
      {
        image: '/assets/discounts/pizza2.jpeg',
        name: 'Грибная',
        price: 245,
        buttonText: 'ДОБАВИТЬ В КОРЗИНУ'
      },
      {
        image: '/assets/discounts/pizza2.jpeg',
        name: 'Грибная',
        price: 245,
        buttonText: 'ДОБАВИТЬ В КОРЗИНУ'
      },
      {
        image: '/assets/discounts/pizza2.jpeg',
        name: 'Грибная',
        price: 245,
        buttonText: 'ДОБАВИТЬ В КОРЗИНУ'
      },
      {
        image: '/assets/discounts/pizza2.jpeg',
        name: 'Грибная',
        price: 245,
        buttonText: 'ДОБАВИТЬ В КОРЗИНУ'
      },
      {
        image: '/assets/discounts/pizza2.jpeg',
        name: 'Грибная',
        price: 245,
        buttonText: 'ДОБАВИТЬ В КОРЗИНУ'
      },
      {
        image: '/assets/discounts/pizza2.jpeg',
        name: 'Грибная',
        price: 245,
        buttonText: 'ДОБАВИТЬ В КОРЗИНУ'
      }

      // ... другие элементы
    ])

    return {
      slidesData,
      pizzasData
    }
  }
})
</script>
