import {likeModule} from "../../modules/like.js";
import {classicModules} from "../../modules/classic.js";
let classicModule = new classicModules();
let like= new likeModule();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    latest:true,
    first:false,
    classicData:null,
    like_status:false,
    fav_nums:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    classicModule.getlatest((res)=>{
      // this._getLike(res.type, res.id)
      // console.log(res);
      this.setData({
        classicData:res,
        like_status: res.like_status,
        fav_nums: res.fav_nums
      })
    })
  },
onlike:function(event){
 let behavior = event.detail.behavior;

  like.like(behavior, this.data.classicData.id,this.data.classicData.type)
 },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  previous:function(event){
   this._upGetClassic("previous")
  },
  next:function(event){
    this._upGetClassic("next")
  },



  _upGetClassic(nextorprovius){
    
    classicModule.getClassic(this.data.classicData.index, nextorprovius,(res)=>{
      this._getLike(res.type,res.id)
      this.setData({
        classicData: res,
        first: classicModule.isFirst(res.index),
        latest: classicModule.isLatest(res.index)
      })
    })
  },
_getLike(type,id){
  like._getLikeStatus(type,id,(res)=>{
    console.log(`点赞信息${res}`)
    this.setData({
      like_status: res.like_status,
      fav_nums: res.fav_nums
    })
  })
},

















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