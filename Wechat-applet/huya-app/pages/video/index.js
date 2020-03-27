// pages/video/index.js
const entities = require('../../assets/db/videoes');
const navtabs = require('../../assets/db/tabs');
let currentVideo
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navtabs,
    // activeIndex: 'hot',
    curId: 'hot',
    sliderOffset: 0,
    sliderLeft: 0,
    clicksIcon: '../../assets/icons/video.png',
    clicks: 2200,
    commentsIcon: '../../assets/icons/comment.png',
    comments: 600,
    entities,
    currentVid: null
  },

  switchTab(e) {
    // console.log(e)
    this.setData({
      //在html页面设置id="{{item.id}}"亦可以使用注释内容的做法
      // activeIndex: e.currentTarget.id,
      curId: e.currentTarget.dataset.id
    })
  },

  play(event){
    const target = event.target;
    const currentVid = target.dataset.vid;
    if(this.data.currentVid !== null){
      currentVideo.pause();
    }
    if(currentVid){
      currentVideo = wx.createVideoContext(`${currentVid}`);
      currentVideo.play()
    }
    this.setData({
      currentVid
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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