import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Money from '@/views/Money.vue';
import Labels from '@/views/Labels.vue';
import Statistics from '@/views/Statistics.vue';
import NotFound from '../components/NotFound.vue';
import Edit from '@/views/Edit.vue';

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path:'/',
    redirect:'/money',
  },
  {
    path:'/money',
    name:'Money',
    component:Money,
  },
  {
    path:'/labels',
    name:'Labels',
    component:Labels,
  },
  {
    path:'/statistics',
    name:'Statistics',
    component:Statistics,
  },
  {
    path:'*',
    name:'404',
    component:NotFound,
  },
  {
    path:'/edit/:id&type',
    name:'Edit',
    component:Edit,
  }
]

const router = new VueRouter({
  routes
})

export default router
