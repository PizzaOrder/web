<script lang="ts">
import { ref } from 'vue'
import { defineComponent } from 'vue'
import HeaderComponent from '@/components/header/HeaderComponent.vue'
import CartComponent from '@/components/body/CartComponent.vue'
import ScrollToTopButton from '@/components/body/ScrollToTopButton.vue'
interface Promo {
  id: number
  code: string
  discountOnInt?: number
  discountOnPresent?: number
}

export default defineComponent({
  components: {
    ScrollToTopButton,
    HeaderComponent,
    CartComponent,
  },
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

    return {
      promoData
    }
  }
})
</script>

<template>
  <div><HeaderComponent /></div>
  <div class="Cart"><CartComponent :promes="promoData" /></div>
  <div><ScrollToTopButton/></div>
</template>

<style scoped>
.Cart {
  margin-top: 110px;
}
</style>
