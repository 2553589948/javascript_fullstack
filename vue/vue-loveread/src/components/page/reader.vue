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
                  {{ratingCounts}}
                  <span v-show="rating.count >= 10000">万</span>人点评
                </div>
              </div>
              <div class="reading">
                <div class="reading-count">
                  <span class="number">{{totalFollower}}</span>
                  <span v-show="bookInfo.totalFollower >= 10000">万</span>人
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
                <span>{{bookInfo.majorCate}}-{{bookInfo.minorCateV2}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="readerChapterContent">
        <div class="chapterTitle">{{chapterContent.title}}</div>
        <div class="renderTargetContainer">
          <div class="renderTargetContent">
            {{chapterContent.cpContent}}
          </div>
        </div>
      </div>
      <div class="readerFooter">
        <div>
          <div class="footer-btn nextChapter"
          v-if="chapterContent.order"
          @click="toNextChapter(chapterContent.order,
          allChapters[chapterContent.order].isVip)"
          >下一章</div>
          <div class="footer-btn blue">敬请期待</div>
        </div>
      </div>
    </div>
    <div class="readerBar">
      <router-link :to="{path: '/Story'}" class="bar-item home" tag="div">
        <span class="icon">&#xe67d;</span>
        <span class="txt">书城</span>
      </router-link>
      <div class="bar-item entries" @click="showEntry">
        <span class="icon">&#xe605;</span>
        <span class="txt">目录</span>
      </div>
      <div class="bar-item setting" @click="settingSkin">
        <span class="icon">&#xe632;</span>
        <span class="txt">设置</span>
      </div>
      <div class="addShelf" @click="addShelf">
        <span class="icon shelf">&#xe603;</span>
        <span class="txt">加入书架</span>
      </div>
    </div>
    <!-- mask -->
    <div>
      <div class="bar-mask" v-show="showEntries" @click="hideMask"></div>
      <div class="readerEntries" v-show="showEntries">
        <div class="readerEntries-bookInfo">
          <div class="bookInfo">
            <h2 class="title" @click="toNextChapter(allChapters[0].order - 1)">
              <span class="title-txt">{{bookInfo.title}}</span>
              <span class="title-arrow icon">&#xe606;</span>
            </h2>
            <div class="author">{{bookInfo.author}}</div>
          </div>
        </div>
        <div class="readerEntries-sort">
          <div class="sort-inner" @click="chapterSort">
            <span id="sort"></span>
          </div>
        </div>
        <ul class="readerEntries-list">
          <li class="chapterItem" v-for="(item, index) in allChapters" :key="index"
          @click="toNextChapter(item.order - 1, item.isVip)">
            <div class="chapterItem-link">
              <span class="chapterItem-txt" :class="{'current': chapterContent.order === item.order}">{{item.title}}</span>
              <span class="chapterItem-lock" v-if="item.isVip"></span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="loading-mask" v-show="loading">
      <van-loading class="loadingTips" color="#1989fa" text-size="16px" vertical>内容加载中...</van-loading>
    </div>
  </div>
</template>

<script>
import api from '@/api'
import { numToFixed } from '@/common/util'
import { Dialog } from 'vant'
let chapters, summary

