<template>
  <div class="category-detail-wrapper">
    <!-- {{curid}} -->
    <div class="custom" v-if="categoryCourses[curid || 0]">
      <div class="custom__mod"
      v-for="(item, index) in categoryCourses[curid || 0].customMods" :key="index">
        <h2 class="common-title">{{item.commonTitle}}</h2>
        <ul class="common__course-list">
          <li class="common__course-item" v-for="(list, index) in item.courses" :key="index">
            <router-link to="" class="common__course-link">
              <div class="common__course-pic-wrap">
                <img class="common__course-pic" :src="list.coursePic" alt="">
              </div>
              <h3 class="common__course-title">{{list.courseTitle}}</h3>
              <p class="common__course-price">{{list.coursePrice}}</p>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      categoryCourses: {}
    }
  },
  computed: {
    curid () {
      return this.$route.query.id
    }
    // test () {
    //   return this.curid
    //     ? this.categoryCourses[this.curid].customMods
    //     : this.categoryCourses[0].customMods
    // }
  },
  created () {
    this.$http.get('http://localhost:8080/static/courseCategory.json')
      .then((res) => {
        console.log(res)
        if (res.data.errno === 0) {
          this.categoryCourses = res.data.data
          // console.log(res.data.data)
        }
      })
  }
}
</script>

<style lang="css" scoped>
.common-title {
  position: relative;
  height: 22px;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  letter-spacing: 4px;
  color: #777;
  font-weight: inherit;
}
.common__course-list {
  margin-top: 14px;
  padding: 0 10px 8px;
  font-size: 0;
}
.common__course-item {
  display: inline-block;
  margin-bottom: 10px;
  width: 50%;
  vertical-align: top;
}
.common__course-link {
  display: block;
  border-radius: 4px;
  padding-bottom: 10px;
  font-size: 0;
}
.common__course-item:nth-child(odd) .common__course-link {
  margin-right: 3px;
}
.common__course-item:nth-child(even) .common__course-link {
  margin-left: 3px;
}
.common__course-pic-wrap {
  overflow: hidden;
  position: relative;
  border-radius: 4px;
  padding-top: 56%;
  width: 100%;
}
.common__course-pic {
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 4px;
  width: 100%;
  height: 100%;
}
.common__course-title {
  margin-top: 7px;
  padding: 0 4px;
  height: 40px;
  font-size: 16px;
  line-height: 20px;
  color: #000;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  font-weight: inherit;
}
.common__course-price {
  padding-left: 4px;
  margin-top: 5px;
  font-size: 14px;
  line-height: 14px;
  color: #23b8ff;
}
</style>
