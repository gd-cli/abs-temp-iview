import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home/index.vue';
import loadable from '@/utils/loadable';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    component: loadable(() => import(/* webpackChunkName: "about" */ '../views/About/index.vue')),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
