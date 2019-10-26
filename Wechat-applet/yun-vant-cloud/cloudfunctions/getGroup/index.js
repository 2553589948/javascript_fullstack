// 云函数入口文件
const cloud = require('wx-server-sdk')
// 指明环境id
const env = 'kyle-wxc99'

cloud.init()

const db = cloud.database({env})

// 云函数入口函数
//getWXContext()方法,event都能获取用户信息
exports.main = async (event, context) => {
  const openId = cloud.getWXContext().OPENID

  let groupList = await db.collection('user-group')
    .where({
      userId: openId
    })
    .get()
  let returnResult = []
  for (let item of groupList.data) {
    const oneGroup = await db.collection('group')
      .where({
        _id: item.groupId,
        delete: false
      })
      .get()
    if (oneGroup.data.length > 0) {
      // const userInfo = await db.collection('user')
      //   .where({
      //     openId: oneGroup.data[0].createBy
      //   }).get()
      // oneGroup.data[0].createBy = userInfo.data[0]
      // oneGroup.data[0].relateUserGroupId = item._id
      returnResult.push(oneGroup.data[0])
    } 
  }
  return returnResult.sort((a, b) => a.createTime < b.createTimem ? 1 : -1)
}