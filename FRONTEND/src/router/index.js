import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Buscar from '../views/Buscar.vue'
import Perfil from '../views/Perfil.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/buscar',
    name: 'Buscar',
    component: Buscar
  },
  {
    path: '/perfil',
    name: 'Perfil',
    component: Perfil
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
