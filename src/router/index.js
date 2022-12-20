import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/domain',
    name: 'domain',

    component: () => import(/* webpackChunkName: "domain" */ '../views/DomainView.vue')
  },
  {
    path: '/domain/create',
    name: 'createDomainView',
    component: () => import(/* webpackChunkName: "create" */ '../views/FormDomainView.vue')
  },
  {
    path: '/domain/edit/:id',
    name: 'editDomainView',
    component: () => import(/* webpackChunkName: "create" */ '../views/FormDomainView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
