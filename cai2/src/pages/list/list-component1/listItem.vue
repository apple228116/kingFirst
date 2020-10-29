<template>
  <div class='LItem'>
      <header>
        <img src="/static/images/avatar/0.png" alt="">
        蔡徐坤
      </header>
      <image src="/static/images/detail/carousel/01.jpg" />
      <p>
        1）给阿姨倒一杯卡布奇诺

        2）17张牌你能秒我 你能秒杀我，你今天能十七张牌把卢本伟秒了，我当场就把这个电脑屏幕吃掉。

        3）单走一个六，傻逼

        4）卢本伟牛逼
      </p>
      <div class='end'>
        <img src="/static/images/icon/chat.png" alt="" /><span>88</span>
        <img src="/static/images/icon/view.png" alt="" /><span>66</span>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  components: {
      
  }
}
</script>

<style scoped>
.LItem{
  border-top: 6rpx solid green;
  border-bottom: 6rpx solid yellow;
  margin-bottom: 50rpx;
}
header{
  height: 100rpx;
  display: flex;
  line-height: 100rpx;
}
header img{
  width: 100rpx;
  height: 100rpx;
  margin-right: 50rpx;
}
p{
  text-indent: 40rpx;
  letter-spacing: 10rpx;
}
.end img{
  width: 40rpx;
  height: 40rpx;
}
.end span{
  font-size: 40rpx;
  line-height: 40rpx;
  height: 40rpx;
  margin: 0 30rpx;
}
</style>
