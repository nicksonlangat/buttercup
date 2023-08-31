import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Flowers.vue')
  },
  {
    path: '/flowers',
    name: 'flowers',
    component: () => import('../views/Flowers.vue')
  },
  {
    path: '/flower/:id',
    name: 'flower',
    component: () => import('../views/Flower.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
