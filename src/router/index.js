/*
 路由器模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import Msite from '../pages/Msite/Msite.vue'
import Type from '../pages/Type/Type.vue'
import Cart from '../pages/Cart/Cart.vue'
import Myepet from '../pages/Myepet/Myepet.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/msite'
    },
    {
      path: '/msite',
      component: Msite
    },
    {
      path: '/type',
      component: Type
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/myepet',
      component: Myepet
    }
  ]
})
