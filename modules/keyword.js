import {HTTP} from "../util/http-p.js";

class keywordModule extends HTTP{
  // 获取历史搜索
  key = "a"
  maxlength = 10

  getHistory(){
    let word = wx.getStorageSync(this.key)
    if(!word){
     
      return []
    }
    return word
    
  }
// 获取热门搜索
  getHotList(){
    return this.request("/book/hot_keyword")
  }
  // 将历史搜索添加进缓存
  addToHistory(word){
    const words = this.getHistory()
    let has = words.includes(word)
    let keylength = words.length
    if(!has){
      console.log(keylength >= this.maxlength)
      if (keylength >= this.maxlength){ 
        words.pop()
      }
      words.unshift(word)
      wx.setStorageSync(this.key, words)
    }

   
  }
}
export {
  keywordModule
}