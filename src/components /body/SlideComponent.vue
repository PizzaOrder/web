
<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue'; // Импорт только для типов

interface Slide {
  image: string;
  alt: string;
}

export default defineComponent({
  props: {
    slides: {
      type: Array as PropType<Slide[]>,
      required: true
    }
  },
  data() {
    return {
      currentIndex: 0
    };
  },
  methods: {
    nextSlide() {
      if (this.currentIndex < this.slides.length - 1) {
        this.currentIndex++;
      } else {
        this.currentIndex = 0;
      }
    },
    prevSlide() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      } else {
        this.currentIndex = this.slides.length - 1;
      }
    }
  }
});
</script>

<template>
  <div class="carousel">
    <button @click="prevSlide">←</button>
    <div class="carousel-slide" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
      <div v-for="(slide, index) in slides" :key="index" class="carousel-item">
        <img :src="slide.image" :alt="slide.alt" />
      </div>
    </div>
    <button @click="nextSlide">→</button>
  </div>
</template>

<style scoped>
.carousel {
  display: flex;
  align-items: center;
  width: 100%; /* Расширьте слайдер на всю ширину страницы */
}

.carousel-slide {
  display: flex;
  transition: transform 0.3s ease;
  overflow: hidden;
  width: 100%; /* Расширьте слайды на всю ширину страницы */
}

.carousel-item {
  min-width: 100%; /* Расширьте слайды на всю ширину страницы */
  height: 300px; /* Установите желаемую высоту слайдов */
  transition: transform 0.3s ease;
}
</style>
