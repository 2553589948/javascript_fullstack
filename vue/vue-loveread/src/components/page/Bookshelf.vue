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
      <li class="bookList" v-for="(item, index) in books" :key="index"
      @click="findBookInfo(item.bookId, item.order)">
        <van-swipe-cell :stop-propagation="true">
          <van-cell :border="true">
            <div class="title">{{item.title}}</div>
            <div class="author">{{item.author}}</div>
          </van-cell>
          <template slot="right">
            <van-button style="height: 100%" square type="danger" text="删除" @click="deleteBookList(index)" />
          </template>
        </van-swipe-cell>
      </li>
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
  z-index -1
  .bookShelf-content
    width 100%
</style>
