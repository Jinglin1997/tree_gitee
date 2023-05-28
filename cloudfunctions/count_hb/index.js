// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV }) // 使用当前云环境

const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  const count = await db.collection('userResult_hb').where({
    openid: wxContext.OPENID
  }).count()

  console.log(count)

  return {
    total: count.total
  }
}