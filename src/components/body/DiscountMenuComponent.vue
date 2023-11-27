<template>
  <div class="Discount">Акции</div>
  <div class="DiscountMenu">
    <div class="discount-item" v-for="(discount, index) in discountes" :key="index">
      <img
        :src="discount.image"
        alt="Скидка"
        class="discount-image"
        @click="openModal(discount.image)"
      />
      <p class="discount-description">{{ discount.description }}</p>
    </div>
    <!-- Модальное окно -->
    <div class="modal" v-if="isModalOpen" @click="closeModal">
      <div class="modal-content">
        <span class="close" @click="closeModal">&times;</span>
        <img :src="selectedImage" alt="Увеличенное изображение" class="modal-image" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import type { PropType } from 'vue'

export default defineComponent({
  name: 'DiscountMenuComponent',
  props: {
    discountes: {
      type: Array as PropType<{ image: string; description: string }[]>,
      required: true
    }
  },
  setup() {
    const isModalOpen = ref(false)
    const selectedImage = ref('')

    const openModal = (image: string) => {
      selectedImage.value = image
      isModalOpen.value = true
    }

    const closeModal = () => {
      isModalOpen.value = false
      selectedImage.value = ''
    }

    return {
      isModalOpen,
      selectedImage,
      openModal,
      closeModal
    }
  }
})
</script>

<style scoped>
@media (max-width: 800px) {
  .Discount {
    font-size: 40px;
    font-weight: bold;
    margin-bottom: 20px;
    text-align: left;
    margin-top: 150px;
  }
}
@media (min-width: 800px) {
  .Discount {
    font-size: 40px;
    font-weight: bold;
    margin-bottom: 20px;
    text-align: left;
  }
}

.DiscountMenu {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}

.discount-item {
  width: 30%;
  box-sizing: border-box;
  margin: 0 1% 10px 1%;
}

.discount-image {
  width: 106%;
  height: 200px;
  display: block;
  object-fit: cover;
  border-radius: 10px;
  cursor: pointer;
}

.discount-description {
  margin-top: 10px;
  padding: 8px 16px;
  max-width: 50%;
  margin-left: auto;
  margin-right: auto;
  border: none;
  background-color: #ff5733;
  color: #fff;
  transition:
    background-color 0.3s,
    transform 0.3s;
  border-radius: 5px;
  font-weight: bold;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  text-align: center;
}
/* Дополнительные стили для модального окна */
.modal {
  display: block;
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.7);
}

.modal-content {
  position: relative;
  margin: 15% auto;
  padding: 20px;
  width: 60%;
  max-width: 800px;
  background-color: #fefefe;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  cursor: pointer;
}

.modal-image {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}
</style>
