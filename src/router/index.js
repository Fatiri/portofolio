import Vue from 'vue'
import VueRouter from 'vue-router'
import Hero from '../views/Hero.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Hero',
    component: Hero
  },
]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router
