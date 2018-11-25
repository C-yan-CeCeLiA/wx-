// pages/like/like.js
import { bookModule } from "../../modules/book.js";
let BookModule = new bookModule();
import { classicModules } from "../../modules/classic.js";
let classicModule = new classicModules();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    auto:false,
    userInfo:null,
    bookCount:0
  },
  getuseinfo(event){

    // console.log(event)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    this.userAutomatic()
    this.getMyBookCount()
  },
  userAutomatic(){
    wx.getSetting({
      success:data=>{
        if (data.authSetting["scope.userInfo"]){
          wx.getUserInfo({
            success:data=>{
              this.setData({
                auto:true,
                userInfo:data.userInfo
              })
            }
          })
        }else{
          console.log("err")
        }

      }
    })
  },
 
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  getMyBookCount() {
    BookModule.getMyBookCount().then(res => {
     this.setData({
       bookCount:res.count
     })
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
  onGetUserInfo(event){
    console.log(event)
    let userInfo = event.detail.userInfo;
    if(userInfo){
      this.setData({
        userInfo,
        auto: true
      })
    }
  },
  ToAbout(){
    wx.navigateTo({
      url: '/pages/about/index',
    })
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