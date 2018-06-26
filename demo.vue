<template>
  <div class="">
    <div ref="moreScroll" class="">
      <LoadMore
        :top-method="topMore ? loadTop : undefined"
        @top-status-change="handleTopChange"
        :bottom-method="loadBottom"
        @bottom-status-change="handleBottomChange"
        :bottom-all-loaded="allLoaded"
        ref="loadmore"
        :auto-fill="false">
      </LoadMore>
    </div>
  </div>
</template>

<script>
  import loadmore    from './loadmore'
  import LoadMore from './Loadmore'
  export default {
    name : "",
    mixins : [ loadmore],
    props : {},
    components : { LoadMore },
    data () {
      return {
        active : '1'
      }
    },
    computed : {},
    watch : {
    },
    methods : {
    },
    mounted () {
    },
    created () {
    },
    filters : {}
  }
</script>

<style scoped lang="less" type="text/less">

</style>
