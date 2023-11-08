<script setup lang='ts'>


import HeaderComponent from '@/components/header/HeaderComponent.vue'
import ContactComponent from '@/components/body/ContactComponent.vue'
</script>

<template>
  <div><HeaderComponent/></div>
  <div class='Contact'><ContactComponent/></div>

</template>

<style scoped>
@media (max-width: 768px) {
  .Contact {
    margin-top: 100px;
    margin-left: 15px;
  }
}

@media (min-width: 769px) {
  .Contact {
    margin-top: 150px;
    margin-left: 30px;
  }
}

</style>