import { createRouter, createWebHistory } from 'vue-router'
import HomeComponent from '@/views/HomeComponent.vue'
import DiscountsComponent from '@/views/DiscountsComponent.vue'

const routes = [
  { path: '/', component: HomeComponent },
  { path: '/discount', component: DiscountsComponent }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
