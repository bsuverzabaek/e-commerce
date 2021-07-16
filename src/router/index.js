import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/EN/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/JP',
    name: 'HomeJP',
    component: () => import('../views/JP/HomeJP.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/EN/Login.vue')
  },
  {
    path: '/loginJP',
    name: 'LoginJP',
    component: () => import('../views/JP/LoginJP.vue')
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
