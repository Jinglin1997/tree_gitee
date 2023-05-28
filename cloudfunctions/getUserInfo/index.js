// 云函数入口文件
const cloud = require('wx-server-sdk');
// 初始化 cloud
cloud.init({
  // API 调用都保持和云函数当前所在环境一致
  env: cloud.DYNAMIC_CURRENT_ENV
})
const db = cloud.database();
// 云函数入口函数
exports.main = async (event, context) => {
  return saveuserinfo();
};
async function saveuserinfo() {
  const wxContext = cloud.getWXContext()
  let openid = wxContext.OPENID;
  let returncode = 100;
  let userInfo;
  await db.collection("userInfo").where({
    openid:openid
  }).get().then(res =>{
    if(res.data.length==0){
      returncode = 200;
    }else if(res.data.length==1){
      returncode = 201;
      userInfo=res.data;
    }else{
      returncode = 400;
    }
  });
  return {
  	openid,
    returncode,
    userInfo
  }
};
