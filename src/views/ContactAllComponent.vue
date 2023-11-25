<script lang="ts">
import HeaderComponent from '@/components/header/HeaderComponent.vue'
import BasementComponent from '@/components/basement/BasementComponent.vue'
import ScrollToTopButton from '@/components/body/ScrollToTopButton.vue'
import ContactComponent from '@/components/body/ContactComponent.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  components: {
    ScrollToTopButton,
    HeaderComponent,
    ContactComponent,
    BasementComponent
  },
  setup() {
    return {}
  }
})
</script>

<template>
  <div>
    <HeaderComponent />
    <div class="Contact"><ContactComponent /></div>
    <BasementComponent />
    <ScrollToTopButton />
  </div>
</template>

<style scoped>
@media (min-width: 800px) {
  .Contact {
    margin-top: 100px;
    margin-left: 300px;
    margin-right: 300px;
  }
}

@media (max-width: 800px) {
  .Contact {
  }
}
</style>
