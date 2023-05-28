// app.js
App({
  onLaunch: function () {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力');
    } else {
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        env: 'cloud1-2gx6xlsu0ca67a99',
        traceUser: true,
      });
    }
    this.globalData = {};

    //api登录
    // this.apilogin();
    // //登录
    // if (!caches.has('openid')){
    //   if (!caches.get('token')){
    //     this.apilogin();
    //   }
    //   else{
    //     this.wxlogin(cache.get('token'));
    //   }
    // }
  },

  // apilogin(){
  //   // api接口登录
  //   if (!cache.has('token')){
  //     http.httpReq({
  //       url:'http://www.zfw.com/api/login',
  //       method:'POST',
  //       data:{'username':'admin','password':'admin888'}
  //     }).then(ret => {
  //       //把token写入缓存中
  //       cache.set('token', ret.data.token);
  //       if (!cache.has('openid')){
  //         // 登录
  //         this.wxlogin(ret.data.token)
  //       }
  //     })
  //   }
  // },

  // // 小程序登录
  // wxlogin(token){
  //   console.log(token);
  //   wx.login({
  //     timeout:2000,
  //     success:({ code })=>{
  //       // 发起网络请求
  //       http.httpReq({
  //         url: 'http://www.zfw.com/api/v1/wxlogin',
  //         method: 'POST',
  //         data: { code },
  //         token
  //       }).then(ret => {
  //         cache.forever('openid', ret.data.openid)
  //       })
  //     }
  //   })
  // }
    
  
});
