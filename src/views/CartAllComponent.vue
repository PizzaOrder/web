

<script setup lang="ts">
import { ref } from 'vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import BasementComponent from '@/components/basement/BasementComponent.vue';
import CartComponent from '@/components/body/CartComponent.vue'
interface Promo {
  id: number;
  code: string;
  discountOnInt?: number;
  discountOnPresent?: number;
}

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
  },
]);

</script>


<template>
  <div><HeaderComponent/></div>
  <div class='Cart'><CartComponent :promes='promoData'/></div>

</template>

<style scoped>
.Cart{
  margin-top: 110px;
}
</style>