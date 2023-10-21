<template>
  <div>
    <SlideComponent :slides="slidesData" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SlideComponent from '@/components /body/SlideComponent.vue'
export default defineComponent({
  components: {
    SlideComponent
  },
  data() {
    return {
      slidesData: [
        { image: 'path/to/image1.jpg', alt: 'Описание 1' },
        { image: 'path/to/image2.jpg', alt: 'Описание 2' },
        // ... другие слайды
      ]
    };
  }
});
</script>
