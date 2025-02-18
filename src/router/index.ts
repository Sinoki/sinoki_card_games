import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import Games from '../views/Games.vue';
import Login from '../views/Login.vue';
import Contact from '../views/Contact.vue';
import Signup from '../views/Signup.vue';
import Checkout from '../views/Checkout.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout,
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/games',
    name: 'Games',
    component: Games,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
