<template>
  <div id="app">
    <van-tabbar v-model="active">
      <van-tabbar-item replace to="/Home" icon="wap-home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/Category" icon="apps-o">分类</van-tabbar-item>
      <van-tabbar-item replace to="/Cart" icon="shopping-cart-o">购物车</van-tabbar-item>
      <van-tabbar-item replace to="/Mine" icon="manager-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        active: 0
      }
    }
  }
</script>

<style>

</style>
