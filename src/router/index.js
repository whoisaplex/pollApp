import Vue from 'vue'
import Router from 'vue-router'
import Polls from '@/components/Polls'
import Index from '@/components/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/polls/:id',
      name: 'Polls',
      component: Polls
    }
  ],
  mode: 'history'
})
