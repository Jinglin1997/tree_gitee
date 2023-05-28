// pages/homepage/index.js
const app = getApp()
var  handleLogin= require('../../utils/handleLogin.js')
Page({
  data: {
   //判断小程序的API，回调，参数，组件等是否在当前版本可用。
   canIUse: wx.canIUse('button.open-type.getUserInfo'),
   showAuthorizationPage: false,
   userInfo:null
  },

  heartbook:function(){
    wx.navigateTo({
      url:'../index/index'
    })
  },

  aboutKELP:function(){
    wx.navigateTo({
      url:'../aboutKELP/index'
    })
  },
  
  onShow(){
  let that = this;
  console.log("show");
  handleLogin.checkLogin.checkLogin(that);
 },
 onLoad() {
  
  },
  //小程序官方的获取用户信息的接口变化了，后续可能会修改
  bindGetUserInfo: function(e) {
   handleLogin.login.login(e);
   if(app.globalData.checkLogin){
    this.setData({
      showAuthorizationPage: false
     });
   }
  },

  
 })
