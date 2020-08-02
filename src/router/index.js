import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/index.vue'
import Category from '../views/Category/index.vue'
import Mine from '../views/Mine/index.vue'
import Cart from '../views/Cart/index.vue'

Vue.use(VueRouter)

const routes = [
  {
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
  }
]

const router = new VueRouter({
  routes
})

export default router
