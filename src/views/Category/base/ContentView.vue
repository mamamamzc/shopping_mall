<!--二级分类 -->
<template>
  <div id="subCategory">
    <div id="emptyLi" v-show="isEmpty">
      <van-empty description="列表为空" />
    </div>
    <div id="list" v-show="!isEmpty">
      <van-grid square :column-num="3">
        <van-grid-item v-for="item in cateList" :key="item.category_id" icon="https://img.yzcdn.cn/vant/ipad.jpeg"
          :text="item.category_name" @click="clickCate(item.category_id, item.category_name)" />
      </van-grid>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        cateList: [],
        isEmpty: false
      }
    },
    props: ['parentID'],
    created() {
      this.$api.categoryData.category().then(({
        data
      }) => {
        data.filter((item) => {
          if (item.category_level === 3 && item.parent_id === this.parentID) {
            this.isEmpty = false
            this.cateList.push(item)
          } else {}
        })
      })
    },
    watch: {
      parentID() {
        this.cateList = []
        this.isEmpty = true
        this.$api.categoryData.category().then(({
          data
        }) => {
          data.filter((item) => {
            if (item.category_level === 3 && item.parent_id === this.parentID) {
              this.isEmpty = false
              this.cateList.push(item)
            } else {}
          })
        })
        console.log(this.cateList)
      }
    },
    methods: {
      clickCate: function(id, name) {
        this.$router.push({
          path: '/GoodsList',
          query: {
            fatherID: id,
            fatherName: name
          }
        })
      }
    }
  }
</script>

<style>

</style>
