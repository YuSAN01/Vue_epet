/*
 路由器模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import Msite from '../pages/Msite/Msite.vue'
import Type from '../pages/Type/Type.vue'
import Cart from '../pages/Cart/Cart.vue'
import Myepet from '../pages/Myepet/Myepet.vue'
import Types from '../pages/Type/Types/Types.vue'
import Brands from '../pages/Type/Brands/Brands.vue'

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
      component: Type,
      children:[
        {
          path: '/',
          redirect: '/type/types'
        },
        {path:'types',
         component:Types,
        },
        {path:'brands',
          component:Brands,
        }
      ]

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
