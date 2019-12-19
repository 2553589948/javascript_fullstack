// 为什么要依赖收集 要具体收集哪一块的数据发生了变化
new Vue({
  template: `
    <div>
      <span>{{text1}}</span>
      <span>{{text2}}</span>
    </div>
  `,
  data: {
    text1: 'text1',
    text2: 'text2',
    text3: 'text3'
  }
})

this.text3 = 'lalala'  // render函数不执行
