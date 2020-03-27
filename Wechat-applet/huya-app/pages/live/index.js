// pages/live/index.js
const navtabs = require('../../assets/db/tabs')
const allLives = require('../../assets/db/allLives')
let topheight, scrollTop, height

Page({

  /**
   * 页面的初始数据
   */
  data: {
    navtabs,
    curId: 'all',
    allLives,
    isfixed: false,
    topheight,
    height,
    scrollTop,
    navScrollLeft: 0
  },

  switchTab(e) {
    console.log(e)
    let curIdx = e.currentTarget.dataset.index
    let singleNavWidth = this.data.windowWidth / 5
    this.setData({
      curId: e.currentTarget.dataset.id,
      navScrollLeft: (curIdx - 1) * singleNavWidth
    })
  },

  gotoDetail(e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '/pages/detail/index' + '?id=' + id
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var w = wx.getSystemInfoSync().windowWidth
    console.log(w)
    this.setData({
      windowWidth: w
    })
  },

// 实时监控滚动距离顶部的位置
  onPageScroll: function (e) {
    // console.log(e)
    this.setData({
      scrollTop: e.scrollTop
    })
    // var that = this
    if (e.scrollTop >= this.data.topheight + this.data.height) {
      this.setData({
        isfixed: true
      })
    } else if (e.scrollTop < this.data.topheight + this.data.height) {
      this.setData({
        isfixed: false
      })
    }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    wx.createSelectorQuery().select('#navfix')
    .boundingClientRect( rect =>{
      console.log(rect) 
      this.setData({
        topheight: rect.top,
        height: rect.height
      })
    }).exec();
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})