import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import User from  '../views/User.vue'
import UserShow from '../views/UserShow.vue'
import Login from '../views/Login.vue'
import Vuex from '../views/Vuex.vue'
import Computed from '../views/Computed.vue'


Vue.use(VueRouter)



const routes = [

  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path:'/computed',
    component:Computed
  },
  {
    path:'/vuex',
    component: Vuex
  },
  {
    path:'/user',
    component: User,
    children:[
     { path:':id', component:UserShow}
    ]
  },
  {
    path:'/login',
    component: Login
  },
  {
    path:'*',
    redirect:{name:'home'}
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
