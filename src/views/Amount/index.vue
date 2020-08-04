<template>
  <div id="amount" style="background-color: #f5f5f5;">
    <div style="height: 3rem;"></div>
    <nav-bar></nav-bar>
    <address-list></address-list>
    <div id="cartList" v-for="goods in shopCart" :key="goods.id" style="padding-top: 0.5rem;">
      <van-swipe-cell>
        <van-card :price="goods.price" desc="描述信息" :title="goods.name" style="background-color: #FFFFFF;" :thumb="goods.smallImage">
          <template #num>
            <van-stepper v-model="goods.num" min="1" />
          </template>
        </van-card>
      </van-swipe-cell>
    </div>

    <!-- 支付方式选择 -->
    <van-radio-group v-model="radio">
      <van-cell-group title="支付方式">
        <van-cell clickable @click="radio = '1'">
          <template slot="title">
            <img src="./img/wx.png" alt="" width="25px" height="25px" style=" vertical-align: middle;padding-right:5px">
            <span>微信支付</span>
          </template>
          <van-radio slot="right-icon" name="1" checked-color="#07c160" />
        </van-cell>
        <van-cell clickable @click="radio = '2'">
          <template slot="title">
            <img src="./img/zfb.png" alt="" width="25px" height="25px" style=" vertical-align: middle;padding-right:5px">
            <span>支付宝支付</span>
          </template>
          <van-radio slot="right-icon" name="2" checked-color="#07c160" />
        </van-cell>
        <van-cell clickable @click="radio = '3'">
          <template slot="title">
            <img src="./img/hb.png" alt="" width="25px" height="25px" style=" vertical-align: middle;padding-right:5px">
            <span>花呗支付</span>
          </template>
          <van-radio slot="right-icon" name="3" checked-color="#07c160" />
        </van-cell>
      </van-cell-group>
    </van-radio-group>

    <!-- 优惠券及积分满减 -->
    <van-cell-group style="margin-top: 0.6rem">
      <van-coupon-cell :coupons="coupons" :chosen-coupon="chosenCoupon" @click="showList = true" />

      <van-cell>
        <!-- 优惠券列表 -->
        <van-popup v-model="showList" position="bottom">
          <van-coupon-list :coupons="coupons" :chosen-coupon="chosenCoupon" @change="onChange" @exchange="onExchange" />
        </van-popup>
      </van-cell>
    </van-cell-group>

    <!-- 备注 -->
    <van-cell-group style="margin-top: 0.6rem">
      <van-field label="备注" v-model="beizhu" type="textarea" placeholder="填写" rows="1" autosize is-link />
    </van-cell-group>

    <!--密码输入-->
    <van-popup v-model="showPassWord" position="bottom" :style="{ height: '55%' }">
      <!-- 密码输入框 -->
      <van-password-input :value="password" info="默认支付密码:112233" :focused="showKey" @focus="showKey = true" />
      <!-- 数字键盘 -->
      <van-number-keyboard :show="showKey" theme="custom" close-button-text="确定" transition @input="onInput" @delete="onDelete"
        @blur="showKey = true" @close="onConfirm" safe-area-inset-bottom />
    </van-popup>

    <!-- 结算按钮 -->
    <van-submit-bar :price="total" button-text="确认订单" @submit="onPay" />
  </div>
</template>

<script>
  import navBar from './base/NavBar.vue'
  import addressList from './base/AddressList.vue'
  import {
    Toast
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
        }],

        radio: '1', // 支付方式
        showList: false, // 展示优惠列表

        coupons: [{
          available: 1,
          condition: '无使用门槛',
          reason: '',
          value: 150,
          name: '优惠券1',
          startAt: 1549104000,
          endAt: 1614592000,
          valueDesc: '1.5',
          unitDesc: '元'
        }, {
          available: 1,
          condition: '无使用门槛',
          reason: '',
          value: 200,
          name: '优惠券2',
          startAt: 1549104000,
          endAt: 1614592000,
          valueDesc: '2',
          unitDesc: '元'
        }, {
          available: 3,
          condition: '无使用门槛',
          reason: '',
          value: 2000,
          name: '优惠券3',
          startAt: 1549104000,
          endAt: 1614592000,
          valueDesc: '20',
          unitDesc: '元'
        }],
        chosenCoupon: -1,

        password: '',
        showKey: false,
        showPassWord: false,
        
        beizhu: ''
      }
    },
    components: {
      navBar,
      addressList
    },
    methods: {
      //确认支付
      onPay() {
        this.showPassWord = !this.showPassWord
        this.password = ""
      },

      // 密码确认
      onConfirm: function() {
        if (this.password === '112233') {
          this.showPassWord = !this.showPassWord
          Toast.success('支付成功')
          setTimeout(() => {
            this.$router.push('/finish')
          }, 1000)
        } else {
          this.showPassWord = !this.showPassWord
          Toast.fail('密码错误')
        }
      },

      // 选择优惠券
      onChange(index) {
        this.showList = false
        this.chosenCoupon = index
      },

      // 优惠券兑换
      onExchange(code) {
        console.log('兑换优惠券')
        var coupon = {
          available: 1,
          condition: '无使用门槛',
          reason: '',
          value: 1000,
          name: '优惠券new',
          startAt: 1549104000,
          endAt: 1614592000,
          valueDesc: '10',
          unitDesc: '元'
        }
        this.coupons.push(coupon)
      },

      // 键盘操作
      onInput(key) {
        this.password = (this.password + key).slice(0, 6)
      },
      onDelete() {
        this.password = this.password.slice(0, this.password.length - 1)
      }
    },
    computed: {
      total: function() {
        var t = 0
        this.shopCart.forEach(function(item) {
          t += item.price * item.num
        })
        t = t * 100
        if (this.chosenCoupon > -1) {
          t = t - this.coupons[this.chosenCoupon].value
        }
        return t
      }
    }
  }
</script>

<style>
  .goods-card {
    margin: 0;
    background-color: #FFFFFF;
  }
</style>
