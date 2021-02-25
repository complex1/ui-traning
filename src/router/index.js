import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../Home/Home.vue'
import HTML from '../Html'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/html',
    name: 'Html',
    component: HTML
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
