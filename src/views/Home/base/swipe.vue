<template>
  <div class="swiper-wrapper">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in bannerImages" :key="index">
        <img v-lazy="image.carousel_url" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
  import {
    mapState,
    mapMutations
  } from 'vuex'
  export default {
    data() {
      return {
        // imageList: []
        // imageList: [
        //   'http://127.0.0.1:8020/static/img/banner/banner1.jpg',
        //   'http://127.0.0.1:8020/static/img/banner/banner2.jpg',
        //   'http://127.0.0.1:8020/static/img/banner/banner3.jpg',
        //   'http://127.0.0.1:8020/static/img/banner/banner4.jpg'
        // ]
      }
    },
    methods: {
      ...mapMutations(['SET_BANNER_IMAGES']),
      async getBannerImage() {
        this.$api.homeData.banner().then(({
          data
        }) => {
          console.log(data)
          //this.imageList = data
          //this.$store.commit('SET_BANNER_IMAGES')
          this.SET_BANNER_IMAGES(data)
        })
      }
    },
    computed: {
      ...mapState(['bannerImages'])
    },
    mounted() {
      this.getBannerImage()
    }
  }
</script>

<style>
  .swiper-wrapper img {
    width: 100%
  }
</style>
