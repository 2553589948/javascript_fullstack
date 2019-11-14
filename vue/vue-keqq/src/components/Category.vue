<template>
  <div class="category__global-wrapper">
    <div class="category-header">
      <div class="header-searchBar">
        <div class="avatar">
        </div>
        <div class="search-cancel" style="display: none">取消</div>
        <form action="" class="header-search">
          <div class="search-tips">
            <i class="icon-font search-icon"></i>
            <span class="search-input-text">搜索老师、机构、课程</span>
          </div>
          <input type="search" class="search-input">
          <div class="search-reset">
            <div class="icon-close"></div>
          </div>
        </form>
      </div>
      <nav class="cate-list">
        <div class="cate-item-wrap">
          <div class="cate-item" v-for="(item, index) in cateItems" :key="index"
          @click="gotoDetail(index, item.cateId)" :class="{'active': activeIdx === index}">
            <div class="cate-icon"></div>
            <div class="cate-title">
              <span class="cate-title-short">{{item.cateTitle_short}}</span>
              <span class="cate-title-more" style="font-size: 0">互联网</span>
            </div>
          </div>
        </div>
      </nav>
    </div>
    <div class="sub-cate-wrap">
      <ul class="sub-cate-list" v-if="cateItems[activeIdx]">
        <li class="sub-cate" v-for="(item, index) in cateItems[activeIdx].cateInfo" :key="index">
          <div class="left">
            <router-link :to="{path: 'detail', query: {mt: cateId, st: item.subCateId, Name: item.subCateTitle}}">
              <div class="sub-cate-title">
                <i class="cate-icon"></i>
                {{item.subCateTitle}}
              </div>
            </router-link>
          </div>
          <div class="right">
            <ul class="sub-cate-item-wrap">
              <router-link v-for="(list, index) in item.subCates" :key="index" :to="{path: 'detail', query: {mt: cateId, st: item.subCateId, tt: list.subId, Name: list.subName}}">
                <li class="sub-cate-item">{{list.subName}}</li>
              </router-link>
            </ul>
          </div>
        </li>
      </ul>
    </div>
    <v-footer :current="current"></v-footer>
  </div>
</template>

<script>
import vFooter from './vFooter.vue'
export default {
  data () {
    return {
      current: 'category',
      cateItems: [],
      activeIdx: 0,
      cateId: 'it'
    }
  },
  created () {
    this.$http.get('http://localhost:8080/static/categoryItem.json')
      .then(res => {
        console.log(res)
        if (res.data.errno === 0) {
          this.cateItems = res.data.data
        }
      })
  },
  methods: {
    gotoDetail (idx, cateId) {
      this.activeIdx = idx
      this.cateId = cateId
    }
  },
  components: {
    'v-footer': vFooter
  }
}
</script>

<style lang="css" scoped>
.category__global-wrapper {
  width: 100%;
  min-height: 100%;
}
.category-header {
  position: fixed;
  width: 100%;
  background: url(https://9.url.cn/edu/mobilev2/pages/cate/img/top_bg@3x.e7ee89b.png) no-repeat;
  background-size: cover;
  background-color: #23b8ff;
  z-index: 10000;
}
.header-searchBar {
  width: auto;
  height: 32px;
  padding: 12px;
  background: inherit;
}
.header-search {
  position: relative;
  margin: 0;
  height: auto;
  /* border-radius: 16px; */
  line-height: 32px;
  /* background: #f2f2f6; */
}
.search-tips {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  font-size: 14px;
  text-align: center;
  color: #fff;
  background: #65cdff;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.search-input {
  display: block;
  position: relative;
  border: 0;
  border-radius: 0;
  padding-right: 20px;
  padding-left: 2px;
  width: 95%;
  height: 32px;
  font-size: 14px;
  line-height: 32px;
  background: transparent;
  outline: 0;
  pointer-events: auto;
}
.cate-item-wrap {
  display: flex;
  justify-content: space-around;
}
.cate-list .cate-item {
  display: inline-block;
  position: relative;
  color: #fff;
  padding: 0 5px;
  height: 74px;
  text-align: center;
}
.cate-icon {
  display: block;
  width: 24px;
  height: 24px;
  font-size: 24px;
  margin: 8px auto;
}
.cate-list .cate-item .cate-title {
  font-size: 12px;
  line-height: 16px;
  white-space: nowrap;
}
.cate-list .cate-item.active:after {
  content: '';
  display: block;
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 2px;
  border-bottom: 2px solid #fff;
}
.sub-cate-wrap {
  width: 100%;
  padding: 130px 0 55px;
}
.sub-cate {
  display: flex;
  padding: 20px 0 8px;
  border-bottom: .5px solid #ddd;
}
.sub-cate:last-child {
  border-bottom: 0;
}
.sub-cate .left {
  width: 100px;
  min-width: 100px;
  height: auto;
  flex-grow: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.sub-cate .left .sub-cate-title {
  font-size: 12px;
  color: #777;
}
.sub-cate .cate-icon {
  margin: 0 auto 8px;
  color: #23b8ff;
}
.sub-cate .right {
  width: auto;
  flex-grow: 1;
  overflow: hidden;
}
.sub-cate .right .sub-cate-item-wrap {
  margin-left: -1px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  padding-right: 16px;
}
.sub-cate .right .sub-cate-item {
  flex-grow: 0;
  display: inline-block;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  padding: 0 15px 12px;
  color: #000;
}
.sub-cate .right .sub-cate-item:before {
  content: '';
  position: absolute;
  border-left: 1px solid #ddd;
  top: 2px;
  left: 0;
  height: 16px;
}
</style>
