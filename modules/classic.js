import {HTTP} from "../util/http.js";
class classicModules extends HTTP{
  getlatest(scallback){
    this.request({
      url: "/classic/latest",
      success: (res) => {
        this._setLastetIndex(res.index)
        
        scallback(res)
      }
    })
  };
  // 获取当前一期的上一刊
  getPrevious(index,scallback){
    this.request({
      url:"/classic/" + index + "/previous",
      success: (res) => {
        scallback(res)
      }
    })
  }
  // 获取当前一期的下一刊
  getNext(index,scallback){
    this.request({
      url:"/classic/"+index+"/next",
      success: (res) => {
        scallback(res)
      }
    })
  }

  isFirst(index){
    return index == 1;
  }
  isLatest(index){
    console.log(this._getLastetIndex())
    return index == this._getLastetIndex(index)
  }
  // 保存最新一期的index
  _setLastetIndex(index){

    wx.setStorageSync("latest",index )
  }
  // 获取最新一期
  _getLastetIndex(){
    let index =  wx.getStorageSync("latest")
    return index
  }
}

export {
  classicModules
}