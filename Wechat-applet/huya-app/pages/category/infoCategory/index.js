// pages/category/infoCategory/index.js
const infoCategorys = require('../../../assets/db/infoCategory')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeId: 'all',
    infoCategory: {}
  },

  switchTab(e) {
    const id = e.currentTarget.dataset.id
    this.setData({
      activeId: id
    })
  },

  gotoDetail(e) {
    console.log(e)
    const smallId = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '/pages/detail/index' + '?id=' + smallId,
      success: (result) => {
        
      },
      fail: () => {},
      complete: () => {}
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options)
    const id = options.id
    let infoCategory = infoCategorys.filter(function(item) {
      return item.categoryId == id
    })
    this.setData({
      infoCategory
    })
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