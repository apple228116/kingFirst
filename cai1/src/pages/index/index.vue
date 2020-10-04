<template>
  <div class="container">
      <h1>{{name|'caiji'}}</h1>
      <h1>{{a|'caiji'}}</h1>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  
  computed:mapState({
      a: 'a'
  }),
  data() {
    return {

    }
  }
  
}
</script>

<style scoped>

</style>