export default {
  data () {
    return {
      bookInfo: [],
      rating: [],
      updateTime: '',
      wordCount: '',
      totalFollower: '',
      ratingCounts: '',
      showContent: false, // 小说详情弹层
      allChapters: [],
      chapterContent: [],
      showEntries: false, // 目录弹层
      loading: false // 加载
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
        this.totalFollower = numToFixed(res.totalFollower)
        this.ratingCounts = numToFixed(res.rating.count)
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
      this.showEntries = false
    },
    showEntry() {
      this.showEntries = !this.showEntries
    },

    // 根据小说id获取小说章节
    _getBookChapters() {
      let bookId = this.$route.query.bookId
      let params = {
        view: 'chapters'
      }
      api.getBookChapters(params, bookId)
      .then((res) => {
        // console.log(res)
        if (res.ok === true) {
          let chapterLink = res.mixToc.chapters[0].link
          let id = res.mixToc._id
          // this._getBookChaptersSource(id)
          // console.log(chapterLink)
          // this._getBookChapterCont(chapterLink)
        }
      })
    },

    // 根据小说id获取小说正版源和源id
    _getBookBtoc() {
      let bookId = this.$route.query.bookId
      let params = {
        view: 'summary',
        book: bookId
      }
      api.getBookBtoc(params)
      .then((res) => {
        // console.log(res)
        // let bSourceId = res[0]._id
        // console.log(bSourceId)
        // this._getBookChaptersSource(bSourceId)
      })
    },

    // 根据小说id获取小说正版源于盗版源(混合)和源id
    _getBookAtoc() {
      let bookId = this.$route.query.bookId
      let params = {
        view: 'summary',
        book: bookId
      }
      api.getBookAtoc(params)
      .then((res) => {
        console.log(res)
        let sourceId = res[0]._id
        // console.log(sourceId)
        this._getBookChaptersSource(sourceId)
      })
    },

    // 根据小说源id获取小说章节
    _getBookChaptersSource(sourceId) {
      let params = {
        view: 'chapters'
      }
      api.getBookChaptersSource(params, sourceId)
      .then((res) => {
        console.log(res)
        this.allChapters = res.chapters
        let chapterAtocLink
        // 从书架进来(已加入书架的书籍)
        let readHis = JSON.parse(localStorage.getItem('followBookList'))
        let addShelfEle = document.querySelector('.addShelf')
        let bookInfoEle = document.querySelector('.readerBookInfo')
        if (readHis[this.$route.query.bookId]) {
          chapterAtocLink = res.chapters[readHis[this.$route.query.bookId].order - 1].link
          addShelfEle.style.background = 'rgba(238,240,244,0.5)'
          addShelfEle.children[0].style.display = 'none'
          addShelfEle.children[1].innerHTML = '已加入，保存书签'
          if (readHis[this.$route.query.bookId].order > 1) {
            bookInfoEle.style.display = 'none'
          } else {
            bookInfoEle.style.display = ''
          }
        } else {
          // 还未加入书架
          chapterAtocLink = res.chapters[0].link
        }
        console.log(chapterAtocLink)
        this._getBookChapterCont(chapterAtocLink)
      })
    },

    //根据章节地址link获取小说章节内容
    _getBookChapterCont(link) {
      let params = {
      }
      api.getBookChapterCont(params, link)
      .then((res) => {
        console.log(res)
        if (res.ok === true) {
          this.chapterContent = res.chapter
          if (!this.chapterContent.order) {
            document.querySelector('.addShelf').style.display = 'none'
          }
          this.loading = false
        }
      }).catch((err) => {
        this.loading = false
        // this.$toast('抱歉！服务器异常，未找到你想要的内容')
        this.$toast('非常抱歉！内容因版权问题暂时下架')
        if (!this.chapterContent.order) {
          document.querySelector('.addShelf').style.display = 'none'
        }
      })
    },

    // 阅读每章小说内容
    toNextChapter(orderIdx, isVip) {
      let bookInfoEle = document.querySelector('.readerBookInfo')
      if (orderIdx > 0 && isVip === false) {
        bookInfoEle.style.display = 'none'
        this._getBookChapterCont(this.allChapters[orderIdx].link)
        this.showEntries = false
      } else if (orderIdx === 0) {
        bookInfoEle.style.display = ''
        this._getBookChapterCont(this.allChapters[orderIdx].link)
        this.showEntries = false
      } else {
        this.$toast('此内容开通vip后才能看哦')
      }
      // this.$router.push({path: '/reader', query: {'bookId': this.$route.query.bookId, 'order': orderIdx + 1}})
    },

    // 滑到底部
    chapterSort() {
      let sortClassName = document.getElementById('sort').className
      let ele = document.querySelector('.readerEntries-list')
      const t = document.querySelector('.readerEntries-list').scrollHeight
      if (sortClassName === 'active') {
        document.getElementById('sort').className = ''
        ele.scrollTo({top: 0, left: 0, behavior: 'auto'})
      } else {
        document.getElementById('sort').className = 'active'
        ele.scrollTo({top: t, left: 0, behavior: 'auto'})
      }
    },

    // 记录阅读历史
    recordReadHis () {
      let readHis = JSON.parse(localStorage.getItem('followBookList')) || {}
      // console.log(readHis)
      readHis[this.$route.query.bookId] = {
        bookId: this.$route.query.bookId,
        title: this.bookInfo.title,
        cover: this.bookInfo.cover,
        chapterTitle: this.chapterContent.title,
        order: this.chapterContent.order
      }
      localStorage.setItem('followBookList', JSON.stringify(readHis))
    },

    // 添加小说到书架
    addShelf () {
      let readHis = JSON.parse(localStorage.getItem('followBookList')) || {}
      if (!readHis[this.$route.query.bookId]) {
        Dialog.confirm({
            title: '提示',
            message: '是否将小说加入书架？'
          }).then(() => {
          this.recordReadHis()
          this.$toast('添加成功！')
          this.$router.push({path: '/bookshelf'})
        }).catch(() => {
        })
      } else {
        Dialog.confirm({
            title: '提示',
            message: '是否保存小说书签？'
          }).then(() => {
          this.recordReadHis()
          this.$toast('保存书签成功！')
          this.$router.push({path: '/bookshelf'})
        }).catch(() => {
        })
      }
    },

    settingSkin () {
      this.$router.push({path: '/mine'})
    }
  },
  mounted () {
    this._getBookInfo()
    // this._getBookChapters()
    // this._getBookBtoc()
    this._getBookAtoc()
    this.loading = true
  }
}
</script>

