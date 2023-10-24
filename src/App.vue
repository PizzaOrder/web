<script setup lang="ts">
import HeaderComponent from '@/components/HeaderComponent.vue'
import BasementComponent from '@/components/basement/BasementComponent.vue'
import SlideComponent from '@/components/body/SlideComponent.vue'

const slidesData = [
  { image: 'assets/discounts/pudge1.jpg', alt: 'Описание 1' },
  { image: 'assets/discounts/pudge2.jpeg', alt: 'Описание 2' },
  { image: 'assets/discounts/pudge3.jpeg', alt: 'Описание 3' },
  { image: 'assets/discounts/pudge3.jpeg', alt: 'Описание 3' },
  { image: 'assets/discounts/pudge3.jpeg', alt: 'Описание 3' },
  { image: 'assets/discounts/pudge3.jpeg', alt: 'Описание 3' },


  // Другие слайды...
]
</script>

<template>

  <div >
    <HeaderComponent />
    <SlideComponent :slides="slidesData" />

  </div>
  <BasementComponent />

</template>
