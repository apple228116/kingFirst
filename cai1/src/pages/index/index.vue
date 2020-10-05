<template>
  <div class="container">
      <h1>{{stater[0]?stater[0]:'ji'}}</h1>
      <h1>{{a?stater[0]:'ji'}}</h1>
      <h1>{{a}}</h1>
      <h1>a</h1>
      <h1>{{caiji}}</h1>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  
  computed:{
    ...mapState(['stater'])
  },
  data() {
    return {
      
    }
  },
  created(){
    this.$store.commit('ji',' self')
    let x = mapState({
      name:state=>state.name,
      stater:state=>state.stater,
      apple: 'apple'
    })
    console.log(x)
  }
  
}
</script>

<style scoped>

</style>
