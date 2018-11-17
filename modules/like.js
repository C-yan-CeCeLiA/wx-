import {HTTP} from "../util/http.js";
class likeModule extends HTTP{
  
  like(behavior, artID, type){
    let url = behavior == "like" ? "/like" :"/like/cancel";
    console.log(url)
    this.request({
      url:url,
      method:"POST",
      data:{
        art_id:artID,
        type:type
      }

    })
  }
}
export {
  likeModule
}