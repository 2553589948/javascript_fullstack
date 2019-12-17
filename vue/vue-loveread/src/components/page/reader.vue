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
            <div class="intro hasMore" @click="showMore">{{bookInfo.longIntro}}</div>
            <div class="more-detail">
              <div class="rating">
                <div class="rating-score">
                  <span class="number">{{rating.score}}</span>
                </div>
                <div class="rating-count">
                  {{rating.count}}
                  人点评
                </div>
              </div>
              <div class="reading">
                <div class="reading-count">
                  <span class="number">{{bookInfo.totalFollower}}</span>
                  人
                </div>
                <div class="text">阅读此书</div>
              </div>
            </div>
          </div>
        </div>
        <div class="dialog">
          <div class="dialog-mask" v-show="showContent" @click="hideMask"></div>
          <div class="dialog-container" v-show="showContent">
            <div class="close-btn" @click="hideMore">
              <img src="../../assets/images/dialog_close.png" alt="">
            </div>
            <div class="dialog-content">
              <h3 class="title">简介</h3>
              <div>
                <p class="text-info">{{bookInfo.longIntro}}</p>
              </div>
              <h3 class="title">版权信息</h3>
              <div class="pub">
                <span class="pub-title">版权</span>
                <span>{{bookInfo.copyright}}</span>
              </div>
              <div class="pub">
                <span class="pub-title">最新更新时间</span>
                <span>{{updateTime}}</span>
              </div>
              <div class="pub">
                <span class="pub-title">字数</span>
                <span>{{wordCount}}</span>
              </div>
              <div class="pub">
                <span class="pub-title">分类</span>
                <span>{{bookInfo.majorCate}}-{{bookInfo.minorCate}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="readerChapter"></div>
    </div>
  </div>
</template>

<script>
import api from '@/api'
export default {
  data () {
    return {
      bookInfo: [],
      rating: [],
      updateTime: '',
      wordCount: '',
      showContent: false
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
        this.rating = res.rating
        this.updateTime = res.updated.substr(0, 10)
        this.wordCount = res.wordCount.toString()
        .replace(/\B(?=(?:\d{3})+\b)/g, ',')
      })
    },

    // 蒙层的显示与隐藏
    showMore() {
      this.showContent = true
    },
    hideMore() {
      this.showContent = false
    },
    hideMask() {
      this.showContent = false
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
      position relative
      &::after
        content ""
        position absolute
        top 0
        left 0
        width 200%
        height 200%
        border-radius 0
        border solid hsla(0,0%,100%,.05)
        border-width 0 0 1px
        transform scale(.5)
        transform-origin 0 0
        pointer-events none
      .bookInfo-content
        position relative
        display flex
        padding-top 30px
        padding-bottom 80px
        .bookInfo-cover
          display block
          // width 108px
          height 155px
          box-shadow 0 2px 16px rgba(0,0,0,.08)
          position relative
          img
            vertical-align top
            // width 100%
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
            font-weight 700
            line-height 1.5
          .author
            margin-top 10px
            color #0097ff
            font-size 15px
            font-family "SourceHanSerifCN-Bold",PingFang SC,-apple-system,SF UI Text,Lucida Grande,STheiti,Microsoft YaHei,sans-serif
          .category
            margin-top 15px
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
          .intro.hasMore:after
            content "更多"
            position absolute
            bottom 0
            right 0
            color #8a8c90
            font-size 13px
            padding-left 40px
            background linear-gradient(90deg,rgba(31,32,34,0),#1f2022 50%,#1f2022)
            transition background-image .2s ease-in-out
          .more-detail
            position absolute
            width 100%
            left 0
            bottom 0
            margin-top 20px
            display flex
            justify-content space-between
            align-items center
            .rating
              flex 1
              margin-right 10px
              &-score
                line-height 1
                color #b2b4b8
                font-size 12px
                .number
                  vertical-align -2px
                  font-size 26px
              &-count
                margin-top 8px
                font-size 12px
                word-break break-all
                color #8a8c90
                line-height 13px
                overflow hidden
                height 13px
                display -webkit-box
                text-overflow ellipsis
                -webkit-line-clamp 1
                line-clamp 1
                -webkit-box-orient vertical
            .reading
              flex 1
              width 40%
              &-count
                line-height 1
                color #b2b4b8
                font-size 12px
                .number
                  vertical-align -2px
                  font-size 26px
              .text
                margin-top 8px
                font-size 12px
                word-break break-all
                color #8a8c90
                line-height 13px
                overflow hidden
                height 13px
                display -webkit-box
                text-overflow ellipsis
                -webkit-line-clamp 1
                line-clamp 1
                -webkit-box-orient vertical
      .dialog
        position fixed  
        z-index 100
        .dialog-mask
          position fixed  
          z-index 102
          top 0
          bottom 0
          left 0
          right 0
          width 100%
          height 100%
          background rgba(0,0,0,.4)
        .dialog-container
          z-index 110
          width 80%
          max-width 500px
          max-height 80%
          overflow-y auto
          position fixed
          top 50%
          left 50%
          transform translate(-50%,-50%)
          border-radius 12px
          text-align center
          background-color #2f2f2f
          .close-btn
            position absolute
            right 16px
            top 16px
            width 20px
            height 20px
            overflow hidden
            img
              width 100%
              height 100%
          .dialog-content
            padding 40px 32px 32px
            text-align left
            color #b2b4b8
            font-size 14px
            line-height 1.5
            .title
              font-family "SourceHanSerifCN-Bold",PingFang SC,-apple-system,SF UI Text,Lucida Grande,STheiti,Microsoft YaHei,sans-serif
              font-size 18px
              color #eef0f4
              margin-bottom 16px
              font-weight 700
              &:not(:first-child)
                margin-top 32px
            .text-info
              line-height 24px
              text-align justify
            .pub
              display flex
              justify-content space-between
              &:not(:last-child)
                margin-bottom 12px
              &-title
                color #8a8c90
</style>