import { createRouter, createWebHistory } from 'vue-router'
import routerMain from '@/views/router-main.vue'

const routes = [
  {
    path: '/',
    name: routerMain
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
