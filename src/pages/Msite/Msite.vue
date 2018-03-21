<template>
<div>
  <!--头部-->
  <header>
    <!--头部上半部分-->
    <div class="headerbox">
      <div class="headermain">
        <div class="headerup">
          <div class="nekobashou">
            <span>ねこ</span>
            <span>|</span>
            <span>重庆</span>
            <span></span>
          </div>
          <div class="headerseach">
            <input type="text" placeholder="搜索商品和品牌">
            <i class="iconfont icon-sousuo"></i>
          </div>
          <div>
            <i class="iconfont icon-msnui-sms-bubble"></i>
          </div>
        </div>
      </div>
    </div>
    <!--头部下半部分-->
    <div class="headerbox2">
      <div class="swiper-container banner">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <p>首页</p>
          </div>
          <div class="swiper-slide">
            <p>猫猫主粮</p>
          </div>
          <div class="swiper-slide">
            <p>罐头超市</p>
          </div>
          <div class="swiper-slide maosha">
            <p>猫砂</p>
          </div>
          <div class="swiper-slide">
            <p>医疗保健</p>
          </div>
          <div class="swiper-slide">
            <p>美容香波</p>
          </div>
          <div class="swiper-slide">
            <p>零食玩具</p>
          </div>
        </div>
      </div>
    </div>
  </header>
<!--轮播内容-->
  <div class="swiper-container case" id="cases">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img src="./images/9f49bbf054e4dcab567e1584f48db3f0.jpg" alt="">
      </div>
      <div class="swiper-slide">
        <img src="./images/94d4681e2ab878c340d441a5c1c7b98a.jpg" alt="">
      </div>
      <div class="swiper-slide">
        <img src="./images/b898562338c7f04ac9b2fa3e5aec8b4c.jpg" alt="">
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
  <!--分类导航-->
  <div class="homecontainer">
    <div class="columnnavdiv">
      <ul>
        <li><img src="./images/echongtuan.jpg" alt=""></li>
        <li><img src="./images/echongtuan.jpg" alt=""></li>
        <li><img src="./images/echongtuan.jpg" alt=""></li>
        <li><img src="./images/echongtuan.jpg" alt=""></li>
        <li><img src="./images/echongtuan.jpg" alt=""></li>
        <li><img src="./images/echongtuan.jpg" alt=""></li>
        <li><img src="./images/echongtuan.jpg" alt=""></li>
        <li><img src="./images/echongtuan.jpg" alt=""></li>
        <li><img src="./images/echongtuan.jpg" alt=""></li>
        <li><img src="./images/echongtuan.jpg" alt=""></li>
      </ul>
    </div>
  </div>
  <!--新人专享-->
  <div class="noobexclusive">
    <img src="./images/xinrenzhuanxiang.gif" alt="">
  </div>
  <!--每日疯抢-->
  <div class="surpriseday">
    <!--每日疯抢：时间日期-->
    <div class="surprise">
      <div class="meirifengqiangimg">
        <img src="./images/meirifengqiang.png" alt="">
      </div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <!--每日疯抢：商品列表-->
    <div class="surpriseList"></div>
  </div>

</div>


</template>
<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
    export default {
      mounted(){

        let swiper = new Swiper('#cases', {
          centeredSlides: true,
          loop:true,
          autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          }

        });




        const myswiper = new Swiper('.headerbox2 .banner', {
          slidesPerView: 5,
          spaceBetween: 30,
        });
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .headerbox
    height 86px
    .headermain
      box-sizing border-box
      height 51px
      padding 5px 10px
      .headerup
        display flex
        justify-content space-around
        box-sizing border-box
        height 41px
        padding 8px 0
        white-space nowrap
        .nekobashou
        .headerseach
          .iconfont
            margin-left: -22px;

  .headerbox2
    position: relative;
    top: -20px;
    font-size 14px
    margin-bottom: -11px;
    >.swiper-container
      >.swiper-wrapper
        white-space: nowrap   //文本永不换行
        >.swiper-slide
          text-align center    //文字居中
        >.swiper-slide:eq(4)
          margin-right 15px


  .swiper-container.case
    width 100%

    .swiper-wrapper
      .swiper-slide
        width 100%

        img
          width 100%

  .homecontainer
    width 100%
    height 180px
    .columnnavdiv
      width 100%
      height 100%
      ul
        display flex
        flex-wrap wrap   //溢出换行
        //>li
          //&:nth-child(3)   //选择器 选择匹配父元素下的子元素
        li>img
          width 74px
          height 90px
  .noobexclusive
    width 100%
    img
      width 100%
  .surpriseday
    width 100%
    height 170px
    .surprise
      box-sizing border-box
      width 100%
      height 40px
      padding  10px
      /*background-color: green*/
      .meirifengqiangimg
        float left
        width 85px
        height 20px
        img
          width 100%
          height 100%
</style>
