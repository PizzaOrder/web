<template>
  <div>
    <HeaderComponent />
    <SlideComponent :slides="slidesData" />
    <PizzaMenuComponent :pizzas="pizzasData" />
    <BasementComponent />
  </div>
</template>

<script lang="ts">
import { reactive } from 'vue';
import { defineComponent, ref } from 'vue'
import HeaderComponent from '@/components/HeaderComponent.vue'
import BasementComponent from '@/components/basement/BasementComponent.vue'
import PizzaMenuComponent from '@/components/body/PizzaMenuComponent.vue'
import SlideComponent from '@/components/body/SlideComponent.vue'

interface Slide {
  image: string
  alt: string
}
interface Promo{
  id: number;
  code: string;
  discountOnInt?: number;
  discountOnPresent?: number;
}

export interface Pizza {
  id: number;
  image: string;
  name: string;
  price: number;
  buttonText: string;
  quantity?: number;

}

interface GlobalState {
  orders: Pizza[];
}

export const globalState: GlobalState = reactive({
  orders: []
});


export function addToGlobalOrder(pizza: Pizza): void {
  const existingPizzaIndex = globalState.orders.findIndex(orderPizza => orderPizza.name === pizza.name);

  if (existingPizzaIndex !== -1) {
    // Используйте опциональную цепочку и оператор нулевого слияния для увеличения количества
    globalState.orders[existingPizzaIndex].quantity = (globalState.orders[existingPizzaIndex].quantity ?? 0) + 1;
  } else {
    globalState.orders.push({ ...pizza, quantity: 1 });
  }
}





export default defineComponent({
  name: 'MainComponent',
  components: {
    HeaderComponent,
    BasementComponent,
    PizzaMenuComponent,
    SlideComponent
  },
  setup() {
    const promoData = ref<Promo[]>([
      {
        id: 1,
        code: 'promofree',
        discountOnPresent: 20,
      },
      {
        id: 2,
        code: 'promotrue',
        discountOnPresent: 50,
      }
    ])


    const slidesData = ref<Slide[]>([
      { image: '/assets/discounts/pudge1.jpg', alt: 'Описание 1' },
      { image: '/assets/discounts/pudge2.jpeg', alt: 'Описание 2' },
      { image: '/assets/discounts/pudge3.jpeg', alt: 'Описание 3' }
    ])

    const pizzasData = ref<Pizza[]>([
      {
        id: 1,
        image: '/assets/discounts/pizza1.jpeg',
        name: 'Грибная',
        price: 245,
        buttonText: 'ДОБАВИТЬ В КОРЗИНУ'
      },
      {
        id: 2,
        image: '/assets/discounts/pizza2.jpeg',
        name: 'Не Грибная',
        price: 245,
        buttonText: 'ДОБАВИТЬ В КОРЗИНУ'
      },
      {
        id: 3,
        image: '/assets/discounts/pizza2.jpeg',
        name: 'СуперГрибная',
        price: 245,
        buttonText: 'ДОБАВИТЬ В КОРЗИНУ'
      },
      {
        id: 4,
        image: '/assets/discounts/pizza2.jpeg',
        name: 'ПолуГрибная',
        price: 245,
        buttonText: 'ДОБАВИТЬ В КОРЗИНУ'
      },
      {
        id: 5,
        image: '/assets/discounts/pizza2.jpeg',
        name: 'Такая но не Грибная',
        price: 245,
        buttonText: 'ДОБАВИТЬ В КОРЗИНУ'
      },
      {
        id: 6,
        image: '/assets/discounts/pizza2.jpeg',
        name: 'ОмагадГрибная',
        price: 245,
        buttonText: 'ДОБАВИТЬ В КОРЗИНУ'
      },
      {
        id: 7,
        image: '/assets/discounts/pizza2.jpeg',
        name: 'Грибная',
        price: 250,
        buttonText: 'ДОБАВИТЬ В КОРЗИНУ'
      },
      {
        id: 8,
        image: '/assets/discounts/pizza2.jpeg',
        name: 'Грибная',
        price: 245,
        buttonText: 'ДОБАВИТЬ В КОРЗИНУ'
      }
    ])

    return {
      slidesData,
      pizzasData,
      promoData
    }
  }
})
</script>
