import Vue from 'vue';
import VueRouter from 'vue-router';
// import { createWebHistory } from 'vue-router';
import LoginPage from '@/pages/LoginPage.vue';
import HomePage from './pages/HomePage.vue';



Vue.use(VueRouter);

/* eslint-disable no-unused-vars */
const routes = [
  {
    path: '/',
    redirect: 'login',
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage,
    meta: {
      title: 'sample',
    }
  },
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  
];
/* eslint-enable no-unused-vars */

const router = new VueRouter({
  mode: 'history',
  // mode: createWebHistory,
  base: process.env.BASE_URL,
  routes
});
export default router;