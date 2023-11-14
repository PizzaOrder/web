<template>
  <button @click="scrollToTop" v-show="isVisible" class="scrollToTopBtn">
    &#9650;
  </button>
</template>

<script lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

export default {
  name: 'ScrollToTopButton',
  setup() {
    const isVisible = ref(false);

    const handleScroll = () => {
      isVisible.value = window.scrollY > 20;
    };

    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
    });

    onBeforeUnmount(() => {
      window.removeEventListener('scroll', handleScroll);
    });

    return {
      isVisible,
      scrollToTop,
    };
  },
};
</script>

<style scoped>
.scrollToTopBtn {
  position: fixed;
  bottom: 50px;
  right: 20px;
  padding: 10px 16px;
  border: none;
  background-color: #ff5733; /* Изменено на ваш оранжевый цвет */
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
  border-radius: 5px;
  font-weight: bold;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.scrollToTopBtn:hover {
  background-color: #e64c00; /* Изменено на темно-оранжевый цвет при наведении */
}
</style>
