<template>
  <div id="category">
    <search></search>
    <tree></tree>
    <menubar></menubar>
  </div>
</template>

<script>
  import menubar from '../../components/MenuBar.vue'
  import search from '../../components/Search.vue'
  import tree from './base/tree.vue'
  export default {
    components: {
      menubar,
      search,
      tree
    }
  }
</script>

<style>
</style>
