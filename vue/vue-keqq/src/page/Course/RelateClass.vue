<template>
  <div class="relateClass-wrapper">
    <div class="teacher-recom" style="display:block">
      <div class="rel-class__title">老师推荐课程</div>
      <ul class="teacher-recom__list">
        <li class="course list-view__item" v-for="(item, index) in recomList" :key="index">
          <div class="course__cover">
            <img :src="item.img" alt="">
            <span class="course__cover-tips course__cover-tips--status">{{item.status}}</span>
          </div>
          <h3 class="course__name">{{item.name}}</h3>
          <p class="course__info">
            <span class="course__info-item u-message">{{item.info}}</span>
          </p>
          <p class="course__info-item u-price z-free">{{item.price}}</p>
        </li>
      </ul>
      </div>
  </div>
</template>

<script>
export default {
  mounted () {
  },
  data () {
    return {
      recomList: []
    }
  }
}
</script>

<style scoped>
.relateClass-wrapper {
  padding-top: 67.2%;
}
.teacher-recom{
  background: #fff;
  width: 100%;
}
.rel-class__title {
    padding: 10px 15px 0;
    position: absolute;
    margin: 10px 0;
    font-size: 18px;
    line-height: 25px;
    color: #000;
    text-align: left;
}
.teacher-recom__list{
  position: absolute;
  top:40px;
  text-align: left;
}
.course {
    position: relative;
    padding: 15px 15px 15px 166px;
    height: 80px;
    line-height: 20px;
    background: #fff;
}
.course__cover-tips {
    position: absolute;
    height: 16px;
    font-size: 10px;
    line-height: 16px;
    color: #fff;
    background-color: rgba(0,0,0,.7);
}
.course__cover-tips--status {
    bottom: 0;
    left: 0;
    width: 100%;
    text-indent: 4px;
}
.course__cover {
    overflow: hidden;
    position: absolute;
    top: 15px;
    left: 15px;
    border-radius: 4px;
    width: 140px;
    height: 80px;
}
.course__cover img{
    width: 140px;
    height: 80px;
}
.course__name {
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    height: 40px;
    width: 100%;
    max-height: 40px;
    font-size: 16px;
    line-height: 20px;
    white-space: inherit;
    white-space: pre-wrap;
    text-overflow: ellipsis;
    word-break: break-word;
    -webkit-line-clamp: 2;
}
.course__info {
    overflow: hidden;
    margin: 1px 0;
    max-height: 20px;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
}
.u-message {
    display: inline-block;
    margin-right: 20px;
    height: 12px;
    font-size: 12px;
    line-height: 12px;
    color: #bbb;
}
.u-price.z-free {
    color: #5fb41b;
    font-size: 16px;
}
</style>
