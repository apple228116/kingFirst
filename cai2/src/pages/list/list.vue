<template>
  <div>
    <swiper indicator-dots autoplay :interval="3000" circular lazy-load>
      <swiper-item>
        <image src="/static/images/p01 (1).jpg" mode='widthFix'	 alt="" />
      </swiper-item>
      <swiper-item>
        <image src="/static/images/p01 (2).jpg" mode='widthFix'	 alt="" />
      </swiper-item>
      <swiper-item>
        <image src="/static/images/p01 (3).jpg" mode='widthFix'	 alt="" />
      </swiper-item>
      <swiper-item>
        <image src="/static/images/p01 (4).jpg" mode='widthFix'	 alt="" />
      </swiper-item>
      <swiper-item>
        <image src="/static/images/p01 (5).jpg" mode='widthFix'	 alt="" />
      </swiper-item>
    </swiper>
    <LItem />
  </div>
</template>

<script>
import LItem from './list-component1/listItem'

export default {
  data() {
    return {

    }
  },
  components: {
    LItem
  }
}
</script>

<style>
page{
  background-color:rgba(255,69,0,.1);
}
swiper{
  margin-bottom: 50rpx;
}
</style>
