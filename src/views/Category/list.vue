<template>
  <div>
    <nav-bar :cate="categoryName"></nav-bar>
    <div style="height: 3rem;"></div>
    <van-button @click="getinfo"></van-button><br />
    商品列表<br />
    种类id为：{{categoryID}}
  </div>
</template>

<script>
  import navBar from './base/NavBar.vue'
  export default {
    data() {
      return {
        categoryID: 0,
        categoryName: ''
      }
    },
    created() {
      this.getParams()
    },
    methods: {
      getParams: function() {
        var a = this.$route.query.fatherID
        var b = this.$route.query.fatherName
        this.categoryID = a
        this.categoryName = b
      },
      getinfo: function() {
        this.$api.detailData.detail().then(({
          data
        }) => {
          data.filter((item) => {
            if (item.goods_category_id === this.categoryID) {
              console.log(item)
            } else {}
          })
        })
      }
    },
    components: {
      navBar
    }
  }
</script>

<style>
</style>
