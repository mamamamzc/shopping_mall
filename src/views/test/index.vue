<template>
  <div class="r_list" ref="r_list">
    <div ref="b">
      <van-cell value="内容" class="productCategoryTitle"/>
      <ul>
        <li v-for="(item,index) in products" :key="index" @click="goToGoodsDetail">
          <van-card price="2.00" desc="描述信息" title="商品标题" thumb="https://img.yzcdn.cn/vant/ipad.jpeg" origin-price="10.00"
            style="background-color: #ffffff;">
            <template #num>
              <van-icon name="cart" size="1.5rem" @click="addToCart" color="#ffaa00" />
            </template>
          </van-card>
          <van-divider :style="{ color: '#f7ff00', padding: '0 16px' }" />
        </li>
      </ul>
      <div class="bottomTip">加载完毕</div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        pic: 'https://img.yzcdn.cn/vant/ipad.jpeg',
        products: '{hhhhhhhh}'
      }
    },
    created() {},
    mounted() {},
    components: {},
    methods: {
      goToGoodsDetail: function() {
        console.log("gotodetial")
      },
      addToCart: function() {
        console.log('addtocart')
      }
    }
  }
</script>

<style lang="less" scoped>
  .r_list {
    overflow: hidden;
    // 防止抖动
    -webkit-transform: translateZ(0);
    transform: translateZ(0);

    .productCategoryTitle {
      border-left: 3px solid #d9dde1;
      color: rgb(147, 153, 159);
      background-color: #f3f5f7;
    }

    .bottomTip {
      padding-top: 0.4rem;
      color: grey;
      font-size: 0.8rem;
      text-align: center;
    }
  }
</style>
