<template>
  <div>
    <HeaderComponent />
  </div>
  <div class="Discount">
    <DiscountMenuComponent :discountes="discountesData" />
  </div>
  <div class="Basement">
    <BasementComponent />
  </div>
  <div><ScrollToTopButton /></div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import DiscountMenuComponent from '@/components/body/DiscountMenuComponent.vue'
import HeaderComponent from '@/components/header/HeaderComponent.vue'
import BasementComponent from '@/components/basement/BasementComponent.vue'
import ScrollToTopButton from '@/components/body/ScrollToTopButton.vue'
interface Discount {
  image: string
  description: string
}

export default defineComponent({
  name: 'DiscountComponent',
  components: {
    DiscountMenuComponent,
    HeaderComponent,
    ScrollToTopButton
  },
  setup() {
    const discountesData = ref<Discount[]>([

      { image: '/assets/discounts/template.png', description: 'акция' },
      { image: '/assets/discounts/template2.png', description: 'акция' },
    ])
    return {
      discountesData
    }
  }
})
</script>

<style scoped>
@media (max-width: 768px) {
  .Discount {
    margin-top: 100px;
    margin-left: 15px;
  }
}

@media (min-width: 769px) {
  .Discount {
    margin-top: 150px;
    margin-left: 30px;
  }
}
</style>
