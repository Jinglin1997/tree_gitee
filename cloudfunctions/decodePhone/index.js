const cloud = require('wx-server-sdk')
// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  console.log("cloudID: ",event.cloudID)
  return await cloud.getOpenData({
    list:[event.cloudID],
  })
}
