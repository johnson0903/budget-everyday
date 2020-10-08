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
        path: '/billing',
        name: 'billing',
        component: () => import('../views/Billing'),
        meta: { title: '月記帳本', icon: 'el-icon-notebook-1' }
      },
      {
        path: '/account',
        name: 'account',
        component: () => import('../views/Account'),
        meta: { title: '帳戶管理', icon: 'el-icon-money' }
      },
      {
        path: '/charts',
        name: 'charts',
        component: () => import('../views/Charts'),
        meta: { title: '圖表分析', icon: 'el-icon-pie-chart' }
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
