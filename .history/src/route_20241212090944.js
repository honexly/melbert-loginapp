import Vue from 'vue';
import VueRouter from 'vue-router';
// import { createWebHistory } from 'vue-router';
import LoginPage from '@/pages/LoginPage.vue';
import HomePage from './pages/HomePage.vue';
import Notfound from './pages/notfound.vue';




Vue.use(VueRouter);

/* eslint-disable no-unused-vars */
const routes = [
  {
    path: '/',
    redirect: 'LoginPage',
  },
  {
    path: '/loginPage',
    name: 'login',
    component: LoginPage,
    meta: {
      title: 'sample',
    }
  },
  {
    path: '/home',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/not-found',
    name: 'not-found',
    component: Notfound,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notexist',
    component:() => import('@/pages/notexist.vue')
  }
  
];
/* eslint-enable no-unused-vars */

const router = new VueRouter({
  mode: 'history',
  // mode: createWebHistory,
  base: process.env.BASE_URL,
  routes
});
export default router;