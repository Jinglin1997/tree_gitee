// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV }) // 使用当前云环境
const db=cloud.database();
// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  const openId= wxContext.OPENID;
  const name = wx.name;
  var successflg=false;
  const user = await db.collection('userInfo').where({
    openid: openId
  }).get();
  
  if(!user.data[0]){
    const res=await db.collection('userInfo').add({
      data: {
        openid: openId,
        name: name
      }})
      if(!res._id){
        successflg=true;
      }
  }else{
    successflg=true;
  }
  return {
    successflg
  }
}