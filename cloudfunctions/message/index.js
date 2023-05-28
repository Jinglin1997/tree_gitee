// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV }) // 使用当前云环境

// 云函数入口函数
exports.main = async(event, context) => {
  try {
    const result = await cloud.openapi.subscribeMessage.send({
      touser: event.openid, //要推送给那个用户
      page: 'pages/homepage/index', //要跳转到那个小程序页面
      data: {//推送的内容
        name3: {
          value: "作者",
        },
        thing1: {
          value: event.name,
        }
      },
      templateId: 'Z4LxU0XjF--a1N_7KWDo2DBkYxHY0hc1-aJi2_2vfW0' //模板id
    })
    console.log(result)
    return result
  } catch (err) {
    console.log(err)
    return err
  }
}
