import { bookModule } from "../../modules/book.js";
let BookModule = new bookModule();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    books:null,
    searching:false,
    more:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    BookModule.getHotList().then(res=>{
      console.log(res)
      this.setData({
        books:res
      })
    })
  },
// 跳转到search页面
  _Tosearch(){
    this.setData({
      searching: true
    })
  },
  // 取消搜索
  
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },
  _cancel(evnet){

    this.setData({
      searching: false
    })
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
    this.setData({
      more: !this.data.more
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})