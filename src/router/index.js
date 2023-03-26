import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/Home.vue'

import About from '../views/About.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/About',
      name: 'About',
      component: About
    },

  ]
})

export default router