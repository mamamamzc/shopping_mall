import Vue from 'vue'
import {
  Tabbar,
  TabbarItem,
  Icon,
  Lazyload,
  Swipe,
  SwipeItem,
  Grid,
  GridItem,
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton,
  NavBar,
  Toast,
  Divider,
  Search,
  Sticky,
  SwipeCell,
  Card,
  Button,
  Stepper,
  SubmitBar,
  Empty,
  Dialog
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

// 5.商品导航
Vue.use(GoodsAction).use(GoodsActionButton).use(GoodsActionIcon)

// 6.导航栏
Vue.use(NavBar)

// 7.轻提示
Vue.use(Toast)

// 8.分割线
Vue.use(Divider)

// 9.搜索
Vue.use(Search)

// 10.粘性布局
Vue.use(Sticky)

// 11.滑动单元格
Vue.use(SwipeCell)

// 12.卡片
Vue.use(Card)

// 13.按钮
Vue.use(Button)

// 14.步进器
Vue.use(Stepper)

// 15.提交订单栏
Vue.use(SubmitBar)

// 16.空状态
Vue.use(Empty)

// 17.弹出框
Vue.use(Dialog)
