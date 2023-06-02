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
  // login(){
  //   wx.navigateTo({
  //     url:'../login/login'
  //   })
  // },

  // 用户授权
  async login(){
    var nowTime = util.formatTime(new Date());

    // 1、用户授权获取信息
    const { userInfo: { nickName, avatarUrl} } = await wx.getUserProfile({
      desc:"用于完善会员资料"
    })
    
    //2、把当前的用户信息交给后端，存储生成账号
    const { result :{ data } } = await wx.cloud.callFunction({
      name:'login',
      data:{
        posttime: nowTime,
        nickName: nickName,
        avatarUrl: avatarUrl,
      }
    })

    console.log(data)
    var loginTime = data.posttime
    var temp_nowTime = new Date(nowTime.replace(/-/g,'/')) 
    var temp_loginTime = new Date(loginTime.replace(/-/g,'/'))
    var joinDay = parseInt((temp_nowTime - temp_loginTime)/1000/60/60/24)

    this.setData({
      userInfo: data,
      join_day: joinDay,
    })
  },

  addUser:function(){
    const { result :{ data } } = wx.cloud.callFunction({
      name:'addUser',
    })
  },

  management(){
    wx.navigateTo({
      url:'../management/index'
    })
  },

  // 获取用户手机号
//   getPhoneNumber(e) {
//     // console.log(e.detail)
//     wx.cloud.callFunction({
//         name: 'getPhoneNumber',
//         data: {
//             code: e.detail.code
//         },
//         success: (res) => {
//             console.log('调用云函数', res)
//             const phone = res.result.phoneInfo
//             console.log('手机号为：',phone)
//         }
//     })
// },

getPhoneNumber(e) {
	wx.cloud.callFunction({
	    name: 'decodePhone',
	    data: {
	        cloudID: e.detail.cloudID
	    },
	    success: function (res) {
	        console.log("PhoneNumber", res.result)
	        _this.setData({
	            mobile: res.result.list[0].data.phoneNumber
	        })
	    },
	    fail: console.error
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


