<template>
  <div class="story-wrapper">
    <div class="novels-header">
      <div class="search-top">
        <i class="icon">&#xe600;</i>
        <span>爱阅读</span>
      </div>
      <div class="search-box-wrap" @click="goSearch">
        <i class="icon icon-search">&#xe61f;</i>
        <input type="text" class="search-input" placeholder="搜索" />
        <!-- <i class="icon icon-dismiss" v-show="query">&#xe60d;</i> -->
      </div>
    </div>
    <div class="novels-container">
      <!-- 排行榜 -->
      <div class="topCategory">
        <div class="ranking-block"
        v-for="(item, index) in rankCate" :key="index"
        v-show="item.books.length > 0">
          <div class="ranking-block-header">
            <div class="ranking-block-header-link">
              <img src="http://statics.zhuishushenqi.com/ranking-cover/142319144267827" alt="">
              <h2 class="topCategory-header-title">{{item.title}}</h2>
            </div>
          </div>
          <div class="ranking-block-body">
            <!-- 横向排行 -->
            <div class="book-wrap-item row-ranking" v-for="(list, index) in item[0]" :key="index"
            @click="findBookInfo(list._id)">
              <div class="ranking-block-book">
                <div class="ranking-block-book-container">
                  <div class="ranking-block-book-cover">
                    <img :src="'http://statics.zhuishushenqi.com' + list.cover" alt="">
                  </div>
                  <div class="ranking-block-book-info">
                    <p class="ranking-block-book-title">
                      <span class="ranking-block-book-index">{{index + 1}}</span>
                      {{list.title}}
                    </p>
                    <div class="ranking-block-book-author">{{list.author}}</div>
                  </div>
                </div>
              </div>
            </div>
            <!-- 纵向排行 -->
            <!-- <div class="left">
              <div class="ranking-block-book">
                <div class="ranking-block-book-container">
                  <div class="ranking-block-book-cover">
                    <img src="" alt="">
                  </div>
                  <div class="ranking-block-book-info">
                    <p class="ranking-block-book-title">
                      <span class="ranking-block-book-index">1</span>三体（全集）
                    </p>
                    <div class="ranking-block-book-author">刘慈欣</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="right">
              <div class="ranking-block-book">
                <div class="ranking-block-book-container">
                  <div class="ranking-block-book-cover">
                    <img src="" alt="">
                  </div>
                  <div class="ranking-block-book-info">
                    <p class="ranking-block-book-title">
                      <span class="ranking-block-book-index">1</span>三体(全集)
                    </p>
                    <div class="ranking-block-book-author"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="left">
              <div class="ranking-block-book">
                <div class="ranking-block-book-container">
                  <div class="ranking-block-book-cover">
                    <img src="" alt="">
                  </div>
                  <div class="ranking-block-book-info">
                    <p class="ranking-block-book-title">
                      <span class="ranking-block-book-index">1</span>三体（全集）
                    </p>
                    <div class="ranking-block-book-author">刘慈欣</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="right">
              <div class="ranking-block-book">
                <div class="ranking-block-book-container">
                  <div class="ranking-block-book-cover">
                    <img src="" alt="">
                  </div>
                  <div class="ranking-block-book-info">
                    <p class="ranking-block-book-title">
                      <span class="ranking-block-book-index">1</span>三体(全集)
                    </p>
                    <div class="ranking-block-book-author"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="left">
              <div class="ranking-block-book">
                <div class="ranking-block-book-container">
                  <div class="ranking-block-book-cover">
                    <img src="" alt="">
                  </div>
                  <div class="ranking-block-book-info">
                    <p class="ranking-block-book-title">
                      <span class="ranking-block-book-index">1</span>三体（全集）
                    </p>
                    <div class="ranking-block-book-author">刘慈欣</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="right">
              <div class="ranking-block-book">
                <div class="ranking-block-book-container">
                  <div class="ranking-block-book-cover">
                    <img src="" alt="">
                  </div>
                  <div class="ranking-block-book-info">
                    <p class="ranking-block-book-title">
                      <span class="ranking-block-book-index">1</span>三体(全集)
                    </p>
                    <div class="ranking-block-book-author"></div>
                  </div>
                </div>
              </div>
            </div> -->
          </div>
          <div class="ranking-block-footer">
            <div class="ranking-block-footer-link" @click="findMore(item.id)">
              <span class="ranking-block-footer-link-text">查看全部</span>
              <i class="icon">&#xe606;</i>
            </div>
          </div>
        </div>
      </div>
      <!-- 全部分类 -->
      <div class="allCategory">
        <div class="allCategory-header">
          <h2 class="allCategory-header-title">榜单推荐(男生)</h2>
        </div>
        <div class="allCategory-list">
          <div class="allCategory-item"
          v-for="(item, index) in maleRankList"
          :key="index"
          @click="findMore(item._id)">
            <span class="allCategory-item-title">
              {{item.shortTitle}}</span>
          </div>
        </div>
        <div class="allCategory-header">
          <h2 class="allCategory-header-title">榜单推荐(女生)</h2>
        </div>
        <div class="allCategory-list">
          <div class="allCategory-item"
          v-for="(item, index) in femaleRankList"
          :key="index"
          @click="findMore(item._id)">
            <span class="allCategory-item-title">
              {{item.shortTitle}}</span>
          </div>
        </div>
        <div class="allCategory-header">
          <h2 class="allCategory-header-title">全部分类</h2>
        </div>
        <div class="allCategory-list">
          <div class="allCategory-item"
          v-for="(item, index) in bookCate"
          :key="index"
          @click="findCateBooks(item.name)">
            <span class="allCategory-item-title">
              {{item.name}}·{{item.bookCount}}本</span>
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
      rankList: [],
      rankListsInfo: [],
      booksList: [],
      rankCate: [],
      bookCate: [],
      categoryLists: [
        {
          cateId: '01',
          cateTitle: '文学艺术榜',
          cateCount: 13391
        },
        {
          cateId: '02',
          cateTitle: '名著经典榜',
          cateCount: 2476
        },
        {
          cateId: '03',
          cateTitle: '青春言情榜',
          cateCount: 49811
        },
        {
          cateId: '04',
          cateTitle: '推理悬疑榜',
          cateCount: 6981
        },
        {
          cateId: '05',
          cateTitle: '影视原著榜',
          cateCount: 633
        },
        {
          cateId: '06',
          cateTitle: '科幻武侠榜',
          cateCount: 22790
        },
        {
          cateId: '07',
          cateTitle: '励志治愈榜',
          cateCount: 7790
        },
        {
          cateId: '08',
          cateTitle: '经济管理榜',
          cateCount: 15298
        },
        {
          cateId: '09',
          cateTitle: '都市小说榜',
          cateCount: 21780
        },
        {
          cateId: '10',
          cateTitle: '职场榜',
          cateCount: 3500
        },
        {
          cateId: '11',
          cateTitle: '心里课堂榜',
          cateCount: 1973
        },
        {
          cateId: '12',
          cateTitle: '玄幻奇幻榜',
          cateCount: 36101
        }
      ],
      maleRankList: [],
      femaleRankList: []
    }
  },
  computed: {
    imgUrl () {
      let bookCovers = []
      for (let item in this.booksList) {
        bookCovers.push('http://statics.zhuishushenqi.com' + item.cover)
      }
      return bookCovers
    }
  },
  methods: {
    // 获取排行榜类型
    _getRankingType () {
      const params = {
      }
      api.getRankingType(params)
      .then((res) => {
        console.log(res)
        if (res.ok === true) {
          // console.log(res.picture)
          this.rankList = res.picture
          this._getRankId()
          // 获取全部排行榜分类
          // console.log(res.male)
          this.maleRankList = res.male
          this.femaleRankList = res.female
          // this._getRankingBook(res.picture[0]._id)
          // http://statics.zhuishushenqi.com/ranking-cover/142319144267827
        }
      })
    },

    // 获取周榜id
    _getRankId() {
      // let rankIds = []
      for (let item in this.rankList) {
        // console.log(item)
        // console.log(this.rankList[item]._id)
        this._getRankingBook(this.rankList[item]._id)
        // rankIds.push(this.rankList[item]._id)
      }
      // return rankIds
    },

    // 根据周榜_id获取排行榜小说
    _getRankingBook(rankId) {
      const params = {
      }
      api.getRankingBook(params, rankId)
      .then((res) => {
        console.log(res)
        if (res.ok === true) {
          this.rankListsInfo = res.ranking
          // console.log(this.rankListsInfo)
          // 首次加载6条数据
          this.booksList = res.ranking.books.splice(0, 6)
          // 把6数据以数组塞入原对象
          let newRankListsInfo = Object.assign({}, this.rankListsInfo, [this.booksList])
          this.rankCate = this.rankCate.concat(newRankListsInfo)
          // console.log(this.booksCate)
        }
      })
    },

    // 获取小说所有分类
    _getNovelCate () {
      const params = {
        // key: '991792145f62460bac35b1c92ee50cdb'
      }
      api.getNovelCate(params)
      .then((res) => {
        console.log(res)
        if (res.ok === true) {
          this.bookCate = res.male
          // this.bookCate = Object.assign([res.male], {'gender': 'female'})
          console.log(this.bookCate)
        }
      })
    },

    // 根据bookId查找小说详情
    findBookInfo(bookId) {
      this.$router.push({path: '/reader', query: {'bookId': bookId}})
    },

    // 查看全部
    findMore(rankId) {
      this.$router.push({path: '/bookCategory', query: {'rankId': rankId}})
    },

    // 按分类获取小说列表
    findCateBooks(cateName, gender) {
      this.$router.push({path: '/bookCategory', query: {'cateName': cateName}})
    },

    // 去往搜索页
    goSearch () {
      this.$router.push({path: '/search'})
    }
  },
  mounted () {
    this._getRankingType()
    this._getNovelCate()
  }
}
</script>

