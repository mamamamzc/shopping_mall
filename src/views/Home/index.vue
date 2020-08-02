<template>
  <div id="home">
    <swipe></swipe>
    <grid></grid>
    这是首页
    <menubar></menubar>
  </div>
</template>

<script>
  import menubar from '../../components/MenuBar.vue'
  import swipe from './base/swipe.vue'
  import grid from './base/Grid.vue'
  export default {
    data() {
      return {}
    },
    components: {
      menubar,
      swipe,
      grid
    }
  }
</script>

<style>
</style>
