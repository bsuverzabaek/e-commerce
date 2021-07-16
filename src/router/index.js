import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/EN/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('../views/EN/Login.vue')
  },
  {
    path: '/JP',
    name: 'LoginJP',
    component: () => import('../views/JP/LoginJP.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/homeJP',
    name: 'HomeJP',
    component: () => import('../views/JP/HomeJP.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/EN/Register.vue')
  },
  {
    path: '/registerJP',
    name: 'RegisterJP',
    component: () => import('../views/JP/RegisterJP.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
