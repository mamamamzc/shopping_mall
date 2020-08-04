<!--上部导航栏-->
<template>
  <div id="navBar">
    <van-nav-bar title="商品详情" left-text="返回" left-arrow @click-left="onClickLeft" :fixed=true />
  </div>
</template>

<script>
  export default {
    methods: {
      onClickLeft() {
        this.$router.go(-1)
        // this.$router.push('/Home')
        // 测试,先返回到首页
        console.log('点击返回')
      }
    }
  }
</script>

<style>
</style>
