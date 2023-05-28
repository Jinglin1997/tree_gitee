// pages/selfroom/index.js
// pages/my/my.js
const app = getApp()
var  handleLogin= require('../../utils/handleLogin.js')
var util = require('../../utils/util.js')

Page({
  data: {
   //判断小程序的API，回调，参数，组件等是否在当前版本可用。
   canIUse: wx.canIUse('button.open-type.getUserInfo'),
   showAuthorizationPage: false,
   userInfo:null,
   usersID: '230606up',
   join_day:'100',
  },

  //用户登录
  login(){
    wx.navigateTo({
      url:'../login/login'
    })
  },

  // 用户授权
  async getUserInfo(){
    var time = util.formatTime(new Date());

    // 1、用户授权获取信息
    const { userInfo: { nickName, avatarUrl} } = await wx.getUserProfile({
      desc:"用于完善会员资料"
    })
    
    //2、把当前的用户信息交给后端，存储生成账号
    const { result :{ data } } = await wx.cloud.callFunction({
      name:'login',
      data:{
        posttime: time,
        nickName: nickName,
        avatarUrl: avatarUrl,
      }
    })

    console.log(data)
    this.setData({
      userInfo: data
    })
  },

  management(){
    wx.navigateTo({
      url:'../management/index'
    })
  },

  onShow(){
    // let that = this;
    // console.log("show");
    // handleLogin.checkLogin.checkLogin(that);
   },
  
  onLoad:  function() {
    
  },
  

 })


