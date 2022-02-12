import Vue from 'vue';
import VueRouter from 'vue-router';
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';
import createListView from '../views/CreateListView.js';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/news'
    },
    {
      path: '/news',
      name: 'news',
      component: createListView('NewsView'),
      // component: NewsView
    },
    {
      path: '/ask',
      name: 'ask',
      component: createListView('AskView'),
      // component: AskView
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: createListView('JobsView'),
      // component: JobsView
    },
    {
      path: '/user/:user',
      component: UserView
    },
    {
      path: '/item/:id',
      component: ItemView
    },
  ]
});
