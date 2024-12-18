import Vue from 'vue';
import VueRouter from 'vue-router';
import LoginPage from '@/pages/LoginPage.vue';
import HomePage from '@/components/HomePage.vue';  // The page you want to navigate to after login

Vue.use(VueRouter);

/* eslint-disable no-unused-vars */
const routes = [
  {
    path: '/',
    name: 'Login',
    component: LoginPage,
  },
  {
    path: '/home',
    name: 'Home',  // This is the page you want to navigate to
    component: HomePage,  // Your home page component after successful login
  },
];
/* eslint-enable no-unused-vars */

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});
export default router;