import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Checkout from '@/pages/Checkout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Home },
    { path: '/checkout', component: Checkout }
  ],
})

export default router
