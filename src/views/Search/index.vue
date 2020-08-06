<template>
  <div>
    <van-search show-action v-model="value" @focus="isInput = true" @blur="isInput = false" @cancel="onCancel"
      placeholder="请输入搜索关键词">
    </van-search>
    <div id="result" v-show="!isInput">
      <van-empty image="search" description="暂无该商品" />
    </div>
    <div id="inp" v-show="isInput">
      正在搜索：{{value}}
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: '',
        isInput: false
      }
    },
    created() {
      this.getParams()
    },
    components: {},
    methods: {
      getParams: function() {
        var a = this.$route.query.value
        this.value = a
      },
      onCancel: function() {
        this.$router.go(-1)
      }
    }
  }
</script>

<style>
</style>
