// 云函数入口文件
const cloud = require('wx-server-sdk');
cloud.init({
  env: "kelptree-2g5dhw6sb039e010",
  traceUser: true,
})

// 云函数入口函数
exports.main = async (event) => {
  const { posttime, nickName, avatarUrl} = event
  const OPENID = cloud.getWXContext()

  // 如果数据库存在当前用户信息，则直接返回当前用户信息（登录），如果数据库内没有当前用户信息，则注册。
  // 1. 初始化集合
  const db = cloud.database()

  // 2. 指定集合
  const userInfo = db.collection('userInfo')

  // 3. 查询当前用户是否注册过
  const { data } = await userInfo.where({
    openid: OPENID
  }).get()

  if (data.length == 0){
    // a. 数据库里没有当前用户的信息，注册
    const { _id } = await userInfo.add({
      data:{
        posttime,
        nickName,
        avatarUrl,
        // money:0,
        // credit:0,
        // message:0,
        openid: OPENID
      }
    })

    // 接收_id，快速返回该id的数据
    const user = await userInfo.doc(_id).get()

    return {
      data: user
    }
  } else{
    // b. 数据库里存在当前用户信息，登录
    return {
      data: data[0]
    }
  }
  
}