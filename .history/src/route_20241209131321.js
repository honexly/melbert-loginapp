import Vue from 'vue';
import VueRouter from 'vue-router';
import LoginPage from '@/components/LoginPage.vue'; // Your login page component
import HomePage from '@/components/HomePage.vue';  // The page you want to navigate to after login

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: LoginPage,  // Your login component
  },
  {
    path: '/home',
    name: 'Home',  // This is the page you want to navigate to
    component: HomePage,  // Your home page component after successful login
  },
];

const router = new VueRouter({
  routes, // short for `routes: routes`
});

export default router;
