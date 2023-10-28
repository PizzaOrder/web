<template>
  <div>
    <HeaderComponent />
  </div>
  <div class='Discount'>
    <DiscountMenuComponent :discountes="discountesData" />
  </div>
  <div class='Basement'>
    <BasementComponent />
  </div>

</template>

<script lang='ts'>
import { defineComponent, ref } from 'vue'
import DiscountMenuComponent from '@/components/body/DiscountMenuComponent.vue'
import HeaderComponent from '@/components/HeaderComponent.vue'
import BasementComponent from '@/components/basement/BasementComponent.vue'

interface Discount {
  image: string
  description: string
}

export default defineComponent({
  name: 'DiscountComponent',
  components: {
    DiscountMenuComponent,
    HeaderComponent,
    BasementComponent
  },
  setup() {
    const discountesData = ref<Discount[]>([
      { image: '/assets/discounts/pudge1.jpg', description: 'чзх хэллуин уже тут а пудж у тебя нет ???77??' },
      { image: '/assets/discounts/pudge2.jpeg', description: 'ММММ, 300$ скидочка' },
      { image: '/assets/discounts/pudge3.jpeg', description: 'дефолт скидка' },
      { image: '/assets/discounts/mine1.png', description: 'тут скин из майнкрафта был' },
      { image: '/assets/discounts/mine1.png', description: 'тут скин из майнкрафта был' },
      { image: '/assets/discounts/mine1.png', description: 'тут скин из майнкрафта был' },
      { image: '/assets/discounts/mine1.png', description: 'тут скин из майнкрафта был' },
      { image: '/assets/discounts/mine1.png', description: 'тут скин из майнкрафта был' },
      { image: '/assets/discounts/mine1.png', description: 'тут скин из майнкрафта был' },

    ])
    return{
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