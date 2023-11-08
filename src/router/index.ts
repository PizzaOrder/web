import { createRouter, createWebHistory } from 'vue-router'
import HomeComponent from '@/views/HomeComponent.vue'
import DiscountsComponent from '@/views/DiscountsComponent.vue'
import CartAllComponent from '@/views/CartAllComponent.vue'
import ContactAllComponent from '@/views/ContactAllComponent.vue'
const routes = [
  { path: '/', component: HomeComponent },
  { path: '/discount', component: DiscountsComponent },
  {path: '/cart',component: CartAllComponent},
  {path: '/contact',component: ContactAllComponent}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
