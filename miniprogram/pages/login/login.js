// pages/login/login.js
// Page({

//     /**
//      * 页面的初始数据
//      */
//     data: {
//       current:1,
//       codeText:'获取验证码',
//       counting:false,
//     },
//     // 登陆注册监听
//     click(e){
//       let index = e.currentTarget.dataset.code;
//       this.setData({
//         current:index
//       })
//     },
//     //获取验证码 
//     getCode(){
//       var that = this;
//       if (!that.data.counting) {
//         wx.showToast({
//           title: '验证码已发送',
//         })
//         //开始倒计时60秒
//         that.countDown(that, 60);
//       } 
//     },
//     //倒计时60秒
//     countDown(that,count){
//       if (count == 0) {
//         that.setData({
//           codeText: '获取验证码',
//           counting:false
//         })
//         return;
//       }
//       that.setData({
//         counting:true,
//         codeText: count + '秒后重新获取',
//       })
//       setTimeout(function(){
//         count--;
//         that.countDown(that, count);
//       }, 1000);
//     },
//     /**
//      * 生命周期函数--监听页面加载
//      */
//     onLoad(options) {
  
//     },
  
//     /**
//      * 生命周期函数--监听页面初次渲染完成
//      */
//     onReady() {
  
//     },
  
//     /**
//      * 生命周期函数--监听页面显示
//      */
//     onShow() {
  
//     },
  
//     /**
//      * 生命周期函数--监听页面隐藏
//      */
//     onHide() {
  
//     },
  
//     /**
//      * 生命周期函数--监听页面卸载
//      */
//     onUnload() {
  
//     },
  
//     /**
//      * 页面相关事件处理函数--监听用户下拉动作
//      */
//     onPullDownRefresh() {
  
//     },
  
//     /**
//      * 页面上拉触底事件的处理函数
//      */
//     onReachBottom() {
  
//     },
  
//     /**
//      * 用户点击右上角分享
//      */
//     onShareAppMessage() {
  
//     }
//   })

//自定义变量，存储用户输入的账号
let account = ''
//自定义变量，存储用户输入的密码
let password = ''
Page({

  //点击跳转到注册页
  toSign(){
    wx.navigateTo({
      url: '/pages/sign/sign',
    })
  },

  //获取用户输入的账号、密码
  getAccount(e){
    console.log("用户输入的账号",e.detail.value);
    account = e.detail.value
  },
  getPassword(e){
    console.log("用户输入的密码",e.detail.value);
    password = e.detail.value
  },

  //登录功能
  loadByAccount(){
    //校验账号
    if(account.length<5){
      wx.showToast({
        title: '账号至少5位',
        icon:"none"
      })
      return
    }
    //登录功能的实现
    wx.cloud.database().collection("users")
    .where({
      Account:account
    })
    .get({})
    .then(res=>{
      console.log("获取账号成功",res);
      //校验密码长度
      if(password.length<5){
        wx.showToast({
          title: '密码至少5位',
          icon:"none"
        })
        return
      }
      //校验密码是否等于数据库中的密码
      if(password==res.data[0].Password){
        console.log("登录成功",res);
        //显示登录成功提示
        wx.showToast({
          title: '登录成功',
          icon:"success",
          duration:2000,
          //提示2秒后自动跳转到首页
          success:function(){
            setTimeout(function(){
              wx.switchTab({
              url: '/pages/myroom/index',
              })
            },1800)
          }
        })
      }else{
        console.log("密码不正确，登录失败");
        wx.showToast({
          title: '密码不正确',
          icon:"none"
        })
      }
    })
    .catch(err=>{
      console.log("获取账号失败",err);
      wx.showToast({
        title: '账号不存在',
        icon:"none"
      })
    })
  },
})