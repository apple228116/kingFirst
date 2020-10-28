<template>
  <div id='pageBox'>
    <div v-if="loginIf">
      <img :src="userInfo.avatarUrl" class='userinfo-avatar' alt="望着天">
      <p>hellow! {{userInfo.nickName}}</p>
      <button @tap="jumpList">开启小程序之旅！</button>
    </div>
    <button v-else open-type="getUserInfo" @getuserinfo="getUserInfo">获取用户信息</button>
    
    
  </div>
</template>

<script>
import card from '@/components/card'
import {mapState} from 'vuex'

export default {
  data(){
    return {
      userInfo: {},
      loginIf: ''
    }
  },
  created(){
    wx.getUserInfo({
      success: (sc) => {
        this.userInfo = sc.userInfo
        this.loginIf = true
      },
      fail: (fail) => {
        console.log('获取用户信息失败！')
      }
    })
  },
  computed:{
    ...mapState(['ji'])
  },
  methods:{
    getUserInfo(){
      wx.getUserInfo({
        success: (sc) => {
          this.userInfo = sc.userInfo
          this.loginIf = true
        },
        fail: (fail) => {
          console.log('获取用户信息失败！')
        }
      })
    },
    jumpList(){
      console.log('what the fuck?!?')
      wx.navigateTo({
        url: '/pages/list/main'
      })
    }
  }
}
</script>
  
<style>

page{
    background-color: #8ed145;
}
#pageBox{
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
}

.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar{
  width: 250rpx;
  height: 250rpx;
  border-radius: 50%;
  margin: 150rpx 0;
  border: 20rpx solid #D9D919;
}

.userinfo-avatar:hover{
  border: 10rpx solid #f40;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}
.all{
  width:7.5rem;
  height:1rem;
  background-color:blue;
}
.all:after{
  display:block;
  content:'';
  clear:both;
}
.left{
  float:left;
  width:3rem;
  height:1rem;
  background-color:red;
}

.right{
  float:left;
  width:4.5rem;
  height:1rem;
  background-color:green;
}
</style>
