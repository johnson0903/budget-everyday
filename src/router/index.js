import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home'),
    children: [
      {
        path: '/overview',
        name: 'overview',
        component: () => import('../views/Overview/'),
        meta: { title: 'Overview', icon: 'el-icon-menu' }
      },
      {
        path: '/budget',
        name: 'budget',
        component: () => import('../views/Budget/'),
        meta: { title: 'Budget', icon: 'el-icon-money' }
      },
      {
        path: '/report',
        name: 'report',
        component: () => import('../views/Report/'),
        meta: { title: 'Report', icon: 'el-icon-s-data' }
      }
    ]
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
