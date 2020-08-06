<template>
  <div id="search">
    <van-search v-model="search" show-action placeholder="请输入搜索关键词">
      <template #action>
        <div @click="go">搜索</div>
      </template>
    </van-search>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        search: ''
      }
    },
    methods: {
      go() {
        this.$router.push({
          path: '/Search',
          query: {
            value: this.search
          }
        })
      }
    }
  }
</script>

<style>
</style>
