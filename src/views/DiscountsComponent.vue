<template>
  <div>
    <HeaderComponent />
    <BasementComponent/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HeaderComponent from '@/components/HeaderComponent.vue'
import BasementComponent from '@/components/basement/BasementComponent.vue'

export default defineComponent({
  name: "DiscountComponent",
  components: {
    HeaderComponent,
    BasementComponent,
  },
  setup() {

    return {
    }
  }
})
</script>
