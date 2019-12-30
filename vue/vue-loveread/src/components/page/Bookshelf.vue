<template>
  <div class="bookShelf-wrapper">
    <v-header>
      <i class="icon" slot="left-icon">&#xe603;</i>
      <span slot="content">书架</span>
      <span slot="right-icon" style="font-size: 18px;" @click="goStory">添加</span>
    </v-header>
    <div class="bookShelf-content">
      <ul class="bookList"  v-show="books.length > 0">
        <li class="bookList-item" v-for="(item, index) in books" :key="index"
        @click="findBookInfo(item.bookId, item.order)">
          <van-swipe-cell>
            <van-cell :border="true" class="container" :stop-propagation="true">
              <div class="cover">
                <img :src="'http://statics.zhuishushenqi.com' + item.cover" alt="">
              </div>
              <div class="info">
                <p class="title">{{item.title}}</p>
                <p class="author">你上次看到：{{item.chapterTitle}}</p>
                <p class="updated">
                  <!-- <span class="updateTime">{{updatedTime}}</span> -->
                  <span class="newChapter">最新章节：{{item.lastChapter}}</span>
                </p>
              </div>
            </van-cell>
            <template slot="right">
              <van-button style="height: 100%" square type="danger" text="删除" @click="deleteBookList(index)" />
            </template>
          </van-swipe-cell>
        </li>
      </ul>
      <div class="no-result-wrapper" v-show="!books.length">
        <span>书架空空如也！快去书城添加吧！</span>
      </div>
    </div>
  </div>
</template>

<script>
import api from '@/api'
import vheader from '@/components/vheader'
import { Dialog } from 'vant'
import '@vant/touch-emulator' // 兼容pc端
export default {
  data () {
    return {
      books: [],
      updatedTime: '',
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
        this.updatedTime = res[0].updated.slice(0, 10)
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

    // 删除书签
    deleteBookList (idx) {
      Dialog.confirm({
        title: '提示',
        message: '确定要删除吗？'
      }).then(() => {
        let storage = window.localStorage
        let localShelf = JSON.parse(storage.getItem('followBookList')) ? JSON.parse(storage.getItem('followBookList')) : {}
        // 删除该书籍在本地的缓存记录
        delete localShelf[this.books[idx]._id]
        this.books.splice(idx, 1)
        // 重新保存
        storage.setItem('followBookList', JSON.stringify(localShelf))
      }).catch(() => {
      })
    },

    // 根据bookId查找小说详情
    findBookInfo (bookId, order) {
      this.$router.push({path: '/reader', query: {'bookId': bookId, 'order': order}})
    },

    goStory () {
      this.$router.push({path: '/story'})
    }
  },
  created () {
    Object.keys(JSON.parse(localStorage.getItem('followBookList'))).length === 0 ?  '' : this._getBookUpdate()
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
    margin-bottom 57px
    .bookList
      position relative
      border 0
      .bookList-item
        position relative
        .container
          // display table
          padding 12px 0 12px 16px
          overflow hidden
          .cover
            float left
            margin-right 16px
            // display table-cell
            // vertical-align middle
            box-shadow 0 2px 16px rgba(0,0,0,.08)
            position relative
            width 64px
            height 93px
            img
              width 100%
              height 100%
          .info
            // display table-cell
            // vertical-align middle
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
              max-height 26px
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
              max-height 21px
            .updated
              margin-top 6px
              color #8a8c90
              overflow hidden
              white-space nowrap
              text-overflow ellipsis
              word-break break-all
              word-wrap normal
              .updateTime
                display inline-block
                vertical-align middle
                font-size 13px
                padding-right 3px
              .newChapter
                display inline-block
                vertical-align middle
                font-size 14px
    .no-result-wrapper 
      position absolute
      width 100%
      top 50%
      transform translateY(-50%)
      text-align center
      span 
        font-size 14px
        color #b2b4b8
</style>
