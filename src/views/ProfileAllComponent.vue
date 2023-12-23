<script lang="ts">
import ProfileComponent from '@/components/registration/ProfileComponent.vue'
import { defineComponent } from 'vue'
import HeaderComponent from '@/components/header/HeaderComponent.vue'
export default defineComponent({
  components: {
    HeaderComponent,
    ProfileComponent
  },
  setup() {
    return {}
  }
})
</script>

<template>
  <div><HeaderComponent /></div>
  <div class="Prof"><ProfileComponent /></div>
</template>

<style scoped>
@media (max-width: 750px) {
  .Prof {
    margin-top: 150px;
  }
}
@media (min-width: 750px) {
  .Prof {
    margin-top: 110px;
  }
}
</style>
