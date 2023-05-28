// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV }) // 使用当前云环境
const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  const result = event.result
  const wxContext = cloud.getWXContext()
  db.collection('userResult_hb').where({
    openid: wxContext.OPENID
  }).orderBy('createTime','asc').get().then(res=>{
    let theOldest = res.data[0]//第一条就是最老的数据。
    console.log(theOldest._id)
    db.collection('userResult_hb').doc(theOldest._id).remove()//删除这条数据
    db.collection('userResult_hb').add({//增加新数据
      data:{
        result_hb: result,
        posttime: db.serverDate(),
        openid: wxContext.OPENID
    }})
  })

  // db.collection('userResult').add({//增加新数据
  //   data:{
  //     result: "好好地",
  //     posttime: db.serverDate(),
  //     openid: wxContext.OPENID
  // }})

  // db.collection('userInfo').where({
  //   _openid: wxContext.OPENID
  // }).remove()
}