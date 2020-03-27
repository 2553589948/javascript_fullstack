//index.js
//获取应用实例
const app = getApp()
const homeslides = require('../../assets/db/home.js')
const allLives = require('../../assets/db/allLives')

Page({
  data: {
    homeslides,
    interval: 3000,
    duration: 800,
    category: [
      {
        id: 'lol',
        thumb: '../../assets/icons/lol.png',
        name: '英雄联盟'
      },
      {
        id: 'wzry',
        thumb: '../../assets/icons/wzry.png',
        name: '王者荣耀'
      },
      {
        id: 'seeTogether',
        thumb: '../../assets/icons/seeTogether.png',
        name: '一起看'
      },
      {
        id: 'xingxiu',
        thumb: '../../assets/icons/xingxiu.png',
        name: '星秀'
      },
      {
        id: 'jdqs',
        thumb: '../../assets/icons/jdqs.png',
        name: '绝地求生'
      },
      {
        id: 'hpjy',
        thumb: '../../assets/icons/hpjy.png',
        name: '和平精英'
      },
      {
        id: 'huwai',
        thumb: '../../assets/icons/huwai.png',
        name: '户外'
      },
      {
        id: 'lolchess',
        thumb: '../../assets/icons/lolchess.png',
        name: 'LOL云顶之弈'
      },
      {
        id: 'kpl',
        thumb: '../../assets/icons/kpl.png',
        name: '王者模拟战'
      },
      {
        id: 'more',
        thumb: '../../assets/icons/more.png',
        name: '更多'
      }
    ],
    allLives
  },

  gotoDetail(e) {
    // console.log(e)
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '/pages/detail/index' + '?id=' + id
    })
  },

  gotoMainCategory(e) {
    console.log(e)
    const id = e.currentTarget.dataset.id
    if(id == 'more') {
      wx.navigateTo({
        url: '/pages/category/mainCategory/index' + '?id=' + id
      })
    }else {
      wx.navigateTo({
        url: '/pages/category/infoCategory/index' + '?id=' + id
      })
    }
  },

  //事件处理函数
  bindViewTap: function() {
    
    wx.navigateTo({
      url: '',
    })
  },


  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
