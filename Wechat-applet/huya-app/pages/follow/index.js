// pages/follow/index.js
const navCont = require('../../assets/db/tabs2')
const allLives = require('../../assets/db/allLives')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navCont,
    allLives,
    navtabs: [],
    allLiveCont: [],
    currentTab: 0,
    navScrollLeft: 0,
    conHeight: 0
  },

  login() {
    wx.showActionSheet({
      itemList: ['微信一键登录','HY帐号登录'],
      itemColor: 'orangered',
      success: (result) => {
        console.log(result)
        if(result.tapIndex == 0){
          wx.navigateTo({
            url:'/pages/wclogin/wclogin'
          })
        }else if(result.tapIndex == 1){
          wx.navigateTo({
            url:'/pages/hylogin/hylogin'
          })
        }
      },
      fail: () => {},
      complete: () => {}
    });
      
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
    this.requestCart(this.data.currentTab)
    let w = wx.getSystemInfoSync().windowWidth // 获取窗口宽度
    console.log(w)
    this.setData({
      windowWidth: w
    })
  },
  switchNav (e) {
    console.log(e)
    let idx = e.currentTarget.dataset.current
    var singleNavWidth = this.data.windowWidth / 8
    this.setData({
      currentTab: idx,
      navScrollLeft: (idx - 1) * singleNavWidth
    })
    this.requestCart(idx)
  },
  switchTab (e) {
    console.log(e)
    var singleNavWidth = this.data.windowWidth / 8
    if (e.detail.source == 'touch') {
      this.setData({
        currentTab: e.detail.current,
        navScrollLeft: (e.detail.current - 1) * singleNavWidth
      })
    }
    this.requestCart(e.detail.current)
  },
  requestCart(idx) {
    wx.request({
      url: `http://localhost:3000/${idx}`,
      success: (res) => {
        console.log(res.data)
        // console.log(res);
        const conHeight = Math.ceil(navCont[idx].length / 2) * 290
        this.setData({
          // allLiveCont: res.data,
          conHeight: conHeight
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.request({
      url: 'http://localhost:3000/navData',
      success: (res) => {
        console.log(res.data)
        // console.log(res);
        this.setData({
          navtabs: res.data
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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