<!--上部导航栏-->
<template>
  <div id="navBar">
    <van-nav-bar title="填写订单" left-text="返回" left-arrow @click-left="onClickLeft" :fixed=true />
  </div>
</template>

<script>
  export default {
    methods: {
      onClickLeft() {
        this.$router.go(-1)
      }
    }
  }
</script>

<style>
</style>
