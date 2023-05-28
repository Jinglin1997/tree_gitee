// pages/sign/sign.js
var util = require('../../utils/util.js')
//自定义变量，存放用户名
let userName = ''
//自定义变量，存放账号
let Account = ''
//自定义变量，存放密码
let Password = ''
let Password2 = ''

Page({

  //获取用户输入的用户名/账号/密码
  getUserName(e){
    console.log("输入的用户名",e.detail.value);
    userName = e.detail.value
  },
  getAccount(e){
    console.log("输入的账号",e.detail.value);
    Account = e.detail.value
  },
  getPassword(e){
    console.log("输入的密码",e.detail.value);
    Password = e.detail.value
  },
  getPassword2(e){
    console.log("再次输入的密码",e.detail.value);
    Password2 = e.detail.value
  },

  //注册
  sign(){
    var Time = util.formatTime(new Date());
    //校验用户名
    if(userName.length<2){
      wx.showToast({
        title: '用户名至少2位',
        icon:"none"
      })
      return  //如果不满足，代码不再往下执行
    }
    if(userName.length>20){
      wx.showToast({
        title: '用户名最多20位',
        icon:"none"
      })
      return
    }
    //校验账号
    if(Account.length<5){
      wx.showToast({
        title: '账号至少5位',
        icon:"none"
      })
      return
    }
    //校验密码
    if(Password.length<5){
      wx.showToast({
        title: '密码至少5位',
        icon:"none"
      })
      return
    }
    //注册功能的实现
    wx.cloud.database().collection("users")
    .add({
      data:{
        userName:userName,
        Account:Account,
        Password:Password,
        Time: Time,
      }
    }).then(res=>{
      console.log("注册数据添加到数据库成功",res);
      //注册成功提示
      wx.showToast({
        title: '注册成功',
        icon:"success",
        duration:2000,
        success:function(){
        //提示框停留2秒后跳转到用户登录页
        setTimeout(function(){
          wx.navigateTo({
            url: '/pages/login/login',
          })
        },1800)}
      })
    }).catch(err=>{
      console.log("注册数据添加失败",err);
    })
  },

})