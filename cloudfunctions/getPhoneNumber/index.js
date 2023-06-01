const cloud = require('wx-server-sdk')
cloud.init({
    env: cloud.DYNAMIC_CURRENT_ENV
})
 
// 云函数入口函数
// exports.main = async (event, context) => {
//     let code = event.code
//     try {
//         const result = await cloud.openapi.phonenumber.getPhoneNumber({
//             code
//         })
//         return result
//     } catch (err) {
//         throw err
//     }
// }

  exports.main = async(event,context)=>{
    const wxContext = cloud.getWXContext()
    var mobile = event.weRunData.data.phoneNumber;
    return mobile
  }