<template>
  <div class="pay-success">
    <!-- 顶部导航 -->
    <van-nav-bar title="支付成功" />
    <div style="height: 3rem;"></div>
    <!-- 成功图标 -->
    <div class="success-icon">
      <van-icon name="checked" size="80px" color="#fa436a" />
      <span>支付成功</span>
    </div>
    <!-- 成功按钮，查看订单 -->
    <div class="success-btn">
      <van-button type="danger" class="border-r" @click="CheckOrder" block color="#fa436a">查看订单</van-button>
      <van-button class="mt-10" plain hairline block color="#303133" @click="goHome" type="primary">返回首页</van-button>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      //返回首页
      goHome() {
        this.$router.push("/Home")
      },
      // 查看订单
      CheckOrder() {
        console.log('查看订单')
      }
    }
  }
</script>

<style lang="less" scoped>
  .pay-success {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: #fff;

    .van-icon-arrow-left {
      color: #000;
    }

    // 成功图标
    .success-icon {
      text-align: center;
      margin-top: 50px;

      span {
        display: block;
        color: #303133;
        font-size: 19px;
        margin-top: 5px;
      }
    }

    //查看订单
    .success-btn {
      margin-top: 50px;
      padding: 20px 40px;

      .mt-10 {
        margin-top: 10px;
      }

      .border-r {
        border-radius: 5px;
      }
    }
  }
</style>
