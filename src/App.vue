<script setup lang="ts">
import Header from '@/components/HeaderComponent.vue'
import basement from '@/components/basement/BasementComponent.vue'
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
  <div>
    <SlideComponent :slides="slidesData" />
  </div>
  <div>
    <Header />
  </div>

  <basement />
</template>