<style lang="stylus" scoped>
.story-wrapper
  font-family PingFang SC, sans-serif, STHeitiSC-Light, Helvetica-Light, arial
  // background rgba(8, 5, 58, 0.9)
  // color #fff
  padding-bottom 100px
  .novels-header
    width 100%
    padding-bottom 80px
    @media screen and (max-width: 460px)
      padding-bottom 40px
    .search-top
      text-align center
      width 100%
      height 90px
      line-height 90px
      font-size 0
      span
        vertical-align middle
        font-size 24px
        margin-left 10px
        font-weight 600
      .icon
        font-size 40px
        vertical-align middle
    .search-box-wrap
      position relative
      width 80%
      max-width 840px
      margin 0 auto
      @media screen and (max-width: 460px)
        padding 0 20px
        width auto
      .icon-search
        position absolute
        display block
        top 18px
        left 32px
        @media screen and (max-width: 460px)
          top 6px
      .icon-dismiss
        position absolute
        display block
        top 18px
        right 32px
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
  .novels-container
    max-width 1332px
    margin 0 auto
    .topCategory
      display flex
      flex-wrap wrap
      justify-content space-between
      .ranking-block
        width 48%
        padding 0 40px
        margin-bottom 22px
        box-sizing border-box
        @media screen and (max-width: 1020px)
          width 100%
          margin-bottom 14px
        @media screen and (max-width: 960px)
          padding 0 30px
        &-header
          padding 20px 0
          border solid hsla(0, 0%, 100%, .05)
          border-width 0 0 1px
          &-link
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
        &-body
          display flex
          flex-wrap wrap
          justify-content space-between
          .book-wrap-item
            width 48%
            @media screen and (max-width: 560px)
              width 100%
            .ranking-block-book
              position relative
              border solid hsla(0, 0%, 100%, .05)
              border-width 0 0 1px
              @media screen and (max-width: 460px)
                position relative
                border none
              &-container
                padding 16px 0 16px 16px
                margin-left -16px
                overflow hidden
                .ranking-block-book-cover
                  float left
                  display block
                  width 64px
                  height 92px
                  box-shadow 0 2px 16px rgba(0,0,0,.08)
                  background #d8d8d8
                  position relative
                  img
                    vertical-align top
                    width 100%
                    height 100%
                    background-color #d8d8d8
                .ranking-block-book-info
                  padding 0 10px 0 82px
                  margin-top 20px
                  .ranking-block-book-title
                    font-size 15px
                    font-weight 500
                    // color #eef0f4
                    color #b2b4b8
                    overflow hidden
                    white-space nowrap
                    text-overflow ellipsis
                    word-break break-all
                    word-wrap normal
                    .ranking-block-book-index
                      width 18px
                      display inline-block
                      font-family DIN-Medium,PingFang SC,-apple-system,SF UI Text,Lucida Grande,STheiti,Microsoft YaHei,sans-serif
                      font-size 16px
                  .ranking-block-book-author
                    position relative
                    display inline-block
                    margin-top 16px
                    margin-left 18px
                    font-size 12px
                    z-index 2
                    color #8a8c90
                    overflow hidden
                    white-space nowrap
                    text-overflow ellipsis
                    word-break break-all
                    word-wrap normal
          /* 纵向排行样式 */
          /* .left
            width 48%
            float left
            @media screen and (max-width: 560px)
              width 100%
              float none
          .right
            width 48%
            float right
            @media screen and (max-width: 560px)
              width 100%
              float none
            @media screen and (max-width: 460px)
              display none
          .left, .right
            .ranking-block-book
              position relative
              border solid hsla(0, 0%, 100%, .05)
              border-width 0 0 1px
              @media screen and (max-width: 460px)
                position relative
                border none
              &-container
                padding 16px 0 16px 16px
                margin-left -16px
                overflow hidden
                .ranking-block-book-cover
                  float left
                  display block
                  width 64px
                  height 92px
                  box-shadow 0 2px 16px rgba(0,0,0,.08)
                  background #d8d8d8
                  position relative
                  img
                    vertical-align top
                    width 100%
                    height 100%
                    background-color #d8d8d8
                .ranking-block-book-info
                  padding 0 10px 0 82px
                  margin-top 20px
                  .ranking-block-book-title
                    font-size 15px
                    font-weight 500
                    color #eef0f4
                    overflow hidden
                    white-space nowrap
                    text-overflow ellipsis
                    word-break break-all
                    word-wrap normal
                    .ranking-block-book-index
                      width 18px
                      display inline-block
                      font-family DIN-Medium,PingFang SC,-apple-system,SF UI Text,Lucida Grande,STheiti,Microsoft YaHei,sans-serif
                      font-size 16px
                  .ranking-block-book-author
                    position relative
                    display inline-block
                    margin-top 6px
                    margin-left 18px
                    font-size 12px
                    z-index 2
                    color #8a8c90
                    overflow hidden
                    white-space nowrap
                    text-overflow ellipsis
                    word-break break-all
                    word-wrap normal */
        &-body::after
          // content ""
          // display block
          clear both
        &-footer
          padding 20px 0
          &-link
            font-size 15px
            color #b2b4b8
            @media screen and (max-width: 460px)
              width 100%
              height 44px
              line-height 44px
              display inline-block
              text-align center
              color #1b88ee
              border-radius 10px
              border 1px solid hsla(0,0%,100%,.2)
            &-text
              vertical-align middle
              margin-right 5px
            .icon
              vertical-align middle
              @media screen and (max-width: 460px)
                display none
    .allCategory
      padding 0 40px
      @media screen and (max-width: 1120px)
        padding 0 40px
      @media screen and (max-width: 960px)
        padding 0 30px
      @media screen and (max-width: 460px)
        padding 0 20px
      &-header
        padding 20px 0
        border solid hsla(0,0%,100%,.05)
        border-width 0 0 1px
        &-title
          font-size 20px
          font-family "SourceHanSerifCN-Bold",PingFang SC,-apple-system,SF UI Text,Lucida Grande,STheiti,Microsoft YaHei,sans-serif
          // color #eef0f4
          color #b2b4b8
      &-list
        display flex
        flex-wrap wrap
        justify-content space-between
        .allCategory-item
          width 24%
          border solid hsla(0, 0%, 100%, .05)
          border-width 0 0 1px
          @media screen and (max-width: 1120px)
            width 31%
          @media screen and (max-width: 960px)
            width 47%
          @media screen and (max-width: 320px)
            width 100%
          &-title
            display inline-block
            width 100%
            padding 18px 0 18px 12px
            margin-left -12px
            font-family DIN-Regular,PingFang SC,-apple-system,SF UI Text,Lucida Grande,STheiti,Microsoft YaHei,sans-serif
            font-size 16px
            @media screen and (max-width: 460px)
              font-size 14px
              line-height 1.5
            // color #eef0f4
            color #b2b4b8
</style>
