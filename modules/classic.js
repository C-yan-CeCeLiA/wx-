import {HTTP} from "../util/http.js";
class classicModules extends HTTP{
  // 获取最新一期的期刊
  getlatest(scallback){
    this.request({
      url: "/classic/latest",
      success: (res) => {
        // 将获取到的数据放入缓存中
        wx.setStorageSync(this._getKey(res.index), res)
        this._setLastetIndex(res.index)
        
        scallback(res)
      }
    })
  };
  // // 获取当前一期的上一刊
  // getPrevious(index,scallback){
  //   this.request({
  //     url:"/classic/" + index + "/previous",
  //     success: (res) => {
  //       scallback(res)
  //     }
  //   })
  // }
  // // 获取当前一期的下一刊
  // getNext(index,scallback){
  //   this.request({
  //     url:"/classic/"+index+"/next",
  //     success: (res) => {
  //       scallback(res)
  //     }
  //   })
  // }
// 合并获取期刊的方法
getClassic(index,nextorprevious,scallback){
  console.log(nextorprevious == "next");
  let key = nextorprevious =="next" ? index+1 : index - 1
  let classic = wx.getStorageSync(this._getKey(key));
  if (!classic){
    this.request({
      url: `/classic/${index}/${nextorprevious}`,
      success: (res) => {
        // 向服务器请求数据时加载缓存
        wx.setStorageSync(this._getKey(res.index), res)
        scallback(res)
      }
    })
  }else{
    scallback(classic)
  }
 
}
  isFirst(index){
    return index == 1;
  }
  isLatest(index){
    // console.log(this._getLastetIndex())
    return index == this._getLastetIndex(index)
  }
  getMyFavor(success){
    const params = {
      url:"/classic/favor",
      success:success
    }
    this.request(params)
  }

  // 设置缓存最新一期的index
  _setLastetIndex(index){

    wx.setStorageSync("latest",index )
  }
  // 读取缓存中最新一期期刊的index
  _getLastetIndex(){
    let index =  wx.getStorageSync("latest")
    return index
  }
// 设置缓存中key
  _getKey(index){
    let key = "classic" + index;
    return key
  }

}

export {
  classicModules
}