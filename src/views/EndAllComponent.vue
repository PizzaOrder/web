<script lang="ts">
import EndComponent from '@/components/body/EndComponent.vue'
import HeaderComponent from '@/components/header/HeaderComponent.vue'
import { defineComponent } from 'vue'
import BasementComponent from '@/components/basement/BasementComponent.vue'
export default defineComponent({
  components: {
    HeaderComponent,
    EndComponent,
    BasementComponent
  },
  setup() {
    return {}
  }
})
</script>

<template>
  <div><HeaderComponent /></div>
  <div><EndComponent /></div>
  <div><BasementComponent /></div>
</template>

<style scoped></style>
