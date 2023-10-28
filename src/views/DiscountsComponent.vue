<template>
  <div>
    <HeaderComponent />
  </div>
  <div class='Discount'>
    <DiscountMenuComponent />
  </div>
  <div class='Basement'>
    <BasementComponent />
  </div>

</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import DiscountMenuComponent from '@/components/body/DiscountMenuComponent.vue'
import HeaderComponent from '@/components/HeaderComponent.vue'
import BasementComponent from '@/components/basement/BasementComponent.vue'

export default defineComponent({
  name: 'DiscountComponent',
  components: {
    DiscountMenuComponent,
    HeaderComponent,
    BasementComponent
  },
  setup() {
    return {}
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