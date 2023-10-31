<script setup lang='ts'>
import CartComponent from '@/components/body/CartComponent.vue'
import HeaderComponent from '@/components/HeaderComponent.vue'
</script>

<template>
  <div><HeaderComponent/></div>
  <div class='Cart'><CartComponent/></div>

</template>

<style scoped>
.Cart{
  margin-top: 110px;
}
</style>