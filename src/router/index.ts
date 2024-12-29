import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Planner from '../views/Planner.vue';


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue'),
    },
    {
      path: '/cadastro',
      name: 'cadastro',
      component: () => import('../views/Cadastro.vue'),
    },
    {
      path: '/planilha',
      name: 'Planner',
      component: Planner,
    },

  ],
})

export default router
