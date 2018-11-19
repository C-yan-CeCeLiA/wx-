// 使用promise重构对象

import {config}  from "../config.js";
const tips = {
  1:"发生了一个错误",
  1005:"appkey错误",
  3000:"期刊不存在"
};
class HTTP{

  request(url,data={},method="GET"){
    return new Promise((resolve,reject)=>{
      
      this._request(url,resolve,reject,data,method)
    
    })

  }
  _request(url,resolve,reject,data={},method="GET"){
    wx.request({
      url: config.api_bast_url +url,
      method:method,
      data:data,
      header:{
        "content-type":"application/json",
        "appkey":config.appkey
      },
      success:(res)=>{
        let code = res.statusCode.toString();
        // 成功回调
        if(code.startsWith("2")){
          resolve(res.data)
        }else{
          reject()
          if (!tips[res.error_code]){
            res.error_code = 1;
          }
         this._show_err(res.error_code)
        }
      },
      fail:(err)=>{
        reject()
        wx.showToast({
          title: tips[err_code],
          icon: "none",
          duration: 2000
        })
      }
    })
  }

  _show_err(err_code){
 
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