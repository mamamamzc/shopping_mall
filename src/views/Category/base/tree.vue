<template>
  <van-tree-select height :items="items" :main-active-index.sync="activeIndex">
    <template #content>
      <grid></grid>
    </template>
  </van-tree-select>
</template>

<script>
  import grid from './grid.vue'
  export default {
    data() {
      return {
        container: null,
        activeIndex: 0,
        items: []
      }
    },
    created() {
      this.$api.categoryData.category().then(({
        data
      }) => {
        data.filter((item) => {
          if (item.category_level === 2) {
            var cate = {}
            cate.text = item.category_name
            data.filter((subitem) => {
              if (subitem.category_level === 3 && subitem.parent_id === item.category_id) {
                // item为父目录，subitem为子目录
              }
            })
            console.log(item)
            this.items.push(cate)
          } else {}
        })
      })
    },
    components: {
      grid
    },
    mounted() {
      this.container = this.$refs.container
    }
  }
</script>

<style>
</style>
