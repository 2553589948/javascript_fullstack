<template>
  <div id="app">
    <h1>cliver blog</h1>
    <button @click="changeColor">show/hide highlighted</button>
    <BlogPost v-for="blogPost in visibileBlogPosts" :key="blogPost.title" :post="blogPost"></BlogPost>
    <!-- <router-view/> -->
  </div>
</template>

<script lang="ts">
import BlogPost, {Post} from "./components/BlogPost.vue";
import { Component,Vue } from 'vue-property-decorator';
@Component({
  components: {
    BlogPost
  }
})

export default class App extends Vue {
  private blogPosts: Post[] = [
    {
      title: 'my name is kyle',
      body: 'welcome to my blog',
      author: 'kyle',
      datePosted: new Date(2020, 0, 7) // 不取具体的时分秒
    },
    {
      title: 'my name is kyle111',
      body: 'welcome to my blog',
      author: 'kyle',
      datePosted: new Date(2020, 0, 8), // 不取具体的时分秒
      highlighted: true
    },
    {
      title: 'my name is kyle222',
      body: 'welcome to my blog',
      author: 'kyle',
      datePosted: new Date(2020, 0, 9) // 不取具体的时分秒
    }
  ]

  public showhighlighted: boolean = true

  get visibileBlogPosts () {
    return this.blogPosts.filter((post: Post) => post.highlighted === undefined || post.highlighted === this.showhighlighted)
  }

  public changeColor () {
    this.showhighlighted = !this.showhighlighted
  }
}
</script>

<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
