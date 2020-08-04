<template>
  <div id="category">
    <search></search>
    hhhh
    <van-button type="info" @click="info">信息按钮</van-button>
    <menubar></menubar>
  </div>
</template>

<script>
  import menubar from '../../components/MenuBar.vue'
  import search from '../../components/Search.vue'
  export default {
    components: {
      menubar,
      search
    },
    methods: {
      info() {
        this.$api.categoryData.categories().then(({
          data
        }) => {
          console.log(data)
        })
      }
    }
  }
</script>

<style>
</style>
