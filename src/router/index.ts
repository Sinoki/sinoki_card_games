import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import Games from '../views/Games.vue';
import Saitama from '../views/Saitama.vue';
import Hakusho from '../views/Hakusho.vue';
import Naruto from '../views/Naruto.vue';
import ShinChan from '../views/ShinChan.vue';
import DeathNote from '../views/DeathNote.vue';
import Dragon from '../views/Dragon.vue';
import OnePiece from '../views/OnePiece.vue';
import AttackTitan from '../views/AttackTitan.vue';
import Fullmetal from '../views/Fullmetal.vue';
import Bucky from '../views/Bucky.vue';
import Chihiro from '../views/Chihiro.vue';
import Totoro from '../views/Totoro.vue';
import Avatar from '../views/Avatar.vue';
import Login from '../views/Login.vue';
import Contact from '../views/Contact.vue';
import Signup from '../views/Signup.vue';
import Checkout from '../views/Checkout.vue';
import CardsSaitama from '../views/CardsSaitama.vue';
import Cart from '../views/Cart.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
  },
  {
    path: '/saitama',
    name: 'Saitama',
    component: Saitama,
  },
  {
    path: '/hakusho',
    name: 'Hakusho',
    component: Hakusho,
  },
  {
    path: '/naruto',
    name: 'Naruto',
    component: Naruto,
  },
  {
    path: '/shin-chan',
    name: 'Shin-chan',
    component: ShinChan,
  },
  {
    path: '/deathNote',
    name: 'DeathNote',
    component: DeathNote,
  },
  {
    path: '/dragon',
    name: 'Dragon',
    component: Dragon,
  },
  {
    path: '/onePiece',
    name: 'OnePiece',
    component: OnePiece,
  },
  {
    path: '/attackTitan',
    name: 'AttackTitan',
    component: AttackTitan,
  },
  {
    path: '/fullmetal',
    name: 'Fullmetal',
    component: Fullmetal,
  },
  {
    path: '/bucky',
    name: 'Bucky',
    component: Bucky,
  },
  {
    path: '/chihiro',
    name: 'Chihiro',
    component: Chihiro,
  },
  {
    path: '/totoro',
    name: 'Totoro',
    component: Totoro,
  },
  {
    path: '/avatar',
    name: 'Avatar',
    component: Avatar,
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
  {
    path: '/cardsSaitama',
    name: 'CardsSaitama',
    component: CardsSaitama,
  },
  {
    path: '/products',
    name: 'Products',
    component: CardsSaitama,
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
