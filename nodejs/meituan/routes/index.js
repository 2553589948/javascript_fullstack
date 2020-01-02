import v1 from './v1'
export default app => {
  // 路由比较复杂
  app.use('/v1', v1)
}