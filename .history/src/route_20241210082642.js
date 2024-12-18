import Vue from 'vue';
import VueRouter from 'vue-router';
import LoginPage from '@/pages/LoginPage.vue';
import HomePage from './pages/HomePage.vue';



Vue.use(VueRouter);

/* eslint-disable no-unused-vars */
const routes = [
  {
    path: '/',
    name: 'Login',
    component: LoginPage,
    meta
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
  base: process.env.BASE_URL,
  routes
});
export default router;