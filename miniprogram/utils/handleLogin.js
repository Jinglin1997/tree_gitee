const app = getApp()
var login = {
  login:function(e){
    if (e.detail.userInfo) {
      //授权成功后,通过改变 checkLogin 的值，让实现页面显示出来，把授权页面隐藏起来
      app.globalData.checkLogin = true;
      //添加用户数据到数据库
      addUserData();
     } else {
      //用户按了拒绝按钮
      wx.showModal({
       title: '警告',
       content: '您点击了拒绝授权，将无法进入小程序，请授权之后再进入!!!',
       showCancel: false,
       confirmText: '返回授权',
       success: function(res) {
        // 用户没有授权成功，不需要改变 isHide 的值
        if (res.confirm) {
         console.log('用户点击了“返回授权”');
        }
       }
      });
      app.globalData.checkLogin = false;
     }
  }
}
//同步添加用户数据，以后可扩展
async function addUserData(){
  var successFlg=false;
  await wx.cloud.callFunction({
    name: 'addUser'
  }).then(res=>{
    successFlg=res;
  })
  return successFlg;
}
//检查是否应该显示登录授权
var checkLogin = {
  checkLogin:function(that){
    if (app.globalData.checkLogin){
      that.setData({
        showAuthorizationPage:false
      });
    }else{
      //app.js里的checkLoginReadyCallback的回调结果
      app.checkLoginReadyCallback = res => {
        if(app.globalData.checkLogin){
          that.setData({
            showAuthorizationPage:false
          })
        }else{
          that.setData({
            showAuthorizationPage:true
          })
        }
      };
      if(app.globalData.checkLogin){
        that.setData({
          showAuthorizationPage:false
        })
      }else{
        that.setData({
          showAuthorizationPage:true
        })
      }
    }
  }
}
async function getUserInfo(that) {
  try {
    var res = await wx.cloud.callFunction({
      name: 'getUserInfo'
    });
    console.log(res);
    if(res.result.returncode==201){
      app.globalData.checkLogin = true;
      that.setData({
        showAuthorizationPage:false
      })
    }else{
      app.globalData.checkLogin = false;
      that.setData({
        showAuthorizationPage:true
      })
    }
    return res.result;
  } catch (err) {
    console.log(err);
    return null;
  }
}
function setDataAuthorization(that) {
  if(app.globalData.checkLogin){
    that.setData({
      showAuthorizationPage:false
    })
  }else{
    that.setData({
      showAuthorizationPage:true
    })
  }
}
module.exports = {
  login,checkLogin,getUserInfo:getUserInfo,setDataAuthorization:setDataAuthorization
}
