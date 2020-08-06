<template>
  <div id="category">
    <!--头部-->
    <search></search>
    <!--内容-->
    <div class="listWrapper" v-if="!isShowLoading">
      <!--左边-->
      <div class="leftWrapper">
        <ul class="wrapper">
          <li class="categoryItem" v-for="(cate, index) in categoriesData" :class="{ selected: currentIndex === index }"
            @click="clickLeftLi(index,cate.category_id)" :key="cate.id" ref="menuList">
            <span class="textWrapper">{{ cate.category_name }}</span>
          </li>
        </ul>
      </div>

      <!--右边-->
      <div class="rightWrapper">
        <ContentView :parentID="categoryID"/>
      </div>

    </div>

    <!-- 骨架屏 -->
    <Skeleton v-if="isShowLoading" />
    <menubar></menubar>
  </div>
</template>

<script>
  import search from '../Search/base/Search.vue'
  import ContentView from './base/ContentView'
  import menubar from '../../components/MenuBar.vue'
  import BScroll from 'better-scroll'
  // 3. 引入接口
  // import {
  //   getCategoryData,
  //   getCategoryDetailData
  // } from './../../serve/api/index.js'
  // 6.引入骨架屏
  import Skeleton from './Skeleton'
  export default {
    data() {
      return {
        // 是否显示加载图标
        // isShowLoading: true,
        isShowLoading: true,
        // 一级类别列表数据
        categoriesData: [],
        //一级目录的ID
        categoryID: 17,
        // 一级列表item选中与否
        currentIndex: 0
        //     isShowLoadingGif: false
      }
    },
    created() {

    },
    mounted() {
      // 初始化数据
      this._initData()
    },
    components: {
      search,
      ContentView,
      menubar,
      Skeleton
    },
    // activated() {
    //   // 页面缓存了数据,所以会走这个方法
    //   this.$nextTick(() => {
    //     if (this.$route.params.currentIndex > -1) {
    //       this.clickLeftLi(this.$route.params.currentIndex + 1)
    //     }
    //   })
    // },
    methods: {
      //   // 1. 初始化操作(数据和界面)
      async _initData() {
        // 1.1 获取左边的数据
        this.$api.categoryData.category().then(({
          data
        }) => {
          data.filter((item) => {
            if (item.category_level === 2) {
              this.categoriesData.push(item)
              // console.log(item)
            } else {}
          })
        })

        // // 1.2 获取右边的数据
        // const rightRes = await getCategoryDetailData('/lk001')
        // if (rightRes.success) {
        //   this.categoriesDetailData = rightRes.data.cate
        // }
        // 1.3. 隐藏loading框
        this.isShowLoading = false

        // 1.4.初始化滚动视图
        this.$nextTick(() => {
          if (!this.leftScroll) {
            this.leftScroll = new BScroll('.leftWrapper', {
              probeType: 3,
              click: true,
              scrollY: true,
              tap: true,
              mouseWheel: true
            })
          } else {
            this.leftScroll.refresh()
          }
        })
      },
      // 2. 处理左边的点击
      async clickLeftLi(index, id) {
        console.log(id)
        this.categoryID = id
        // this.isShowLoadingGif = true
        // 2.1 改变索引
        this.currentIndex = index
        // 2.2 滚动到对应的位置
        setTimeout(() => {
          var menuLists = this.$refs.menuList
          var el = menuLists[index]
          // 2.3 滚动到对应元素上
          this.leftScroll.scrollToElement(el, 300)
        }, 900)

        //   // 2.4 获取右边的数据
        //   let param
        //   if (index >= 9) {
        //     param = `/lk0${index + 1}`
        //   } else {
        //     param = `/lk00${index + 1}`
        //   }
        //   const rightRes = await getCategoryDetailData(param)
        //   if (rightRes.success) {
        //     this.categoriesDetailData = rightRes.data.cate
        //   }
        //   this.isShowLoadingGif = false
      }
    }
  }
</script>

<style scoped>
  #category {
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
    overflow: hidden;
  }

  .listWrapper {
    display: flex;
    position: absolute;
    top: 3rem;
    bottom: 3rem;
    width: 100%;
    overflow: hidden;
  }

  .leftWrapper {
    background-color: #f4f4f4;
    width: 25%;
    flex: 0 0 5.3125rem;
  }
  .rightWrapper {
    background-color: #FFFFFF;
    width: 75%;
  }

  .categoryItem {
    padding: 0.75rem 0;
    border-bottom: solid 0.01rem #e8e9e8;
    position: relative;
  }

  .categoryItem .textWrapper {
    line-height: 1.25rem;
    border-left: solid 0.1875rem transparent;
    padding: 0.3125rem 0.6875rem;
    font-size: 0.8125rem;
    color: #666666;
  }

  .categoryItem.selected {
    background: #fff;
  }

  .categoryItem.selected .textWrapper {
    border-left-color: #3cb963;
    font-weight: bold;
    font-size: 0.875rem;
    color: #333333;
  }

  @media (min-width: 960px) {
    .wrapper {
      border-right: 0.01rem solid #e8e9e8;
    }

    .wrapper .categoryItem {
      background: #fff;
    }
  }
</style>
