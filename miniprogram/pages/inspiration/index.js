// pages/shopping/index.js
let updatename = ''

Page({
// 获取用户openid
  getOpenid(){
    wx.cloud.callFunction({
      name:"get_openId"
    }).then(res=>{
      console.log("获取openId成功", res)
    }).catch(res=>{
      console.log("获取openId失败",res)
    })
  },

  //获取用户授权
  shouquan(){
    wx.requestSubscribeMessage({
      tmplIds: ['Z4LxU0XjF--a1N_7KWDo2DBkYxHY0hc1-aJi2_2vfW0'],
      success(res){
        console.log('授权成功',res)
      },
      fail(res){
        console.log('授权失败',res)
      }
    })
  },

  // 获取用户输入的名字
  getName(event){
    console.log(event.detail.value)
    updatename=event.detail.value
  },

  // 发送消息给单个用户
  sendone(){
    if(updatename==null||updatename===''){
      wx.showToast({
        icon:"none",
        title:'请输入课程名'
      })
      return 
    }
    //this.sendFun("ouINF5bLWcXiB7NB8gTqx_oA_IGY", updatename)
    this.sendFun("ouINF5ctNyzoEJdeDzRd6BnTDy7M", updatename)
  },

  // 发送订阅消息给多个用户
  sendmany(){
    if(updatename==null||updatename===''){
      wx.showToast({
        icon:"none",
        title:'请输入课程名'
      })
      return 
    }
    let users = [
      "ouINF5bLWcXiB7NB8gTqx_oA_IGY",
      "ouINF5ctNyzoEJdeDzRd6BnTDy7M"
    ]

    users.forEach(item=>{
      console.log(item)
      this.sendFun(item, updatename)
    })
  },

  // 封装的发送方法
  sendFun(openid, name){
    wx.cloud.callFunction({
      name:"message",
      data:{
        openid:openid,
        name:name
      }
    }).then(res=>{
      console.log("发送多条成功", res)
    }).catch(res=>{
      console.log("发送多条失败",res)
    })
  },
  
})