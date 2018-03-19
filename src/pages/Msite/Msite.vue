<template>
<div>
  <header>
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
  <div class="swiper-container case">
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
    <div class="swiper-pagination case"></div>
  </div>
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
</div>


</template>
<script>
    export default {
      mounted(){
        const swiper = new Swiper('.case', {
          pagination: {
            el: '.case .swiper-pagination',
            loop:true,
            autoplay: {
              delay: 3000,
              stopOnLastSlide: false,
              disableOnInteraction: true,
            }
          }
        });
        const myswiper = new Swiper('.banner', {
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
        white-space: nowrap
        >.swiper-slide
          text-align center
        >.swiper-slide:eq(4)
          margin-right 15px


  .swiper-container.case
    width 100%
    height 160px
    .swiper-wrapper
      .swiper-slide
        width 100%
        height 100%
        img
          width 100%
          height 100%
  .homecontainer
    width 100%
    height 180px
    .columnnavdiv
      width 100%
      height 100%
      ul
        float left
</style>
