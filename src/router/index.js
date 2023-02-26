import { createRouter, createWebHistory } from 'vue-router'
import pageMain from '@/views/pageMain.vue'
import aboutPage from '@/views/aboutPage.vue'


const routes = [
  {
    path: '/',
    component: aboutPage
  },
  {
    path: '/main',
    component: pageMain
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
