// pages/introtaili/index.js
Page({

  /**
   * Page initial data
   */
  data: {

  },

  totaili:function(){
    wx.navigateToMiniProgram({
      // appId: '',
      // path: 'page/index/index?id=123',
      // extraData: {
      //   foo: 'bar'
      // },
      shortLink: '#小程序://微店+/kLdp92l5kzoRofx',
      envVersion: 'release',
      success(res) {
        // 打开成功
        // console.log('123')
      }
    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad(options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady() {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow() {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide() {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload() {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh() {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom() {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage() {

  }
})