// pages/emojiDisplay/emojiDisplay.js
const db = wx.cloud.database()
const book = db.collection('mybook')
const _ = db.command
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    emojiList1:[],
    emojiList:[],
    charList:[]
  },

  getEmoji1: function () {
    const db = wx.cloud.database();
    const _ =db.command;
    db.collection("emoji-default").where({
      no: _.lt(15)}).get({
      success:res =>{
        let emojiList1=res.data
        console.log(emojiList1)
        let charList=[];
        for (let i = 0; i < 14; i++){
          charList.push(emojiList1[i].char)
        }
        this.setData({
          charList: charList
        })
      }, fail: err => {
        wx.showToast({
          icon: 'none',
          title: "查询记录失败"
        })
      }
    })
  },

  getEmoji2: function () {
    const db = wx.cloud.database();
    db.collection('emoji-default').get({
      success: res => {
        this.setData({
          emojiList2: res.data
        })
      }
    })
  },

  // getEmoji:function(){
  //   const db = wx.cloud.database();
  //   const emojiList = db.collection('emoji-default')
  //   console.log(emojiList)
  //   const _ = db.command;
  //   db.collection('emoji-default').where({
  //     no: _.lt(30)
  //   }).get({
  //     success(res) {
  //       emojiList: res.data,
  //       console.log(res.data)
  //       console.log(2)
  //     }, fail: err => {
  //       wx.showToast({
  //         icon: 'none',
  //         title: "查询记录失败"
  //       })
  //     }
  //   })
  // },



//需要了解失败原因
// const db = wx.cloud.database();
// db.collection('emoji-default').doc('5c80d7f625cee232bb5172db').get({
//   success(res){
//     console.log(res.data)
//   }
// })


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // db.collection('emoji-default').get({
    //   success: res => {
    //     this.setData({
    //       emojiList: res.data
    //     })
    //   }
    // })
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})