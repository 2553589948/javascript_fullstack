<template>
  <div class="weather-wrapper">
    <div class="container" :class="{showbar: showWeather}">
      <div class="bg"></div>
      <div class="address">
        <div class="change-city" @click="resetCity">切换城市</div>
        <p style="height: 21px">{{localTime}}</p>
        <div class="city-info">
          <dl>
            <dt class="font18">{{cityData.city}}</dt>
          </dl>
          <dl>
            <dt>{{cityData.weather}}</dt>
          </dl>
          <dl>
            <dt class="font45">{{cityData.temperature}}℃</dt>
          </dl>
          <dl>
            <dt>风力：{{cityData.windPower}} | 风向：{{cityData.windDirection}} | 空气湿度：{{cityData.humidity}}%</dt>
          </dl>
        </div>
      </div>
      <div class="feature">
        <div class="group" v-if="futureTem && futureTem[1]">
          明日：
          <span class="tm">白天：{{futureTem[1].dayTemp}} {{futureTem[1].dayWeather}}
            {{futureTem[1].dayWindDir}} {{futureTem[1].dayWindPower}}
          </span>
          <span class="tm">夜间：{{futureTem[1].nightTemp}} {{futureTem[1].nightWeather}}
            {{futureTem[1].nightWindDir}} {{futureTem[1].nightWindPower}}</span>
        </div>
        <div class="group" v-if="futureTem && futureTem[2]">
          后天：
          <span class="tm">白天：{{futureTem[2].dayTemp}} {{futureTem[2].dayWeather}}
            {{futureTem[2].dayWindDir}} {{futureTem[2].dayWindPower}}
          </span>
          <span class="tm">夜间：{{futureTem[2].nightTemp}} {{futureTem[2].nightWeather}}
            {{futureTem[2].nightWindDir}} {{futureTem[2].nightWindPower}}</span>
        </div>
      </div>
      <div class="echart-container" ref="echartContaier"></div>
      <div class="map-container" ref="mapContainer"></div>
      <div class="select-city-box" v-show="showCity">
        <van-area :area-list="areaList" :columns-num="2" title="选择城市"
        @confirm="changeCity"
        @cancel="showCity = false"
        />
      </div>
    </div>
    <div class="weather-mask" v-show="showWeather" @click="_hidebar"></div>
  </div>
</template>

<script>
import AreaList from '../assets/js/area'
export default {
  name: "v-weather",
  props: {
    showWeather: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      localTime: '',
      cityData: {},
      futureTem: [],
      seriesData: [],
      areaList: AreaList,
      showCity: false
    };
  },
  created () {
    setInterval(() => {
      this.localTime = this.getLocalTime()
    }, 1000)
  },
  mounted () {
  },
  methods: {
    getLocalTime () {
      return new Date().toLocaleTimeString()
    },
    initMap () {
      let _self = this
      var map = new AMap.Map(this.$refs.mapContainer, {
        resizeEnable: true
      })
      AMap.plugin('AMap.CitySearch', function () {
        var citySearch = new AMap.CitySearch()
        citySearch.getLocalCity(function (status, result) {
          if (status === 'complete' && result.info === 'OK') {
            // 查询成功，result即为当前所在城市信息
            console.log(result)
            _self.getCurrentCityData(result.city)
          }
        })
      })
    },
    getCurrentCityData (cityName) {
      let _self = this
      AMap.plugin('AMap.Weather', function() {
          //创建天气查询实例
          var weather = new AMap.Weather()

          //执行实时天气信息查询
          weather.getLive(cityName, function(err, data) {
              console.log(err, data)
              _self.cityData = data
          })
          //未来天气
          weather.getForecast(cityName, function(err, data) {
            console.log(err, data)
            _self.futureTem = data.forecasts
            _self.futureTem.map((item, index) => {
              _self.seriesData.push(item.dayTemp)
            })
            _self.initEchart()
          })
      })
    },
    initEchart () {
      let dom = this.$refs.echartContaier
      //echarts已经引入了，初始化dom
      let myChart = echarts.init(dom)
      let app = {}, option = null
      option = {
        xAxis: {
            show: true, // 默认为true将x轴展示
            splitLine: {show: false},
            type: 'category',
            data: ['今天', '明天', '后天', '三天后'],
            axisLine: {
              lineStyle: {
                color: '#fff'
              }
            },
            axisTick: {
              show: false
            }
        },
        yAxis: {
            show: false,
            type: 'value',
            axisLine: {
              show: false,
              lineStyle: {
                color: '#fff'
              }
            },
            axisTick: {show: true},
            splitLine: {show: false}
        },
        tooltip: {
          trigger: 'axis',
          formatter: function(params) {
            var relVal = params[0].name
            for (let i = 0, l = params.length; i < l; i++) {
              relVal += params[i].value + '℃'
            }
            return relVal
          }
        },
        legend: {
          data: ['气温']
        },
        series: [{
            data: this.seriesData,
            type: 'line',
            label: {
              normal: {
                show: true,
                position: 'top'
              }
            }
        }]
      }
      myChart.setOption(option, true)
    },
    changeCity (val) {
      console.log(val)
      let cityName = val[1].name
      this.seriesData = []
      this.getCurrentCityData(cityName)
      this.showCity = !this.showCity
    },
    resetCity () {
      this.showCity = !this.showCity
    },

    _hidebar () {
      this.$emit('hidebar')
    }
  }
}
</script>

<style lang="stylus" scoped>
.font18
  font-size 18px
.font45
  font-size 45px
.container
  width 80vw
  height 100vh
  position fixed
  top 0
  right -80vw
  padding 10px
  transform translateZ(0)
  opacity 0
  z-index 2020
  overflow hidden
  transition all 0.3s ease
  box-sizing border-box
  &.showbar
    transform translateX(-80vw)
    opacity 1
  .bg
    width 100%
    height 100%
    position absolute
    left 0
    top 0
    bottom 0
    background rgba(0, 0, 0, 0.9)
    filter blur(2px)
    z-index -1
  .address
    color #fff
    .change-city
      position absolute
      right 10px
      top 10px
      color #fff
    .city-info
      text-align center
      line-height 1.4
  .feature
    margin-top 30px
    .group
      line-height 22px
      border-radius 4px
      background-color rgba(255, 255, 255, 0.26)
      color rgba(16, 16, 16, 1)
      font-size 16px
      margin-bottom 10px
      padding 0 10px
      .tm 
        margin-left 10px
        color #fff
        font-size 12px
  .echart-container
    width 100%
    height 42vh
  .select-city-box
    width 100%
    position fixed
    left 0
    bottom 0
.weather-mask
  position fixed
  width 100%
  margin 0 auto
  top 0
  left 0
  bottom 0
  right 0
  z-index 2019
  background rgba(0, 0, 0, 0.6)
</style>
