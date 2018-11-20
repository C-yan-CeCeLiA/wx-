// pages/books/books_detail/index.js
import {bookModule} from "../../../modules/book.js";
const BookModule = new bookModule();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail:null,
    comment:null,
    like_status:false,
    like_count:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (opt) {
    let id = opt.bid
    let detail = BookModule.getDetail(id);
    let comment = BookModule.getComment(id);
    let fav = BookModule.getListStaute(id);

    detail.then((res)=>{
      console.log(res)
     this.setData({
       detail:res
     })
    })
    comment.then(res=>{
      console.log(res.comments)
      this.setData({
        comment:res.comments
      })
    })
    fav.then(res=>{
      console.log(res)
      this.setData({
        like_count: res.fav_nums,
        like_status: res.like_status
      })
    })

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