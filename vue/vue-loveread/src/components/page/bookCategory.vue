<template>
  <div class="bookCategory-wrapper">
    <div class="novels-header">
      <div class="search-box" @click="goSearch">
        <i class="icon">&#xe61f;</i>
        <input type="text" class="search-input" placeholder="搜索" />
      </div>
    </div>
    <div class="bookCategory-content">
      <div class="rank-page">
        <div class="rank-page-header">
          <div class="rank-page-header-link">
            <img src="http://statics.zhuishushenqi.com/ranking-cover/142319144267827" alt="">
            <h2 class="topCategory-header-title">{{rankTitle}}</h2>
          </div>
        </div>
        <ul class="rank-page-bookList">
          <li class="bookList-item"
          v-for="(item, index) in bookList" :key="index"
          @click="findBookInfo(item._id)">
            <div class="bookList-item-container">
              <p class="bookList-item-container-index">{{index + 1}}</p>
              <div class="bookList-item-container-cover">
                <img :src="'http://statics.zhuishushenqi.com' + item.cover" alt="">
              </div>
              <div class="bookList-item-container-info">
                <p class="title">{{item.title}}</p>
                <p class="author">{{item.author}}</p>
                <p class="reading">
                  <span class="reading-rateScore">活跃值{{item.retentionRatio}}%</span>
                  <span class="reading-text">
                    <span class="reading-text-num">{{item.latelyFollower}}</span>人喜欢
                  </span>
                </p>
                <p class="desc">{{item.shortIntro}}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import api from '@/api'

export default {
  data () {
    return {
      bookList: [],
      rankTitle: ''
    }
  },
  methods: {
    // 根据周榜_id获取排行榜小说
    _getRankingBook() {
      let rankId = this.$route.query.rankId
      const params = {
      }
      api.getRankingBook(params, rankId)
      .then((res) => {
        console.log(res)
        if (res.ok === true && res.ranking.books.length > 0) {
          this.bookList = res.ranking.books
          this.rankTitle = res.ranking.title
        } else {
          this.rankTitle = res.ranking.title
          this.$toast('抱歉，暂无内容！敬请期待')
        }
      })
    },

    // 按分类获取小说列表
    _getBookList() {
      let cateName = this.$route.query.cateName
      let gender = this.$route.query.gender
      const params = {
        // gender: 'male',
        // type: month,
        major: cateName,
        start: 0,
        limit: 10
      }
      api.getBookList(params)
      .then((res) => {
        console.log(res)
        if (res.ok === true && res.books.length > 0) {
          this.bookList = res.books
          this.rankTitle = this.$route.query.cateName
        } else {
          this.rankTitle = this.$route.query.cateName
          this.$toast('抱歉，暂无此分类内容！敬请期待')
        }
      })
    },

    // 根据bookId查找小说详情
    findBookInfo(bookId) {
      this.$router.push({path: '/reader', query: {'bookId': bookId}})
    },

    // 去往搜索页
    goSearch () {
      this.$router.push({path: '/search'})
    }
  },
  mounted () {
    if (this.$route.query.rankId) {
      this._getRankingBook()
    } else if (this.$route.query.cateName) {
      this._getBookList()
    }
  }
}
</script>

<style lang="stylus" scoped>
.bookCategory-wrapper
  z-index 100
  width 100%
  min-height 100vh
  padding-bottom 60px
  .novels-header
    border solid hsla(0, 0%, 100%, .05)
    border-width 0 0 1px
    position fixed
    background #1f2022
    padding-top 20px
    z-index 102
    width 100%
    padding-bottom 40px
    @media screen and (max-width: 460px)
      padding-bottom 20px
    .search-box
      position relative
      width 80%
      max-width 840px
      margin 0 auto
      @media screen and (max-width: 460px)
        padding 0 20px
        width auto
      .icon
        position absolute
        display block
        width 20px
        height 20px
        top 18px
        left 32px
        @media screen and (max-width: 460px)
          top 6px
      .search-input
        height 50px
        line-height 50px
        padding 0 52px
        @media screen and (max-width: 460px)
          height 30px
          line-height 30px
          padding 0 34px
          font-size 14px
        background rgba(238,240,244,.1)
        display inline-block
        width 100%
        color #fff
        box-sizing border-box
        border-radius 40px
        text-align left
        font-size 16px
        &:focus
          outline none
  .bookCategory-content
    padding-top 110px
    max-width 1120px
    margin 0 auto
    padding-right 40px
    @media screen and (max-width: 960px)
      padding-right 30px
    @media screen and (max-width: 460px)
      padding-right 20px
      padding-top 70px
    .rank-page
      margin 0
      &-header
        padding 20px 0
        // border solid hsla(0, 0%, 100%, .05)
        // border-width 0 0 1px
        &-link
          padding-left 20px
          display inline-block
          display flex
          img
            display inline-block
            width 20px
            height 20px
            vertical-align bottom
            margin-right 10px
          .topCategory-header-title
            font-size 20px
            font-family "SourceHanSerifCN-Bold",PingFang SC,-apple-system,SF UI Text,Lucida Grande,STheiti,Microsoft YaHei,sans-serif
            color #e34737
      &-bookList
        position relative
        border 0
        .bookList-item
          position relative
          &-container
            display table
            padding 12px 0
            overflow hidden
            &-index
              width 48px
              display table-cell
              font-size 16px
              font-family DIN-Medium,PingFang SC,-apple-system,SF UI Text,Lucida Grande,STheiti,Microsoft YaHei,sans-serif
              vertical-align middle
              text-align center
              color #b2b4b8
            &-cover
              box-shadow 0 2px 16px rgba(0,0,0,.08)
              position relative
              display table-cell
              vertical-align middle
              width 108px
              height 156px
              @media screen and (max-width: 460px)
                width 64px
                height 93px
              img
                width 100%
                height 100%
            &-info
              display table-cell
              vertical-align middle
              padding-left 16px
              .title
                padding-right 0
                font-size 17px
                line-height 26px
                height 26px
                overflow hidden
                display -webkit-box
                text-overflow ellipsis
                -webkit-line-clamp 1
                -webkit-box-orient vertical
                height auto
                max-height 26px
                font-family "SourceHanSerifCN-Bold",PingFang SC,-apple-system,SF UI Text,Lucida Grande,STheiti,Microsoft YaHei,sans-serif
                color #eef0f4
              .author
                margin-top 6px
                font-size 14px
                color #b2b4b8
                line-height 21px
                overflow hidden
                height 21px
                display -webkit-box
                text-overflow ellipsis
                -webkit-line-clamp 1
                -webkit-box-orient vertical
                height auto
                max-height 21px
              .reading
                margin-top 6px
                font-family DIN-Medium,PingFang SC,-apple-system,SF UI Text,Lucida Grande,STheiti,Microsoft YaHei,sans-serif
                color #8a8c90
                overflow hidden
                white-space nowrap
                text-overflow ellipsis
                word-break break-all
                word-wrap normal
                &-rateScore
                  display inline-block
                  vertical-align middle
                  font-size 13px
                  padding-right 3px
                &-text
                  display inline-block
                  vertical-align middle
                  font-size 12px
              .desc
                margin-top 8px
                font-size 14px
                color #8a8c90
                line-height 22px
                overflow hidden
                height 44px
                display -webkit-box
                text-overflow ellipsis
                -webkit-line-clamp 2
                line-clamp 2
                -webkit-box-orient vertical
                height auto
                max-height 44px
                @media screen and (max-width: 460px)
                  display none
</style>