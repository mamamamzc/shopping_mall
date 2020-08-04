<template>
  <van-button type="info" @click="info">信息按钮</van-button>
</template>

<script>
  export default {
    methods: {
      info() {
        this.$api.categoryData.category().then(({
          data
        }) => {
          data.filter((item) => {
            if (item.category_level === 2) {
              console.log("父类：", item.category_name)
              data.filter((subitem) => {
                if (subitem.category_level === 3 && subitem.parent_id === item.category_id) {
                  console.log("子类：", subitem.category_name)
                }
              })
            }
          })
        })
      }
    }
  }
</script>

<style>
</style>
