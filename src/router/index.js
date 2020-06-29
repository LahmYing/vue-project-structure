import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/home')
  },
  {
    path: '/merchant/:merchant_id',
    name: 'Merchant',
    component: () => import('../views/home')
  },
  {
    path: '/components',
    name: 'Components',
    component: () => import('../views/comps')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
