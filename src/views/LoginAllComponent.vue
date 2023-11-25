<script lang="ts">
import LoginComponent from '@/components/registration/LoginComponent.vue'
import HeaderComponent from '@/components/header/HeaderComponent.vue'
import { defineComponent } from 'vue'
import BasementComponent from '@/components/basement/BasementComponent.vue'
export default defineComponent({
  components: {
    HeaderComponent,
    LoginComponent,
    BasementComponent
  },
  setup() {
    return {}
  }
})
</script>

<template>
  <div><HeaderComponent/></div>
  <div><LoginComponent/></div>
  <div><BasementComponent/></div>

</template>

<style scoped>

</style>