<style lang="stylus" scoped>
.reader-wrapper
  height 100%
  min-height 100vh
  .loading-mask
    position fixed
    left 0
    top 0
    right 0
    bottom 0
    z-index 180
    width 100%
    height 100%
    // background rgba(0,0,0,1)
    background #1f2022
    .loadingTips
      position absolute
      width 100%
      top 50%
      transform translateY(-50%)
      text-align center
  .reader-content
    max-width 1120px
    min-height 100%
    margin-left auto
    margin-right auto
    .readerBookInfo
      margin 0 24px
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
        z-index 110
        .dialog-mask
          position fixed  
          z-index 112
          top 0
          bottom 0
          left 0
          right 0
          width 100%
          height 100%
          background rgba(0,0,0,.4)
        .dialog-container
          z-index 120
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
    .readerChapterContent
      margin 0 24px
      padding-top 24px
      // color #d0d3d8
      color #b2b4b8
      font-size 19px
      text-align justify
      line-height 1.8
      .chapterTitle
        font-size 20px
        font-family "SourceHanSerifCN-Bold",PingFang SC,-apple-system,SF UI Text,Lucida Grande,STheiti,Microsoft YaHei,sans-serif
        margin-bottom 18px
        // color #eef0f4
        font-weight 600
      .renderTargetContainer
        position relative
    .readerFooter
      text-align center
      padding 80px 36px
      .footer-btn
        display block
        max-width 400px
        height 60px
        line-height 60px
        margin 0 auto 24px
        border-radius 6px
        text-align center
        font-size 16px
        font-weight 500
        background-color hsla(0,0%,100%,.1)
        color #eef0f4
        transition background-color .2s ease-in-out
        @media screen and (max-width: 767px)
          max-width 100%
          height 50px
          line-height 50px
        &.blue
          background linear-gradient(90deg,#0087fc,#00a3f5)
          color #fff
  .readerBar
    position fixed
    z-index 102
    bottom 0
    width 100%
    height 58px
    display flex
    align-items center
    justify-content space-between
    background-color #101418
    .bar-item
      flex 1
      display flex
      flex-direction column
      justify-content center
      align-items center
      text-align center
      height 100%
      color #b2b4b8
      .icon
        font-size 18px
      .txt
        margin-top 6px
        font-size 10px
    .addShelf
      margin 0 16px
      display inline-block
      height 40px
      line-height 40px
      font-size 15px
      border-radius 20px
      padding 0 28px
      position relative
      min-width 34px
      font-weight 500
      text-align center
      background linear-gradient(90deg,#0087fc,#28b7ff)
      color #fff!important
      user-select none
      .icon
        font-size 18px
        vertical-align middle
        margin-right 6px
      .txt
        vertical-align middle
  .bar-mask
    position fixed
    left 0
    top 0
    right auto
    bottom auto
    z-index 88
    width 100%
    height 100%
    background rgba(0,0,0,.4)
  .readerEntries
    position fixed
    background-color #1f2022
    width 100%
    margin-left 0
    left 0
    right 0
    top 88px
    bottom 56px
    z-index 90
    box-shadow -20px 0 20px 0 rgba(0,0,0,.1)
    display flex
    flex-direction column
    &-bookInfo
      padding 18px 20px 0
      .bookInfo
        padding-top 2px
        display flex
        flex-direction column
        justify-content center
        .title
          font-family "SourceHanSerifCN-Bold",PingFang SC,-apple-system,SF UI Text,Lucida Grande,STheiti,Microsoft YaHei,sans-serif
          font-size 16px
          color #eef0f4
          font-weight 400
          &-txt
            vertical-align middle
          &-arrow
            display inline-block
            font-size 12px
            vertical-align middle
            margin-left 4px
        .author
          margin-top 7px
          font-family "SourceHanSerifCN-Bold",PingFang SC,-apple-system,SF UI Text,Lucida Grande,STheiti,Microsoft YaHei,sans-serif
          font-size 12px
          color #b2b4b8
    .readerEntries-sort
      padding 0 20px
      .sort-inner
        position relative
        border 0
        height 40px
        text-align right
        border-radius 0
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
        #sort
          display inline-block
          width 16px
          height 100%
          cursor pointer
          opacity .7
          background url(https://wrwebnjlogic-40036.sh.gfp.tencent-cloud.com/image/reader_catalog_scroll.89206a73.png) no-repeat
          background-size 16px 13px
          background-position 50% 50%
          transition transform .3s ease-in-out
          transform rotate(0)
          &.active
            opacity 1
            transform rotate(180deg)
    .readerEntries-list
      flex auto
      overflow auto
      position relative
      .chapterItem
        height 52px
        line-height 52px
        padding 0 20px
        .chapterItem-link
          display flex
          justify-content space-between
          align-items center
          border-radius 0
          position relative
          border 0
          .chapterItem-txt
            overflow hidden
            white-space nowrap
            text-overflow ellipsis
            word-break break-all
            word-wrap normal
            color #b2b4b8
            font-size 15px
            &.current
              color #0097ff
          .chapterItem-lock
            flex none
            width 14px
            height 16px
            margin-left 16px
            background url(https://wrwebnjlogic-40036.sh.gfp.tencent-cloud.com/image/reader_catalog_lock.ca205906.png) no-repeat
            background-size 100%
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
</style>