import { HTTP } from "../util/http-p.js";
class bookModule extends HTTP{
  getHotList(){
   const hot_list =  this.request("/book/hot_list")
    return hot_list
  }
  // _setHotListCache(data){
  //   wx.setStorageSync("hot_list", data)
  // }
  getDetail(id){
    const detail = this.request(`/book/${id}/detail`)
    return detail
  }
  getComment(id){
    const comment = this.request(`/book/${id}/short_comment`)
    return comment
  }
  getListStaute(id){
    const fav = this.request(`/book/${id}/favor`)
    return fav
  }
 
}
export {
  bookModule
}