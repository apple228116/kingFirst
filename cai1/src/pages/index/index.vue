<!--  -->
<template>
<div>
    <div>apple</div>
    <button open-type="getUserInfo" @getuserinfo="getUserData">获取用户信息</button>
    <p>{{name}}</p>
    <p>pear</p>
</div>
</template>

<script>
// import mapState from 'vuex'
export default {
 data() {
  return {
   name: 'aaa'
  }
 },
 methods(){
    getUserData:(e)=>{
        console.log(e)
    }
 },
 created() {
  wx.getUserInfo({
      success(e){
          console.log(e)
      }
  })
    //   this.name = this.$store.state.name
    this.name = this.$store.state.name
 },
 mounted() {
  console.log(this)
 }
}
</script>
<style scoped>
/* @import url(); 引入css类 */

</style>