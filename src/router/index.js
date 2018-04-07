import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Todo from '@/components/Todo'
import List from '@/components/List'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Todo',
      component: Todo,
      children:[ //子路由
        {
          path:'/list',
          name:'List',
          component:List,
        }
      ]
    }
  ]
})
