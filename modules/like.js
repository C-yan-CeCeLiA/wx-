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


  // 获取点赞人数，和点赞状态，（从缓存中分离）
  _getLikeStatus(type, art_id, scallback) {
    this.request({
      url: `/classic/${type}/${art_id}/favor`,
      success: (res) => {
        scallback(res)
      }
    })
  }
}
export {
  likeModule
}