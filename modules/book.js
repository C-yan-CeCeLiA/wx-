import { HTTP } from "../util/http-p.js";
class bookModule extends HTTP{
  getHotList(){
   const hot_list =  this.request("/book/hot_list")
    return hot_list
  }
 
  
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
  _setStorage(id,data){
    wx.setStorageSync(_getKey(id), data)
  }
  _getKey(id){
    return "book-"+id;
  }
  addShortComment(id, content){
    return this.request("/book/add/short_comment", {book_id: id, content:content},'POST')
  }
 
 
}
export {
  bookModule
}