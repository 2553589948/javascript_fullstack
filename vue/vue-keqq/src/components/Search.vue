<template>
  <div class="search">
    <div class="head">
      <div>
        <img src="http://nos.netease.com/mailpub/hxm/yanxuan-wap/p/20150730/style/img/icon-normal/search2-2fb94833aa.png" alt="">
        <input type="text" confirm-type="search" focus="true" v-model="words" @focus="inputFocus" @input="tipsearch" @confirm="searchWords" placeholder="搜索老师、机构、课程">
        <img @click="clearInput" class="del" src="http://nos.netease.com/mailpub/hxm/yanxuan-wap/p/20150730/style/img/icon-normal/clearIpt-f71b83e3c2.png" alt="">
      </div>
      <div @click="cancel">取消</div>
    </div>
    <div class="history" v-if="historyData.length!==0">
      <div class="t">
        <div>历史记录</div>
        <div @click="clearHistory"></div>
      </div>
      <div class="cont">
        <div v-for="(item, index) in historyData" :key="index" @click="searchWords" :data-value="item.keyword">
          {{item.keyword}}
        </div>
      </div>
    </div>
    <div class="history hotsearch">
      <div class="t">
        <div>热门搜索</div>
      </div>
      <div class="cont">
        <div v-for="(item, index) in hotData" :key="index" @click="searchWords" :data-value="item.keyword">
          {{item.keyword}}
        </div>
      </div>
    </div>
    <div class="searchtips" v-if="words">
      <div v-if="tipsData.length != 0">
        <div v-for="(item, index) in tipsData" :key="index" @click="searchWords" :data-value="item.name">
          {{item.name}}
        </div>
      </div>
      <div class="nogoods" v-else>数据库暂无此类商品...</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      words: '',
      historyData: [
        {keyword: '你好'},
        {keyword: 'vue'},
        {keyword: '哈哈哈'}
      ],
      hotData: [
        {keyword: '你好'},
        {keyword: 'vue'},
        {keyword: '哈哈哈'}
      ],
      tipsData: [
        {name: '你好'},
        {name: 'vue'},
        {name: '哈哈哈'}
      ]
    }
  },
  methods: {
    tipsearch () {},
    inputFocus () {},
    searchWords () {},
    cancel () {
      this.$router.go(-1)
    },
    clearInput () {
      this.words = ''
    },
    clearHistory () {}
  }
}
</script>

<style lang="less" scoped>
.search{
  height: 100%;
  position: relative;
  background: #f4f4f4;
  .head{
    height: 52px;
    display: flex;
    padding: 0 16px;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    // border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    div:nth-child(1) {
      height: 30px;
      display: flex;
      align-items: center;
      background: #f4f4f4;
      border-radius: 25px;
      img{
        display: inline-block;
        width: 15px;
        height: 15px;
        padding: 0 10px;
      }
      input{
        display: inline-block;
        width: 240px;
        height: 30px;
        margin-left: 5px;
        border: none;
        background: #f4f4f4;
      }
      .del{
        width: 26px;
        height: 26px;
        padding: 0;
      }
    }
    div:nth-child(2) {
      flex: 1;
      text-align: center;
    }
  }
  .searchtips{
    position: absolute;
    width: 100%;
    top: 52px;
    left: 0;
    bottom: 0;
    box-sizing: border-box;
    padding: 0 16px;
    z-index: 9;
    background: #fff;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    div{
      div{
        padding: 10px 0;
      }
    }
    .nogoods{
      text-align: center;
      margin-top: 150px;
    }

  }
  .history{
    background: #fff;
    padding: 16px;
    .t{
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 15px;
      div:nth-child(2) {
        width: 28px;
        height: 28px;
        background: url("http://nos.netease.com/mailpub/hxm/yanxuan-wap/p/20150730/style/img/icon-normal/del1-93f0a4add4.png") no-repeat;
        background-size: 100% 100%;
      }
    }
    .cont{
      display: flex;
      flex-wrap: wrap;
      div{
        padding: 5px 10px;
        border: 1px solid #999;
        margin: 0 15px 10px 0;
        border-radius: 30px;
      }
    }
  }
  .hotsearch{
    margin-top: 10px;
  }
}
</style>
