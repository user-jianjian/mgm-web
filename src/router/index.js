import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ActivityDetailView from '../views/ActivityDetailView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'activity_detail',
    component: ActivityDetailView
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
