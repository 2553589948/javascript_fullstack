let sum = 0
for (let i = 0; i < 10000000; i++) { // 耗时任务,把耗时任务给web-worker处理
  sum += i
}
// this.postMessage(sum) // 发出消息
this.postMessage(`${sum}`)