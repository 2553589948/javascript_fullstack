<template>
  <div class="reader-wrapper">
    <div class="reader-content">
      <div class="readerBookInfo">
        <div class="bookInfo-content">
          <div class="bookInfo-cover">
            <img :src="'http://statics.zhuishushenqi.com' + bookInfo.cover" alt="">
          </div>
          <div class="bookInfo-right">
            <h2 class="title">{{bookInfo.title}}</h2>
            <div class="author">{{bookInfo.author}}</div>
            <div class="category">{{bookInfo.majorCate}}</div>
            <div class="intro hasMore">{{bookInfo.longIntro}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from '@/api'
export default {
  data () {
    return {
      bookInfo: []
    }
  },
  methods: {
    // 根据小说Id获取小说详情
    _getBookInfo() {
      let bookId = this.$route.query.bookId
      let params = {
      }
      api.getBookInfo(params, bookId)
      .then((res) => {
        console.log(res)
        this.bookInfo = res
      })
    }
  },
  mounted () {
    this._getBookInfo()
  }
}
</script>

<style lang="stylus" scoped>
.reader-wrapper
  height 100%
  .reader-content
    max-width 1120px
    min-height 100%
    margin-left auto
    margin-right auto
    .readerBookInfo
      margin 0 24px 24px
      padding-bottom 28px
      .bookInfo-content
        position relative
        display flex
        padding-top 30px
        padding-bottom 80px
        .bookInfo-cover
          display block
          width 108px
          height 155px
          box-shadow 0 2px 16px rgba(0,0,0,.08)
          position relative
          img
            vertical-align top
            width 100%
            height 100%
            object-fit cover
        .bookInfo-right
          flex auto
          margin-left 20px
          .title
            margin-top 4px
            color #eef0f4
            font-family "SourceHanSerifCN-Bold",PingFang SC,-apple-system,SF UI Text,Lucida Grande,STheiti,Microsoft YaHei,sans-serif
            font-size 20px
            font-weight 400
          .author
            margin-top 9px
            color #0097ff
            font-size 15px
            font-family "SourceHanSerifCN-Bold",PingFang SC,-apple-system,SF UI Text,Lucida Grande,STheiti,Microsoft YaHei,sans-serif
          .category
            margin-top 10px
            color #e34737
          .intro
            margin-top 10px
            font-size 13px
            height 46px
            line-height 23px
            position relative
            cursor pointer
            text-align justify
            color #8a8c90
            overflow hidden
            display -webkit-box
            text-overflow ellipsis
            -webkit-line-clamp 2
            line-clamp 2
            -webkit-box-orient vertical
</style>