<template>
  <div id="cart">
    <div style="height: 3rem;"></div>
    <div id="nav">
      <van-sticky>
        <van-nav-bar title="购物车" :fixed=true>
          <template #right>
            <van-icon name="delete" size="18" @click="clearOrder" />
          </template>
        </van-nav-bar>
      </van-sticky>
    </div>

    <!-- 购物车 -->
    <div id="emptyCart">
      <!-- 购物车为空 -->
      <div id="emptyCart" v-show="!isShowEmptyCart">
        <van-empty description="购物车为空" />
      </div>
      <!-- 购物车有数据 -->
      <div id="notEmptyCart" v-show="isShowEmptyCart">
        <div id="cartList" v-for="goods in shopCart" :key="goods.id" style="padding-top: 0.5rem;">
          <van-swipe-cell>
            <van-card :price="goods.price" desc="描述信息" :title="goods.name" class="goods-card" :thumb="goods.smallImage">
              <template #num>
                <van-stepper v-model="goods.num" min="0" />
              </template>
            </van-card>
            <template #right>
              <van-button square text="删除" type="danger" class="delete-button" @click="delCart(goods.id)" />
            </template>
          </van-swipe-cell>
        </div>
      </div>
      <div style="height: 3rem;"></div>
      <div id="submitBar" >
        <van-submit-bar :price="total" button-text="提交订单" @submit="onSubmit" style="bottom: 3rem;" />
      </div>
    </div>
    <menubar></menubar>
  </div>
</template>

<script>
  import menubar from '../../components/MenuBar.vue'
  import {
    Dialog
  } from 'vant'
  export default {
    data() {
      return {
        shopCart: [{
          id: 1,
          smallImage: 'https://img.yzcdn.cn/vant/ipad.jpeg',
          name: '手机',
          price: '50',
          num: 1
        }, {
          id: 2,
          smallImage: 'https://img.yzcdn.cn/vant/ipad.jpeg',
          name: '衣服',
          price: '60',
          num: 2
        }]
      }
    },
    components: {
      menubar
    },
    methods: {
      onSubmit() {
        this.$router.push('/Amount')
      },
      delCart: function(id) {
        console.log(id)
        var index = this.shopCart.findIndex(item => {
          return item.id === id
        })
        this.shopCart.splice(index, 1)
      },
      clearOrder() {
        if (this.shopCart.length > 0) {
          Dialog.confirm({
            title: '提示',
            message: '确认清空购物车吗?'
          }).then(() => {
            // on confirm 确认删除
            console.log('清空购物车')
          }).catch(() => {
            // on cancel
          })
        }
      }
    },
    computed: {
      total: function() {
        var t = 0
        this.shopCart.forEach(function(item) {
          t += item.price * item.num
        })
        return t * 100
      },
      isShowEmptyCart: function() {
        if (this.shopCart.length === 0) {
          return false
        } else {
          return true
        }
      }
    }
  }
</script>

<style>
  .goods-card {
    margin: 0;
    background-color: @white;
  }

  .delete-button {
    height: 100%;
  }
</style>
