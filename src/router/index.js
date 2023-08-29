import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/flowers',
    name: 'flowers',
    component: () => import('../views/Flowers.vue')
  },
  {
    path: '/flower',
    name: 'flower',
    component: () => import('../views/Flower.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
