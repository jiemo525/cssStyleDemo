import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import About from '../components/About'
import DiscolorationText from '../components/DiscolorationText';
import Underline from '../components/Underline';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    }, {
      path: '/about',
      name: 'About',
      component: About
    }, {
      path: '/discoloration-text',
      name: 'DiscolorationText',
      component: DiscolorationText
    }, {
      path: '/underline',
      name:'Underline',
      component: Underline
    }
  ]
})
