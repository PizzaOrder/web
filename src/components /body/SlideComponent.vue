<template>
  <div class="carousel">
    <div class="carousel-slide" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
      <div v-for="(slide, index) in slides" :key="index" class="carousel-item">
        <img :src="slide.image" :alt="slide.alt" />
      </div>
    </div>
    <div class="dots">
      <span
        v-for="(slide, index) in slides"
        :key="index"
        @click="goToSlide(index)"
        :class="{ active: index === currentIndex }"
        class="dot"
      ></span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

interface Slide {
  image: string;
  alt: string;
}

const props = defineProps({
  slides: {
    type: Array as () => Slide[],
    required: true,
  },
});

const currentIndex = ref(0);

const nextSlide = () => {
  if (currentIndex.value < props.slides.length - 1) {
    currentIndex.value++;
  } else {
    currentIndex.value = 0;
  }
};

const prevSlide = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  } else {
    currentIndex.value = props.slides.length - 1;
  }
};

const goToSlide = (index: number) => {
  currentIndex.value = index;
};

// Автоматическое переключение слайдов каждые 5 секунд
let interval = setInterval(() => {
  nextSlide();
}, 5000);

watch(currentIndex, () => {
  clearInterval(interval);
  // Перезапустите автоматическое переключение после переключения на новый слайд
  interval = setInterval(() => {
    nextSlide();
  }, 5000);
});
</script>

<style scoped>
.carousel {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: relative;
}

.carousel-slide {
  display: flex;
  transition: transform 0.3s ease;
  overflow: hidden;
  width: 100%;
}

.carousel-item {
  min-width: 100%;
  height: 300px;
  transition: transform 0.3s ease;
}

.dots {
  display: flex;
  margin-top: 10px;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #ccc;
  margin: 0 5px;
  cursor: pointer;
}

.dot.active {
  background-color: #333;
}
</style>
