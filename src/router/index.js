import Vue from 'vue'
import Router from 'vue-router'
// import menus from '@/config/menu-config'

import Login from '@/components/Login'

Vue.use(Router)

var routesArray = []

routesArray.push({
  path: '/',
  name: 'login',
  component: Login
})
//
// menus.forEach((item) => {
//   item.sub.forEach((sub) => {
//     routes.push({
//       path: `/${sub.componentName}`,
//       name: sub.componentName,
//       component: () => import(`@/components/${sub.componentName}`)
//     })
//   })
// })
let routes = new Router({ routesArray })
// 访问之前，都检查下是否登录了
routes.beforeEach((to, from, next) => {
  // console.log('to:' + to.path)
  if (to.path.startsWith('/login')) {
    window.sessionStorage.removeItem('access-token')
    next()
  } else {
    let token = window.sessionStorage.getItem('access-token')
    if (!token) {
      next({path: '/login'})
    } else {
      next()
    }
  }
})

export default routes
