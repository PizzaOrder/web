<template>
  <div>
    <ScrollToTopButton />
    <HeaderComponent />
    <SlideComponent :slides="slidesData" />
    <PizzaMenuComponent :pizzas="pizzasData" />
    <ScrollToTopButton />
    <BasementComponent />
  </div>
</template>

<script lang="ts">
import { reactive } from 'vue'
import { defineComponent, ref } from 'vue'
import HeaderComponent from '@/components/header/HeaderComponent.vue'
import BasementComponent from '@/components/basement/BasementComponent.vue'
import PizzaMenuComponent from '@/components/body/PizzaMenuComponent.vue'
import SlideComponent from '@/components/body/SlideComponent.vue'
import ScrollToTopButton from '@/components/body/ScrollToTopButton.vue'

interface Slide {
  image: string
  alt: string
}
interface Promo {
  id: number
  code: string
  discountOnInt?: number
  discountOnPresent?: number
}

export interface Pizza {
  id: number
  img_source: string
  name: string
  price: number
  buttonText: string
  quantity?: number
}

interface GlobalState {
  orders: Pizza[]
}

export const globalState: GlobalState = reactive({
  orders: []
})
function saveOrdersToLocalStorage(): void {
  localStorage.setItem('orders', JSON.stringify(globalState.orders));
}


export function addToGlobalOrder(pizza: {
  img_source: string
  name: string
  price: number
  buttonText: string
}): void {
  const existingPizzaIndex = globalState.orders.findIndex(
    (orderPizza) => orderPizza.name === pizza.name
  )

  if (existingPizzaIndex !== -1) {
    globalState.orders[existingPizzaIndex].quantity =
      (globalState.orders[existingPizzaIndex].quantity ?? 0) + 1
  } else {
    globalState.orders.push({ id: 0, ...pizza, quantity: 1 })
  }
  saveOrdersToLocalStorage();
}
export function loadOrdersFromLocalStorage(): void {
  const savedOrders = localStorage.getItem('orders');
  if (savedOrders) {
    globalState.orders = JSON.parse(savedOrders);
  }
}

export default defineComponent({
  name: 'MainComponent',
  components: {
    ScrollToTopButton,
    HeaderComponent,
    BasementComponent,
    PizzaMenuComponent,
    SlideComponent
  },
  computed: {},
  setup() {
    const promoData = ref<Promo[]>([
      {
        id: 1,
        code: 'promofree',
        discountOnPresent: 20
      },
      {
        id: 2,
        code: 'promotrue',
        discountOnPresent: 50
      }
    ])

    const slidesData = ref<Slide[]>([
      { image: '/assets/discounts/template.png', alt: 'Описание 1' },
      { image: '/assets/discounts/template2.png', alt: 'Описание 2' },
    ])



    return {
      slidesData,
      promoData
    }
  }
})
</script>
