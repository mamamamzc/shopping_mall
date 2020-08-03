<!--商品详情页面-->
<template>
  <!--商品信息-->
  <div id="goodsDetail">
    <NavBar></NavBar>
    <div class="goodsDetailWrapper">
      <!-- 商品图 -->
      <div class="goodsImage">
        <img :src="goodsPic" alt="">
      </div>
      <!-- 限时抢购  -->
      <!-- 可选  -->
      <!-- 商品名称 -->
      <div class="productInfo">
        <div class="title">商品名字</div>
        <div class="subTitle">小标题</div>
        <span class="originPrice">￥现在价格</span>
        <span class="price">原价</span>
        <span class="totalSales">已售:已售量</span>
        <van-divider />
        <div class="shippingInfo">
          <van-icon name="cluster-o" />注意事项</div>
        <van-divider />
        <div class="shippingInfo">
          <van-icon name="clock-o" />送达时间</div>
      </div>
      <!-- 规格 -->
      <div class="specifications">
        <div class="specificationsTitle">规格</div>
        <van-divider dashed />
        <div class="conditions">
          <span>规格1</span>
          <span class="conditionsOne">内容1</span>
        </div>
        <van-divider dashed />
        <div class="conditions">
          <span>规格2</span>
          <span class="conditionsTwo">内容2</span>
        </div>
        <van-divider dashed />
      </div>
      <!-- <div class="showGoods">
          <img :src="goodsInfo.small_image" alt="">
          <img :src="goodsImage" alt="">
        </div> -->
      <GoodsAction></GoodsAction>
    </div>
  </div>
</template>

<script>
  import GoodsAction from './base/goodsAction.vue'
  import NavBar from './base/NavBar.vue'
  export default {
    data() {
      return {
        goodsPic: 'https://img.yzcdn.cn/vant/ipad.jpeg'
      }
    },
    components: {
      GoodsAction,
      NavBar
    }
  }
</script>

<style lang="less" scoped>
  #goodsDetail {
    background-color: #f5f5f5;

    .goodsDetailWrapper {
      overflow: hidden;
      margin-top: 2.7rem;

      .goodsImage {
        width: 100%;

        img {
          width: 100%;
          height: 80%;
        }
      }

      .flash {
        display: flex;
        flex: 1;
        width: 100%;
        height: 2rem;
        line-height: 2rem;

        .flashLeft {
          width: 55%;
          background-color: #e25450;

          span {
            font-size: 0.8rem;
            color: #ffffff;
            padding-left: 1rem;
          }

          i {
            padding-left: 0.6rem;
            font-size: 0.5rem;
            color: #ffffff;
          }
        }

        .flashRight {
          width: 45%;
          background-color: #fcefe9;
          height: 2rem;
          line-height: 2rem;
          padding-left: 0.5rem;
          font-size: 0.5rem;
          color: #e25450;

          .countStyle {
            display: inline;
            margin-left: 0.3rem;

            .item {
              display: inline-block;
              width: 22px;
              margin-right: 5px;
              color: #fff;
              font-size: 12px;
              text-align: center;
              background-color: #e25450;
            }

            i {
              color: #e25450;
              padding-right: 0.2rem;
            }
          }
        }
      }

      .productInfo {
        background-color: white;
        padding: 0.5rem;

        .title {
          color: black;
          font-size: 0.8rem;
        }

        .subTitle {
          padding: 0.5rem 0;
          color: grey;
          font-size: 0.6rem;
        }

        .originPrice {
          color: #e25450;
          padding-right: 0.5rem;
          font-size: 0.8rem;
        }

        .price {
          color: grey;
          font-size: 0.5rem;
          text-decoration: line-through;
        }

        .totalSales {
          float: right;
          color: #e25450;
          font-size: 0.8rem;
        }

        .shippingInfo {
          font-size: 0.6rem;
          height: 0.8rem;
          color: grey;
        }
      }

      .specifications {
        width: 100%;
        background-color: white;
        margin-top: 1rem;
        padding-left: 0.5rem;

        .specificationsTitle {
          padding-top: 1rem;
          font-size: 1rem;
          color: black;
        }

        .conditions {
          font-size: 0.6rem;
          height: 1rem;
          color: grey;

          .conditionsOne {
            padding-left: 2rem;
          }

          .conditionsTwo {
            padding-left: 2.5rem;
          }
        }
      }

      .showGoods {
        width: 100%;

        img {
          width: 100%;
        }
      }
    }
  }
</style>
