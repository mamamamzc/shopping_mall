import Vue from 'vue'
import {
  Tabbar,
  TabbarItem,
  Icon,
  Lazyload,
  Swipe,
  SwipeItem,
  Grid,
  GridItem
} from 'vant'

// 1.Tabbar
Vue.use(Tabbar).use(TabbarItem)

// 2.icon图标
Vue.use(Icon)

// 3.轮播
Vue.use(Swipe).use(SwipeItem)

// 3.懒加载
Vue.use(Lazyload)

// 4.宫格
Vue.use(Grid).use(GridItem)
