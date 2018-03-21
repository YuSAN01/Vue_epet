<template>
  <div>
    <div class="header">
      <div class="headerLeft">
        <span class="ft14 on" @click="goto('/type/types')">分类</span>
      </div>
      <div class="headerRight">
        <span class="ft14" @click="goto('/type/brands')">品牌</span>
        <i class="iconfont icon-sousuo"></i>
      </div>
    </div>
    <router-view/>
  </div>
</template>
<script>
  export default {
    methods: {
      goto(path){
        this.$router.replace(path)
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .ft14
    display inline-block
    font-weight 700
    font-size 14px
    &.on
      color #ed4044
      border-bottom 2px solid #ed4044
  .header
    position fixed
    box-sizing border-box
    padding 0 15px
    height 43px
    left: 0
    right: 0
    top: 0
    z-index: 11
    border-bottom: 1px solid #cbcbcb
    .headerLeft
      text-align: right;
      float left
      width 45%
      line-height 40px
      padding-right 5%
      /*border-bottom: 2px solid*/
    .headerRight
      text-align: left
      float right
      width 45%
      line-height 40px
      padding-left 5%
      .icon-sousuo
        float right
        font-size 13px
</style>
