<template>
    <div class="footer_guide border-1px">
      <span class="guide_item" :class="{on: isCurrent('/Msite')}" @click="goto('/Msite')">
        <span>
          <i class="iconfont icon-shouyedianpujishishangcheng"></i>
        </span>
        <span>首页</span>
      </span>
      <span class="guide_item" :class="{on: isCurrent('/Type/Types')}" @click="goto('/Type')">
        <span>
          <i class="iconfont icon-fenlei"></i>
        </span>
        <span>分类</span>
      </span>
      <span class="guide_item" :class="{on: isCurrent('/Cart')}" @click="goto('/Cart')">
        <span>
          <i class="iconfont icon-shopshoppingco"></i>
        </span>
        <span>购物车</span>
      </span>
      <span class="guide_item" :class="{on: isCurrent('/Myepet')}" @click="goto('/Myepet')">
        <span>
          <i class="iconfont icon-icon-test"></i>
        </span>
        <span>我的E宠</span>
      </span>
    </div>
</template>
<script>
    export default {
        methods:{
          goto(path){
              this.$router.replace(path)
          },
          isCurrent(path){
              return this.$route.path === path
          }
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .footer_guide  //footer
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 50px
    display flex
    .guide_item
      display flex
      flex 1                // 每个分成一等分
      flex-direction column //垂直排列
      align-items center    //字体居中
      margin 5px
      color #999999
      &.on
        color red
      span
        font-size 13px
        .iconfont
          font-size 25px
</style>
