import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/index.vue'
import Category from '../views/Category/index.vue'
import Mine from '../views/Mine/index.vue'
import Cart from '../views/Cart/index.vue'
import Detail from '../components/Detail/index.vue'
import Amount from '../views/Amount/index.vue'
import finish from '../views/Amount/finish.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/home'
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/Category',
    name: 'Category',
    component: Category
  },
  {
    path: '/Cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/Mine',
    name: 'Mine',
    component: Mine
  },
  {
    path: '/Detail',
    name: 'Detail',
    component: Detail
  },
  {
    path: '/Amount',
    name: 'Amount',
    component: Amount
  },
  {
    path: '/finish',
    name: 'finish',
    component: finish
  }
]

const router = new VueRouter({
  routes
})

export default router
