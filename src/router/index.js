import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'

/**
 *  Routes Mapping
 *  Home / Login    : /
 *  Dashboard       : /me
 *  Compose Blog    : /compose
 */

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    beforeEnter: (to, from, next) => {
      if (store.getters.loggedIn) {
        next({ name: "dashboard" });
      }
      else {
        next()
      }
    },
  },
  {
    path: '/me',
    name: 'dashboard',
    // check if the user is loggedin
    beforeEnter: (to, from, next) => {
      if (!store.getters.loggedIn) {
        alert("Sign In Required!")
        next({ name: "home" })
      }
      else {
        next();
      }
    },
    component: () => import('../views/Dashboard.vue'),
  },
  {
    path: '/compose',
    name: 'compose',
    component: () => import('../components/dashboard/Compose.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
