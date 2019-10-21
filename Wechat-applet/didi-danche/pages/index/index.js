Page({
  data: {
    markers: [],
    longitude: 116.404582,  //经度
    latitude: 39.915223,   //纬度
    scale: 18,
  },
  onLoad() {
    // 微信赋予小程序可以调用的API
    wx.showLoading({
      title: '获取坐标中',
      mask: true,
      success: (result) => {
        
      },
      fail: () => {},
      complete: () => {}
    });
    //获得手机的GPS
    wx.getLocation({
      type: 'gcj02',
      altitude: false,
      success: (result) => {
        let {longitude, latitude} = result
        // console.log(longitude, latitude)
        this.tocreateMarkers(longitude,latitude)
        this.setData({
          longitude,
          latitude
        }, () => {
          wx.hideLoading();
        })
      },
      fail: () => {},
      complete: () => {}
    });
      
  },
  // onLoad先执行
  onReady() {
    //地图上下文环境
    this.mapCtx = wx.createMapContext('myMap');
      
  },

  toVisit(e) {
    console.log(e)
  },
  toScan() {
    return wx.scanCode({
      success: (res) => {
        // console.log(res)
        wx.showModal({
          title: 'scan',
          content: JSON.stringify(res)
        })
      }
    })
  },
  toUser() {

  },
  toMsg() {

  },
  toReset() {
    // 当你使用地图来来去去的时候,再回到到当初的起点
    this.mapCtx.moveToLocation()
    this.setData({
      scale: 18
    })
  },
  tocreateMarkers(longitude, latitude) {
    let markers = [
      {
        "id": 1,
        "iconPath": "/images/map-bicycle.png",
        "latitude": latitude,
        "longitude": longitude,
        "width": 52.5,
        "height": 30,
        "callout": {}
      }
    ]
    this.setData({
      markers
    })
  }
})