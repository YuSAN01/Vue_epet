<template>
    <div>
      <a href="javascript:" @click="goto('/Msite')">
        <i class="iconfont icon-shouyedianpujishishangcheng"></i>
        首页
      </a>
      <a href="javascript:" @click="goto('/Type')">
        <i class="iconfont icon-fenlei"></i>
        分类</a>
      <a href="javascript:" @click="goto('/Cart')">
        <i class="iconfont icon-shopshoppingco"></i>
        购物车</a>
      <a href="javascript:" @click="goto('/Myepet')">
        <i class="iconfont icon-icon-test"></i>
        我的E宠</a>
    </div>
</template>
<script>
    export default {
        methods:{
          goto(path){
              this.$router.replace(path)
          }
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">

</style>
