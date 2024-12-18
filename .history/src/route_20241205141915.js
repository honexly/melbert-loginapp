import Vue from 'vue';
import VueRouter from 'vue-router';
import LoginPage from '@/pages/LoginPage.vue';


Vue.use(VueRouter);

/* eslint-disable no-unused-vars */
const routes = [
  {
    path: '/',
    name: 'Login',
    component: LoginPage,
  },
];
/* eslint-enable no-unused-vars */

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;