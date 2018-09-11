import Vue from 'vue'
import Router from 'vue-router'
import menus from '@/config/menu-config'

// import Login from '@/components/Login'

Vue.use(Router)

var routes = []

menus.forEach((item) => {
  item.sub.forEach((sub) => {
    routes.push({
      path: `/${sub.componentName}`,
      name: sub.componentName,
      component: () => import(`@/components/${sub.componentName}`)
    })
  })
})

routes.push({
  path: '/login',
  name: 'Login',
  component: () => import(`@/components/Login`)
})
let Routersaa = new Router({ routes })
// 访问之前，都检查下是否登录了
Routersaa.beforeEach((to, from, next) => {
  // console.log('to:' + to.path)
  if (to.path.startsWith('/login')) {
    window.sessionStorage.removeItem('access-token')
    next()
  } else {
    let token = window.sessionStorage.getItem('access-token')

    console.log(token)

    if (!token) {
      next({path: '/login'})
    } else {
      next()
    }
  }
})

export default Routersaa
