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
    classicData:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    classicModule.getlatest((res)=>{
      console.log(res);
      this.setData({
        classicData:res
      })
    })
  },
onlike:function(event){
 let behavior = event.detail.behavior;
//  console.log(event)
  like.like(behavior, this.data.classicData.id,this.data.classicData.type)
0},
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  previous:function(event){
    classicModule.getPrevious(this.data.classicData.index,(res)=>{
      
      this.setData({
        classicData:res,
        first: classicModule.isFirst(res.index),
        latest: classicModule.isLatest(res.index)
      })
    })
  },
  next:function(event){
    classicModule.getNext(this.data.classicData.index,(res)=>{
      console.log(res.index)
      console.log(classicModule.isLatest(res.index))
      this.setData({
        classicData: res,
        first: classicModule.isFirst(res.index),
        latest: classicModule.isLatest(res.index)
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