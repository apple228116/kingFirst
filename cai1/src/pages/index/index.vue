<template>
  <div class="container">
      <button open-type="getUserInfo" @getuserinfo="getUserInfo">获取用户信息</button>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data() {
    return {
      
    }
  },
  created(){
    
  },
  methods(){
    getUserInfo:(e)=>{
      console.log(e)
    }
  }
  
}
</script>

<style scoped>

</style>
