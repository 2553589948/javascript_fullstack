// pages/hylogin/hylogin.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    curId: 'login',
    information: {
      phone: '',
      password: '',
      yzm: ''
    }
  },

  switchTab(e) {
    // console.log(e)
    const id = e.currentTarget.dataset.id
    this.setData({
      curId: id
    })
  },

  bindPassword(e) {
    // console.log(e)
    this.setData({
      'information.password': e.detail.value
    })
  },
  bindPhone(e) {
    this.setData({
      'information.phone': e.detail.value
    })
  },
  bindYzm(e) {

    this.setData({
      'information.yzm': e.detail.value
    })
  },

  formSubmit() {
    if (this.data.information.password && this.data.information.phone && this.data.information.yzm) {
      wx.setStorage({
        key: 'information',
        data: this.data.information,
        success: (result) => {
          wx.showToast({
            title: '注册成功',
            icon: 'success',
            duration: 1500
          })
          setTimeout( () => {
            this.setData({
              curId: 'login'
            })
          }, 1500)  
        },
        fail: () => { },
        complete: () => { }   /* 成功或失败都执行 */
      })
    } else {
      wx.showModal({
        title: '提示',
        content: '请填写完整',
        showCancel: false,
        confirmText: '确定',
        confirmColor: '#3CC51F',
        success: (result) => {
          if (result.confirm) {

          }
        },
        fail: () => { },
        complete: () => { }
      });
    }
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