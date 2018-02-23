import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import OneDay from '@/components/OneDay'
import Extended from '@/components/Extended'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/OneDay',
      name: 'OneDay',
      component: OneDay
    },
    {
      path: '/Extended',
      name: 'Extended',
      component: Extended
    }
  ]
})
