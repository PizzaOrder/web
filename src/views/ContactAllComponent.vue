<script setup lang="ts">
import HeaderComponent from '@/components/header/HeaderComponent.vue'
import ContactComponent from '@/components/body/ContactComponent.vue'
import BasementComponent from '@/components/basement/BasementComponent.vue'
</script>

<template>
  <div><HeaderComponent /></div>
  <div class="Contact"><ContactComponent /></div>
  <div><BasementComponent /></div>
</template>

<style scoped>
@media (max-width: 768px) {
  .Contact {
    margin-top: 100px;
    margin-left: 300px;
    margin-right: 300px;
  }
}

@media (min-width: 769px) {
  .Contact {
    margin-top: 150px;
    margin-left: 400px;
    margin-right: 400px;
  }
}
</style>
