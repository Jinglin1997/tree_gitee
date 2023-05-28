// index.js
// const app = getApp()
const { envList } = require('../../envList.js');
var db=wx.cloud.database();
var id_danshen = ""
Page({
  data: {
    id_danshen:"",
    id_yihun:"",
    "id_weihun":"",
  },

  danshen:function(){
    var num = 0
    var id_danshen = "好好地"
    this.setData({
      id_danshen:"好好地"
    });

    wx.cloud.callFunction({
      name:'count_hb',
      success:res=>{
        var num = res.result.total
        console.log(num)
        if (num<=2){//加上新增这条，实际有5条
          //var date = new Date();
          // db.collection('userResult').add({
          //   data:{
          //     result: id_danshen,
          //     posttime: db.serverDate(),
          //   },
          //   success:res=>{
          //     console.log(res);
          //   }
          // })
          wx.cloud.callFunction({
            name: 'addResult_hb',
            data:{
              result: id_danshen
            }
          })
        }
        else{
        //   db.collection('userResult').where({
        //     result: '好好地'
        //   }).orderBy('createTime','asc').get().then(res=>{
        //     let theOldest = res.data[0]//第一条就是最老的数据。
        //     //console.log(theOldest._id)
        //     db.collection('userResult').doc(theOldest._id).remove()//删除这条数据﻿
        //     db.collection('userResult').add({
        //       data:{
        //         result: id_danshen,
        //         posttime: db.serverDate(),
        //     }})
        //  })

          wx.cloud.callFunction({
            name: 'deleteResult_hb',
            data:{
              result: id_danshen
            }
          })
          // db.collection('userInfo').where({
          //   result: '好好地'
          // }).remove()
        }    
      }
      
    })
    
    
  },

  yihun:function(){
    this.setData({
      id_yihun:"好好经营"
    })
  },

  weihun:function(){
    this.setData({
      id_weihun:"好好走心"
    })
  },

  cleardata:function(){
    this.setData({
      id_danshen:"",
      id_yihun:"",
      id_weihun:"",
    })
  },
  


});
