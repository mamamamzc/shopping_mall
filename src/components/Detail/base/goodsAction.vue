<!--商品导航板块-->
<template>
  <div id="goodsAction">
    <van-goods-action :safe-area-inset-bottom=true>
      <van-goods-action-icon icon="chat-o" text="客服" @click="kefu" color="#07c160" />
      <van-goods-action-icon icon="cart-o" text="购物车" @click="gouwuche" />
      <van-goods-action-icon icon="star" text="已收藏" color="#ff5000" @click="shoucang" />
      <van-goods-action-button type="warning" text="加入购物车" @click="addToCart" />
      <van-goods-action-button type="danger" text="立即购买" @click="buy" />
    </van-goods-action>
  </div>
</template>

<script>
  export default {
    methods: {
      kefu() {
        console.log('点击客服')
      },
      gouwuche() {
        console.log('点击购物车')
        this.$router.push('/Cart')
      },
      shoucang() {
        console.log('点击收藏')
      },
      addToCart() {
        console.log('点击加入购物车')
      },
      buy() {
        console.log('点击购买')
      }
    }
  }
</script>

<style>
</style>
