<template>
  <div id="address">
    <van-contact-card :type="cardType" :name="currentContact.name" :tel="currentContact.tel" @click="editAddress" />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        chosenContactId: null
      }
    },
    methods: {
      editAddress() {
        console.log('点击修改')
      }
    },
    computed: {
      cardType() {
        return this.chosenContactId !== null ? 'edit' : 'add'
      },
      currentContact() {
        const id = this.chosenContactId
        return id !== null ? this.list.filter((item) => item.id === id)[0] : {}
      }
    }
  }
</script>

<style>
</style>
