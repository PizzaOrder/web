<script lang="ts">
import RegComponent from '@/components/registration/RegComponent.vue'
import HeaderComponent from '@/components/header/HeaderComponent.vue'
import { defineComponent } from 'vue'
import BasementComponent from '@/components/basement/BasementComponent.vue'
export default defineComponent({
  components: {
    HeaderComponent,
    RegComponent,
    BasementComponent
  },
  setup() {
    return {}
  }
})
</script>

<template>
  <div><HeaderComponent /></div>
  <div><RegComponent /></div>
  <div><BasementComponent /></div>
</template>

<style scoped></style>
