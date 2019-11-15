<template>
  <div>
    <div class="list">
      <div class="area">
        <div class="cities">
          <div class="city-character-list"
          v-for="(val, key) of cities" :key="key">
            <div class="title" :ref="key">{{key}}</div>
            <div class="area-city">
              <div class="city-item border-bottom"
              v-for="item of val" :key="item.id" @click="handleCity">
                {{item.name}}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ul class="characters">
      <li class="item" v-for="item of characters" :key="item"
      @click="handleCharacterClick">
        {{item}}
      </li>
    </ul>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import axios from 'axios'
export default {
  data () {
    return {
      cities: []
    }
  },
  computed: {
    characters () {
      return Object.keys(this.cities)
    }
  },
  methods: {
    handleCharacterClick (e) {
      const char = e.target.innerText
      console.log(this.$refs[char])
      this.scroll.scrollToElement(this.$refs[char][0])
    },
    handleCity () {}
  },
  mounted () {
    // axios.get('/static/mock/city.json')
    //   .then(() => {})
    // 反向代理 代理的是客户端(跨域的解决方式之一)
    // webpack-dev-server启动本地服务 localhost:8080
    axios.get('/api/city.json')
      .then((res) => {
        // console.log(res)
        this.cities = res.data.data.cities
      })
    this.scroll = new BScroll(
      document.querySelector('.list')
    )
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/styles/variable.scss";

.list {
  overflow: hidden;
  position: absolute;
  top: 2.22rem;
  left: 0;
  right: 0;
  bottom: 0;
  .area {
    .title {
      height:.24rem;
      line-height: .24rem;
      font-size: .26rem;
      padding: .24rem .3rem;
      background: $homeBgColor;
    }
    .area-city {
      padding: .1rem .5rem .1rem .24rem;
      overflow: hidden;
      .location-city {
        background: $bgColor;
        color: #fff;
      }
      .city-button {
        float: left;
        height: .4rem;
        line-height: .4rem;
        font-size: .26rem;
        width:29%;
        text-align: center;
        margin: .1rem;
        border: .02rem solid #ccc;
        border-radius: .06rem;
      }
    }
    .cities {
      .city-character-list {
        .area-city {
          padding: 0;
          .city-item {
            height: .5rem;
            line-height: .5rem;
            font-size: .26rem;
            padding: .1rem .5rem .1rem .34rem;
          }
        }
      }
    }
  }
}
.characters {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  position: absolute;
  top: 2rem;
  bottom: 0;
  right: 0;
  width: .4rem;
  font-size: .24rem;
  font-weight: bold;
  .item {
    color: $bgColor;
    line-height: .4rem;
  }
}
</style>
