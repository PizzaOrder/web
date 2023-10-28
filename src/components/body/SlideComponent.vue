<template>
  <div class="carousel-container">
    <div class="carousel">
      <div
        class="carousel-slide"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
        @mousedown="handleMouseDown"
        @mouseup="handleMouseUp"
      >
        <div v-for="(slide, index) in slides" :key="index" class="carousel-item">
          <router-link to="/discount" class="carousel-item">
            <img :src="slide.image" :alt="slide.alt" draggable="false" />
          </router-link>
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
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

interface Slide {
  image: string
  alt: string
}

const props = defineProps({
  slides: {
    type: Array as () => Slide[],
    required: true
  }
})

const currentIndex = ref(0)

const nextSlide = () => {
  if (currentIndex.value < props.slides.length - 1) {
    currentIndex.value++
  } else {
    currentIndex.value = 0
  }
}

const goToSlide = (index: number) => {
  currentIndex.value = index
}

let interval = setInterval(() => {
  nextSlide()
}, 5000)

watch(currentIndex, () => {
  clearInterval(interval)
  interval = setInterval(() => {
    nextSlide()
  }, 5000)
})
let startX = 0
let isDragging = false

const handleMouseDown = (e: MouseEvent) => {
  startX = e.clientX
  isDragging = true
  window.addEventListener('mousemove', handleMouseMove)
}

const handleMouseMove = (e: MouseEvent) => {
  if (!isDragging) return

  const diffX = e.clientX - startX

  if (diffX < -50) {
    // 50 - это произвольное значение, вы можете его изменить
    nextSlide()
    isDragging = false
  } else if (diffX > 50) {
    prevSlide() // функция для переключения на предыдущий слайд
    isDragging = false
  }
}

const handleMouseUp = () => {
  isDragging = false
  window.removeEventListener('mousemove', handleMouseMove)
}

const prevSlide = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  } else {
    currentIndex.value = props.slides.length - 1
  }
}
</script>

<style scoped>
.carousel-container {
  margin-top: 100px;
}
.carousel {
  width: 100%;
  position: relative;
  overflow: hidden;
}

.carousel-slide {
  display: flex;
  transition: transform 0.3s ease-out;
}

.carousel-item {
  flex: 0 0 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel-item img {
  width: 100%;
  max-height: 100%;
  display: block;
  user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}

.dots {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #ccc;
  margin: 0 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-out;
}

.dot.active {
  background-color: #333;
}
</style>
