import {config}  from "../config.js";
const tips = {
  1:"发生了一个错误",
  1005:"appkey错误",
  3000:"期刊不存在"
};
class HTTP{
  request(parm){
    if(!parm.method){
      parm.method = "GET"
    }
    wx.request({
      url: config.api_bast_url + parm.url,
      method:parm.method,
      data:parm.data,
      header:{
        "content-type":"application/json",
        "appkey":config.appkey
      },
      success:(res)=>{
        let code = res.statusCode.toString();
        // 成功回调
        if(code.startsWith("2")){
          parm.success && parm.success(res.data)
        }else{
          
          if (!tips[res.error_code]){
            res.error_code = 1;
          }
         this._show_err(res.error_code)
        }
      },
      fail:(err)=>{
        wx.showToast({
          title: "请检测客户端与服务器的联通",
          icon: "none",
          duration: 2000
        })
      }
    })
  }

  _show_err(err_code){
    console.log(err_code)
    wx.showToast({
      title: tips[err_code],
      icon:"none",
      duration:2000
    })
  }
}
export {
  HTTP
}