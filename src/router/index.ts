import { createRouter, createWebHistory } from 'vue-router'
import HomeComponent from '@/views/HomeComponent.vue'
import DiscountsComponent from '@/views/DiscountsComponent.vue'
import CartAllComponent from '@/views/CartAllComponent.vue'
import ContactAllComponent from '@/views/ContactAllComponent.vue'
import RegistrationAllComponent from '@/views/RegistrationAllComponent.vue'
import LoginAllComponent from '@/views/LoginAllComponent.vue'
const routes = [
  { path: '/', component: HomeComponent },
  { path: '/discount', component: DiscountsComponent },
  { path: '/cart', component: CartAllComponent },
  { path: '/contact', component: ContactAllComponent },
  { path: '/registration', component: RegistrationAllComponent },
  { path: '/login', component: LoginAllComponent }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
