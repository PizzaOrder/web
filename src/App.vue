<template>
  <div>
    <SlideComponent :slides="slidesData" />
  </div>
</template>

<script setup lang="ts">
import SlideComponent from '@/components/body/SlideComponent.vue'

const slidesData = [
  { image: 'assets/discounts/pudge1.jpg', alt: 'Описание 1' },
  { image: 'assets/discounts/pudge1.jpg', alt: 'Описание 2' },
  { image: 'assets/discounts/pudge1.jpg', alt: 'Описание 3' }
  // Другие слайды...
]
</script>
