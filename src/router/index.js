import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/pages/login.vue'
import Manage from '@/pages/manage.vue'
import Userlist from '@/pages/userlist.vue'
import Visitor from '@/pages/visitor.vue'
Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    { name: Login,
      path: '/login',
      component: Login
    },
    {
      name: Manage,
      path: '/manage',
      component: Manage
    }, {
      name: Userlist,
      path: '/userlist',
      component: Userlist
    },
    {
      name: Visitor,
      path: '/visitor',
      component: Visitor
    }
  ]
})
// 添加导航守卫--路由守卫
// router.beforeEach((to, from, next) => {
//   let token = localStorage.getItem('heima_backstage_37_token')
//   if (token || to.path === '/login') {
//     next()
//   } else {
//     next({ name: 'Login' })
//   }
// })
export default router
