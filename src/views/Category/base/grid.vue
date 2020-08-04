<template>
  <van-grid :column-num="3">
    <van-grid-item v-for="item in gridList" :key="item.id" :icon="item.img" :text="item.text" to="/Detail"/>
  </van-grid>
</template>

<script>
  export default {
    data() {
      return {
        gridList: [{
          id: 1,
          img: 'https://img.yzcdn.cn/vant/ipad.jpeg',
          text: 'IPhone'
        }, {
          id: 2,
          img: 'https://img.yzcdn.cn/vant/ipad.jpeg',
          text: '三星'
        }, {
          id: 3,
          img: 'https://img.yzcdn.cn/vant/ipad.jpeg',
          text: 'LG'
        }, {
          id: 4,
          img: 'https://img.yzcdn.cn/vant/ipad.jpeg',
          text: '华为'
        }]
      }
    }
  }
</script>

<style>
</style>
