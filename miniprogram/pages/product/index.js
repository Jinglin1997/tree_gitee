// pages/sell/index.js
Page({

  /**
   * Page initial data
   */
  data: {
    //楼层数据
    contentImgUrls:[
      {
        title:'2023年元辰纪台历',
        url:'cloud://cloud1-2gx6xlsu0ca67a99.636c-cloud1-2gx6xlsu0ca67a99-1311762654/Slimages/元辰纪抽奖背景.png'
      },{
        title:'衬衫',
        url:''
      },{
        title:'头像定制',
        url:''
      },{
        title:'起名定制',
        url:''
      }
    ],
  },

  /**
   * Lifecycle function--Called when page load
   */

  taili:function(){
    wx.navigateTo({
      url:'../introtaili/index'
    })
  },


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