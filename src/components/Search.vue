<template>
  <div id="search">
    <van-search v-model="value" placeholder="请输入商品名" />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: ''
      }
    }
  }
</script>

<style>
</style>
