import { createRouter, createWebHistory } from 'vue-router'
import pageMain from '@/views/pageMain.vue'
import pageSelections from '@/views/pageSelections.vue'


const routes = [
  {
    path: '/selections',
    component: pageSelections
  },
  {
    path: '/',
    component: pageMain
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
