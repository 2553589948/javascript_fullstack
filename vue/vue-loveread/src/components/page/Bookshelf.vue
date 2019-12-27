<template>
  <div class="bookShelf-wrapper">
    <v-header>
      <i class="icon" slot="left-icon">&#xe603;</i>
      <span slot="content">书架</span>
      <span slot="right-icon" style="font-size: 18px;">
        编辑
      </span>
    </v-header>
    <div class="bookShelf-content">
      <ul class="bookList">
        <li class="bookList-item" v-for="(item, index) in books" :key="index"
        @click="findBookInfo(item.bookId, item.order)">
          <van-swipe-cell :stop-propagation="true">
            <van-cell :border="true" class="container">
              <div class="cover">
                <img src="" alt="">
              </div>
              <div class="info">
                <div class="title">{{item.title}}</div>
                <div class="author">{{item.author}}</div>
                <div class="updated"></div>
              </div>
            </van-cell>
            <template slot="right">
              <van-button style="height: 100%" square type="danger" text="删除" @click="deleteBookList(index)" />
            </template>
          </van-swipe-cell>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import api from '@/api'
import vheader from '@/components/vheader'
import { Dialog } from 'vant'
import '@vant/touch-emulator' // 兼容pc端
import { setLocalStroageData, getLocalStroageData } from '@/common/util.js'
export default {
  data () {
    return {
      books: [],
      bookShelfList: [
        {
          "title": "111",
          "author": "你好",
          "time": "shm"
        },
        {
          "title": "112",
          "author": "你好",
          "time": "shm"
        },
        {
          "title": "113",
          "author": "你好",
          "time": "shm"
        }
      ]
    }
  },
  methods: {
    // 返回添加书架的书本id
    getBookList () {
      let localShelf = JSON.parse(localStorage.getItem('followBookList'))
      console.log(localShelf)
      let bookListArray = []
      for (let bookId in localShelf) {
        console.log(bookId)
        bookListArray.push(bookId)
      }
      return bookListArray
    },

    // 根据小说id获取小说最新章节
    _getBookUpdate () {
      let localShelf, that = this
      const params = {
        view: 'updated',
        id: this.getBookList().toString()
      }
      api.getBookUpdate(params)
      .then((res) => {
        console.log(res)
        localShelf = JSON.parse(localStorage.getItem('followBookList'))
        res.forEach((book) => {
          Object.assign(book, localShelf[book._id])
          // book.cover = util.staticPath + book.cover
          that.books = [...that.books.push(book), ...that.books]
          console.log(that.books)
        })
      }).catch(err => {
        console.log(err)
      })
    },

    // 删除
    deleteBookList (idx) {
      Dialog.confirm({
        title: '提示',
        message: '确定要删除吗？'
      }).then(() => {
        this.books.splice(idx, 1)
      }).catch(() => {
      })
    },

    // 根据bookId查找小说详情
    findBookInfo(bookId, order) {
      this.$router.push({path: '/reader', query: {'bookId': bookId, 'order': order}})
    }
  },
  created () {
    this._getBookUpdate()
  },
  components: {
    'v-header': vheader
  }
}
</script>

<style lang="stylus" scoped>
.bookShelf-wrapper
  .bookShelf-content
    width 100%
    padding-right 20px
    .bookList
        position relative
        border 0
        .bookList-item
          position relative
          .container
            display table
            padding 12px 0
            overflow hidden
            .cover
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
            .info
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
              .updated
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
</style>
