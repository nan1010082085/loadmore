export default {
  data () {
    return {
      allLoaded : true,
      topMore : false,
      bottomStatus : '',
      topStatus : ''
    }
  },
  methods : {
    loadTop () {
      if ( this.topMore ) {
        console.log('下拉刷新中。。')
        setTimeout(_=>{
          this.topMore = false
          this.$refs.loadmore.onTopLoaded();
        },2000)
      }
    },
    handleTopChange ( status ) {
      this.topStatus = status;
    },
    loadBottom () {
      console.log('上拉加载中。。')
      setTimeout(_=>{
        this.allLoaded = true
        this.$refs.loadmore.onBottomLoaded();
      },2000)
    },
    handleBottomChange ( status ) {
      this.bottomStatus = status;
    },
    scrollLoading ( event ) {
      let scrollTop = event.target.scrollTop;
      let downBottom = event.target.scrollHeight - event.target.offsetHeight;
      if ( scrollTop <= 0 ) {
        console.log('滚动到顶部')
        this.topMore = true;
      }else {
        this.topMore = false;
      }
      if ( downBottom === event.target.scrollTop ) {
        console.log('滚动到底部')
        this.topMore = false;
        this.allLoaded = false;
      }else {
        this.allLoaded = true;
      }
    }
  },
  mounted () {
    this.$nextTick(_ => {
      this.$refs.moreScroll.addEventListener('scroll', this.scrollLoading)
    })
  }
}
